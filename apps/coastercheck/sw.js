const CACHE_VERSION = 'v26-web1';
const SHELL_CACHE = `coastercheck-shell-${CACHE_VERSION}`;
const FONT_CACHE = `coastercheck-fonts-${CACHE_VERSION}`;
const IMAGE_CACHE = `coastercheck-images-${CACHE_VERSION}`;

const SCOPE = new URL('./', self.location).pathname;

const APP_SHELL = [
    './',
    './index.html',
    './manifest.json',
    './src/css/variables.css',
    './src/css/reset.css',
    './src/css/layout.css',
    './src/css/components.css',
    './src/css/form.css',
    './src/css/animations.css',
    './src/js/app.js',
    './src/js/db.js',
    './src/js/score.mjs',
    './src/js/config.js',
    './src/js/sw-register.js',
    './assets/fonts/fonts.css',
    './assets/fonts/material-symbols-rounded-400-fallback.woff2',
    './src/data/categories.json',
    './src/data/parks/heidepark.json',
    './src/data/parks/phantasialand.json',
    './src/data/parks/moviepark.json',
    './assets/icons/logo_foreground.svg',
    './assets/icons/logo_background.svg',
    './assets/icons/heidepark_logo.png',
    './assets/icons/phantasialand_logo.png',
    './assets/icons/moviepark_logo.png',
];

// Install: pre-cache the app shell
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(SHELL_CACHE).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

// Activate: remove outdated caches
self.addEventListener('activate', (event) => {
    const validCaches = [SHELL_CACHE, FONT_CACHE, IMAGE_CACHE];
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => !validCaches.includes(key))
                    .map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle same-origin requests from here on
    if (url.origin !== self.location.origin) return;

    // App shell assets: cache first, network fallback
    const isShellAsset =
        url.pathname === SCOPE ||
        url.pathname.endsWith('.html') ||
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.mjs') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.json') ||
        url.pathname.endsWith('.svg') ||
        url.pathname.endsWith('.woff2');

    if (isShellAsset) {
        event.respondWith(cacheFirst(request, SHELL_CACHE));
        return;
    }

    // Images & clips: cache first, network fallback
    if (
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.webp') ||
        url.pathname.endsWith('.mp4')
    ) {
        event.respondWith(cacheFirst(request, IMAGE_CACHE));
        return;
    }
});

async function cacheFirst(request, cacheName) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        // Skip 206 partial responses (e.g. video range requests): the Cache API rejects them.
        if (response.status === 200) {
            const cache = await caches.open(cacheName);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        // Offline and not cached, nothing we can do
        return new Response('Offline, Resource not available.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    }
}

// Background Sync
// Must match src/js/db.js. The SW can open the DB before any page has, so it
// recreates the same object stores to avoid a missing sync_queue.
const IDB_NAME    = 'CoasterCheckDB';
const IDB_VERSION = 2;

function _idbOpen() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(IDB_NAME, IDB_VERSION);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('rides')) {
                db.createObjectStore('rides', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('reviews')) {
                const store = db.createObjectStore('reviews', { keyPath: 'localId', autoIncrement: true });
                store.createIndex('by_ride', 'rideId');
                store.createIndex('by_time', 'timestamp');
            }
            if (!db.objectStoreNames.contains('sync_queue')) {
                db.createObjectStore('sync_queue', { keyPath: 'queueId', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains('ride_counts')) {
                db.createObjectStore('ride_counts', { keyPath: 'rideId' });
            }
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror   = (e) => reject(e.target.error);
    });
}

function _idbGetAll(idb, storeName) {
    return new Promise((resolve, reject) => {
        const req = idb.transaction(storeName, 'readonly').objectStore(storeName).getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror   = (e) => reject(e.target.error);
    });
}

function _idbDelete(idb, storeName, key) {
    return new Promise((resolve, reject) => {
        const req = idb.transaction(storeName, 'readwrite').objectStore(storeName).delete(key);
        req.onsuccess = resolve;
        req.onerror   = (e) => reject(e.target.error);
    });
}

// Muss zur Konfiguration in src/js/config.js passen: null = kein Server.
const API_BASE = null;

async function _syncReviews() {
    if (API_BASE === null) return; // statische Demo ohne Backend
    const idb   = await _idbOpen();
    const queue = await _idbGetAll(idb, 'sync_queue');

    for (const item of queue) {
        const { review, queueId } = item;
        const userId = review.userId ?? 'anonymous';

        try {
            const res = await fetch(`${API_BASE}/api/v1/reviews`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id':    userId,
                },
                body: JSON.stringify(review),
            });

            // Drop on success or a permanent 4xx (those never succeed on retry).
            // Only 5xx / network errors are retried; the server dedups duplicates.
            const permanentClientError =
                res.status >= 400 && res.status < 500 && res.status !== 408 && res.status !== 429;
            if (res.ok || permanentClientError) {
                await _idbDelete(idb, 'sync_queue', queueId);
            }
        } catch {
            // Network error, browser will retry sync automatically
            idb.close();
            throw new Error('Sync failed, will retry');
        }
    }

    idb.close();
}

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-reviews') {
        event.waitUntil(_syncReviews());
    }
});

// Push Notifications
// Show an incoming push message as a system notification.
self.addEventListener('push', (event) => {
    let data = {};
    try {
        data = event.data ? event.data.json() : {};
    } catch {
        data = { title: 'CoasterCheck', body: event.data ? event.data.text() : '' };
    }

    const title = data.title || 'CoasterCheck 🎢';
    const options = {
        body:  data.body || 'Es gibt Neuigkeiten in CoasterCheck.',
        icon:  `${SCOPE}assets/icons/icon-192.png`,
        badge: `${SCOPE}assets/icons/icon-192.png`,
        data:  { url: data.url || SCOPE },
        vibrate: [80, 40, 80],
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

// Focus an existing window (or open one) when the user taps the notification.
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = event.notification.data?.url || SCOPE;

    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if ('focus' in client) {
                    client.navigate(targetUrl);
                    return client.focus();
                }
            }
            return self.clients.openWindow(targetUrl);
        })
    );
});

