/**
 * CoasterCheck App Entry Point
 * Navigation, Parks-Screen, Rate-Modal (Stepper), Logbook, Hall of Fame
 */

import {
    openDB,
    cacheRides,
    getCachedRides,
    saveReview as saveReviewToDB,
    getReviews,
    getSyncQueueCount,
    getSyncQueue,
    deleteSyncQueueItem,
    getRideCount,
    getAllRideCounts,
    updateReview,
    deleteReview as deleteReviewFromDB,
    adjustRideDayCount,
    decrementRideCount,
    migrateFromLocalStorage,
    clearAllData,
    mergeImportedReviews,
    mergeImportedCounts
} from './db.js';

import { clamp, computeDisplayScore, computeDetailScores } from './score.mjs';

// Basis-URL des CoasterCheck-Servers. Ohne Angabe: gleiche Herkunft wie die App.
// window.CC_API_BASE === null schaltet alle Serverfunktionen ab - das ist der Fall
// in der statischen Demo auf janafisenko.de, wo kein Backend mitlaeuft. Die App
// bleibt dann voll benutzbar, nur Wartezeiten, Oeffnungszeiten, Push und der
// Abgleich der Bewertungen mit dem Server entfallen.
const API_BASE    = ('CC_API_BASE' in window) ? window.CC_API_BASE : '';
const HAS_BACKEND = API_BASE !== null;
const apiUrl      = path => `${API_BASE ?? ''}${path}`;

const FAV_KEY = 'coastercheck_favorites';

function _loadFavorites() {
    try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]')); }
    catch { return new Set(); }
}

function _saveFavorites(set) {
    localStorage.setItem(FAV_KEY, JSON.stringify([...set]));
}

const SETTINGS_KEY = 'coastercheck_settings';

function _loadSettings() {
    try {
        const defaults = { theme: 'system', interval: '10', pushEnabled: false, gpsEnabled: true };
        const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
        return { ...defaults, ...saved };
    } catch {
        return { theme: 'system', interval: '10', pushEnabled: false, gpsEnabled: true };
    }
}

function _saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// Web Push helpers
// Convert a base64url VAPID key into the Uint8Array the PushManager expects.
function _urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const raw = atob(base64);
    const output = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) output[i] = raw.charCodeAt(i);
    return output;
}

function _pushSupported() {
    return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
}

// Subscribe this device to push and register the subscription on the server.
async function _subscribeToPush(userId) {
    if (!HAS_BACKEND) throw new Error('Push braucht den CoasterCheck-Server; in dieser Demo laeuft keiner mit.');
    if (!_pushSupported()) throw new Error('Push wird nicht unterstützt');

    const reg = await navigator.serviceWorker.ready;
    let subscription = await reg.pushManager.getSubscription();

    if (!subscription) {
        const res = await fetch(apiUrl('/api/v1/push/vapid-public-key'));
        if (!res.ok) throw new Error('VAPID-Schlüssel nicht verfügbar');
        const { publicKey } = await res.json();
        subscription = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: _urlBase64ToUint8Array(publicKey),
        });
    }

    await fetch(apiUrl('/api/v1/push/subscribe'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ subscription }),
    });

    return subscription;
}

// Remove this device's push subscription locally and on the server.
async function _unsubscribeFromPush(userId) {
    if (!HAS_BACKEND) return;
    if (!_pushSupported()) return;
    const reg = await navigator.serviceWorker.ready;
    const subscription = await reg.pushManager.getSubscription();
    if (!subscription) return;

    await fetch(apiUrl('/api/v1/push/unsubscribe'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
        body: JSON.stringify({ endpoint: subscription.endpoint }),
    }).catch(() => {});

    await subscription.unsubscribe().catch(() => {});
}

const WAIT_CACHE_KEY = 'coastercheck_wait_cache';

function _loadWaitCache() {
    try { return JSON.parse(localStorage.getItem(WAIT_CACHE_KEY) || '{}'); }
    catch { return {}; }
}

function _saveWaitCache(cache) {
    try { localStorage.setItem(WAIT_CACHE_KEY, JSON.stringify(cache)); }
    catch { /* storage quota reached; ignore, cache is non-critical */ }
}

const SCHEDULE_CACHE_KEY = 'coastercheck_schedule_cache';

function _loadScheduleCache() {
    try { return JSON.parse(localStorage.getItem(SCHEDULE_CACHE_KEY) || '{}'); }
    catch { return {}; }
}

function _saveScheduleCache(cache) {
    try { localStorage.setItem(SCHEDULE_CACHE_KEY, JSON.stringify(cache)); }
    catch { /* storage quota reached; ignore, cache is non-critical */ }
}

// Normalize ride names so local data and queue-times.com names can be matched.
function _normalizeRideName(name) {
    return (name || '')
        .toLowerCase()
        .replace(/[–—_-]/g, ' ')
        .replace(/[^a-z0-9äöüß ]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function _getUserId() {
    const KEY = 'coastercheck_user_id';
    let id = localStorage.getItem(KEY);
    if (!id) { id = crypto.randomUUID(); localStorage.setItem(KEY, id); }
    return id;
}

const PARK_NAMES = {
    heide_park:    'Heide Park Resort',
    phantasialand: 'Phantasialand',
    movie_park:    'Movie Park Germany'
};

const PARK_CONFIG = {
    heide_park:    { short: 'Heide Park',      hueA: '#2ecc71', hueB: '#1a9e4f', motto: 'Abenteuer nonstop',          location: 'Soltau',  logo: 'assets/icons/heidepark_logo.png',       image: 'assets/images/parks/heidepark.webp', coords: { lat: 53.02444, lng: 9.87972 } },
    phantasialand: { short: 'Phantasialand',  hueA: '#e53935', hueB: '#b71c1c', motto: 'Eine Welt voller Wunder',    location: 'Brühl',   logo: 'assets/icons/phantasialand_logo.png',   image: 'assets/images/parks/phantasialand.webp', coords: { lat: 50.7989, lng: 6.8791 } },
    movie_park:    { short: 'Movie Park',     hueA: '#2979ff', hueB: '#1a50c8', motto: 'Licht, Kamera, Action!',     location: 'Bottrop', logo: 'assets/icons/moviepark_logo.png',       image: 'assets/images/parks/moviepark.webp', coords: { lat: 51.6200, lng: 6.9725 } }
};

// CoasterCheck logo used as a placeholder when a card has no image yet.
const CC_LOGO = 'assets/icons/logo_foreground.svg';

const CAT_LABELS = {
    roller_coasters:       'Achterbahn',
    water_rides:           'Wasserbahn',
    dark_rides:            'Themenfahrt',
    thrill_rides:          'Thrill-Ride',
    flat_rides_vertical:   'Thrill-Ride',
    flat_rides_horizontal: 'Rundfahrgeschäft',
    walkthrough:           'Laufgeschäft',
    scenic_rides:          'Panoramafahrt',
    kid_rides:             'Kinderfahrt'
};

// clamp, computeDisplayScore and computeDetailScores now live in ./score.mjs
// (pure, unit-tested) and are imported at the top of this file.

function ridePrescore(ride) {
    const t = ride.app_metrics.thrill_level;
    const base = t === 'high' ? 68 : t === 'medium' ? 48 : 28;
    const invBonus = Math.min(10, (ride.stats.inversions ?? 0) * 2);
    return clamp(base + invBonus, 0, 100);
}

function thrillMeterSVG(value, size = 56) {
    const r = (size - 12) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (circ * clamp(value, 0, 100) / 100);
    const numSize = Math.round(size * 0.29);
    const lblSize = Math.round(size * 0.15);
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="5" stroke-linecap="round"/>
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,.9)" stroke-width="5" stroke-linecap="round"
            stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
            transform="rotate(-90 ${size/2} ${size/2})"
            style="transition:stroke-dashoffset var(--cc-t-slow)"/>
        <text x="${size/2}" y="${size/2}" text-anchor="middle" dominant-baseline="central"
            style="font-family:var(--font-display);font-size:${numSize}px;font-weight:700;fill:white;font-variant-numeric:tabular-nums">${Math.round(value)}</text>
        <text x="${size/2}" y="${size * 0.72}" text-anchor="middle"
            style="font-size:${lblSize}px;font-weight:700;fill:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.08em">Score</text>
    </svg>`;
}

function thrillMeterSVGDark(value, size = 52) {
    const r = (size - 12) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (circ * clamp(value, 0, 100) / 100);
    const numSize = Math.round(size * 0.26);
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--cc-border)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="url(#tmd${size})" stroke-width="4.5" stroke-linecap="round"
            stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
            transform="rotate(-90 ${size/2} ${size/2})"
            style="transition:stroke-dashoffset var(--cc-t-slow)"/>
        <defs>
            <linearGradient id="tmd${size}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="var(--cc-accent)"/>
                <stop offset="100%" stop-color="var(--cc-accent-2)"/>
            </linearGradient>
        </defs>
        <text x="${size/2}" y="${size/2}" text-anchor="middle" dominant-baseline="central"
            style="font-family:var(--font-display);font-size:${numSize}px;font-weight:700;fill:var(--cc-ink);font-variant-numeric:tabular-nums">${Math.round(value)}</text>
    </svg>`;
}

function spawnConfetti(container) {
    const colors = ['#E85D3B', '#FFB347', '#39B1A7', '#D63384', '#0EA5E9'];
    const shapes = ['rect', 'circle', 'rect'];
    for (let i = 0; i < 32; i++) {
        const el = document.createElement('span');
        el.className = 'confetti-particle';
        const color = colors[i % colors.length];
        const shape = shapes[i % shapes.length];
        const x = (Math.random() * 200 - 100) + 'px';
        const delay = (Math.random() * 200) + 'ms';
        el.style.cssText = `
            background: ${color};
            border-radius: ${shape === 'circle' ? '50%' : '2px'};
            left: ${40 + Math.random() * 20}%;
            top: 20%;
            transform-origin: center;
            animation-delay: ${delay};
            animation-duration: ${1200 + Math.random() * 600}ms;
            --tx: ${x};
        `;
        container.appendChild(el);
    }
}

class App {
    constructor() {
        this.nav          = document.getElementById('bottom-nav');
        this.pages        = document.querySelectorAll('.page');
        this.navItems     = document.querySelectorAll('.bottom-nav__item');
        this.currentPage  = 'page-parks';
        this.categories   = null;
        this.rides        = [];
        this.activePark   = 'all';
        this.searchQuery  = '';
        this.db           = null;

        this.filters   = { categories: [], features: [], themeAreas: [], hideHeadache: false, favOnly: false, minHeight: 'all', minAge: 'all', thrillLevels: [], onlyLoops: false };
        this.sortOrder = 'default';
        this.shortWaitFilter = { onlyCoasters: false, threshold: 30 };
        this.favorites = _loadFavorites();
        this.settings  = _loadSettings();

        this.reviewModal        = document.getElementById('review-modal');
        this.currentReviewRide  = null;
        this.currentStep        = 1;
        this.userId             = _getUserId();
        this.editingReviewId    = null;
        this.infoSheetRide      = null;
        this.activeLogbookTab   = 'diary';
        this.reviews            = [];

        this._applyTheme(this.settings.theme);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.settings.theme === 'system') this._applyTheme('system');
        });

        this.init();
        this.initParkChips();
        this.initMoreParksPopup();
        this.initSearch();
        this.initFilters();
        this.initReviewForm();
        this.initRideInfoSheet();
        this.initOnlineStatus();
        this.initGeolocation();
        this.initSettings();
        this.initPushHint();
        this.initWaitTimes();
        this.initAsync();
    }

    async initAsync() {
        try {
            this.db = await openDB();
            await migrateFromLocalStorage(this.db);
            this.reviews = await getReviews(this.db);
        } catch (e) {
            console.error('IndexedDB not available:', e);
            this.reviews = [];
        }
        await this.loadInitialData();
        this.setupDBClose();
        this._applyStartView();
        this._updateAppBadge();
        // Upload anything left in the IndexedDB sync queue (e.g. saved on a
        // browser without Background Sync, so the Service Worker never posted it).
        this._flushSyncQueue();
    }

    // Manifest shortcuts open the app with ?view=..., then jump to the matching page.
    _applyStartView() {
        const view = new URLSearchParams(location.search).get('view');
        const pageId = { parks: 'page-parks', logbook: 'page-logbook', fame: 'page-fame' }[view];
        if (pageId) {
            this.navigateTo(pageId);
            // Clean the URL so a later reload starts on the default page.
            history.replaceState(null, '', location.pathname);
        }
    }

    // App badge: number of reviews still queued for sync (installed-app affordance).
    async _updateAppBadge() {
        if (!('setAppBadge' in navigator) || !this.db) return;
        try {
            const pending = await getSyncQueueCount(this.db);
            if (pending > 0) navigator.setAppBadge(pending);
            else navigator.clearAppBadge?.();
        } catch { /* badge is best-effort only */ }
    }

    // Web Share API: share a review's score card. Falls back to a clipboard copy
    // where navigator.share is unavailable (e.g. most desktop browsers).
    async _shareReview(ride, review) {
        const score = review.scores?.display;
        const text  = `🎢 ${ride.name}: ${score}/100 Punkte in meinem CoasterCheck-Logbuch!`;
        const shareData = { title: 'CoasterCheck', text, url: location.origin || 'https://srv201.online-hs-el.de' };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(`${text} ${shareData.url}`);
                this.showToast('Score in die Zwischenablage kopiert.');
            }
        } catch (err) {
            // User cancelled the share sheet, not an error worth surfacing.
            if (err?.name !== 'AbortError') console.warn('Share failed:', err);
        }
    }

    setupDBClose() {
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'hidden') {
                if (this.db) { this.db.close(); this.db = null; }
                // Pause wait-time polling while backgrounded (saves battery).
                this._stopWaitLoop();
            } else {
                try { this.db = await openDB(); } catch (e) { console.error('DB reconnect failed:', e); }
                // Background Sync may have drained the queue while hidden, refresh the badge.
                this._updateAppBadge();
                // Resume polling and catch up on wait times that went stale.
                if (this.activePark && this.activePark !== 'all') {
                    this._startWaitLoop();
                    if (navigator.onLine) this.fetchWaitTimes(this.activePark, { silent: true });
                }
            }
        });
    }

    init() {
        document.getElementById('home-btn')?.addEventListener('click', () => {
            this._resetParksToHome();
        });

        this.nav.addEventListener('click', (e) => {
            const item = e.target.closest('.bottom-nav__item');
            if (!item) return;
            const pageId = item.dataset.page;
            if (pageId && pageId !== this.currentPage) this.navigateTo(pageId);
        });

        this.nav.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const item = e.target.closest('.bottom-nav__item');
                if (item) { e.preventDefault(); item.click(); }
            }
        });

        const tabDiary = document.getElementById('logbook-tab-diary');
        const tabLog = document.getElementById('logbook-tab-log');
        if (tabDiary && tabLog) {
            tabDiary.addEventListener('click', () => {
                if (this.activeLogbookTab === 'diary') return;
                this.activeLogbookTab = 'diary';
                tabDiary.classList.add('logbook-tab--active');
                tabLog.classList.remove('logbook-tab--active');
                this.renderLogbook();
            });
            tabLog.addEventListener('click', () => {
                if (this.activeLogbookTab === 'log') return;
                this.activeLogbookTab = 'log';
                tabLog.classList.add('logbook-tab--active');
                tabDiary.classList.remove('logbook-tab--active');
                this.renderLogbook();
            });
        }
    }

    navigateTo(pageId) {
        this.pages.forEach(p => p.classList.remove('page--active'));
        this.navItems.forEach(item => {
            item.classList.remove('bottom-nav__item--active');
            item.removeAttribute('aria-current');
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('page--active');
            targetPage.style.animation = 'none';
            void targetPage.offsetHeight;
            targetPage.style.animation = '';
        }

        const targetNav = this.nav.querySelector(`[data-page="${pageId}"]`);
        if (targetNav) {
            targetNav.classList.add('bottom-nav__item--active');
            targetNav.setAttribute('aria-current', 'page');
        }

        this.currentPage = pageId;

        if (pageId === 'page-logbook') this.renderLogbook();
        if (pageId === 'page-fame')    this.renderHallOfFame();
    }

    _resetParksToHome() {
        this.searchQuery = '';
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';

        this.activePark = 'all';
        const tabs = document.getElementById('park-tabs');
        tabs?.querySelectorAll('.chip').forEach(c => {
            const match = c.dataset.park === 'all';
            c.classList.toggle('chip--active', match);
            c.setAttribute('aria-selected', match ? 'true' : 'false');
        });

        this.filters = { categories: [], features: [], themeAreas: [], hideHeadache: false, favOnly: false, minHeight: 'all', minAge: 'all', thrillLevels: [], onlyLoops: false };
        this.sortOrder = 'default';
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) sortSelect.value = 'default';

        document.querySelectorAll('#filter-categories .chip-multi--selected, #filter-features .chip-multi--selected, #filter-thrill .chip-multi--selected')
            .forEach(c => c.classList.remove('chip-multi--selected'));

        document.querySelectorAll('#filter-min-height .chip-select, #filter-min-age .chip-select').forEach(c => {
            const isAll = c.dataset.value === 'all';
            c.classList.toggle('chip-select--selected', isAll);
        });

        const headacheToggle = document.getElementById('filter-headache');
        if (headacheToggle) headacheToggle.checked = false;
        const loopsToggle = document.getElementById('filter-loops');
        if (loopsToggle) loopsToggle.checked = false;

        this._renderThemeFilterChips();

        const favChip = document.getElementById('park-tab-fav');
        if (favChip) { favChip.classList.remove('chip--active'); favChip.setAttribute('aria-selected', 'false'); }
        this._updateFilterBadge();

        this.navigateTo('page-parks');
        this.renderRideList();
        document.getElementById('page-parks')?.scrollTo({ top: 0, behavior: 'smooth' });
    }

    initOnlineStatus() {
        const update = () => {
            const online = navigator.onLine;
            const dot   = document.querySelector('.status-pill__dot');
            const label = document.getElementById('status-label');
            if (label) label.textContent = online ? 'Online' : 'Offline';
            if (dot)   dot.style.background = online ? 'var(--cc-success)' : 'var(--cc-danger)';
        };
        update();
        window.addEventListener('online',  update);
        window.addEventListener('offline', update);
        // Retry any fallback-queued reviews (IndexedDB-less devices) on reconnect
        // and once now, in case the last save happened while offline.
        window.addEventListener('online', () => this._flushFallbackSync());
        this._flushFallbackSync();
        // Same for the IndexedDB sync queue on browsers without Background Sync.
        window.addEventListener('online', () => this._flushSyncQueue());
    }

    initGeolocation() {
        this.userLocation = null;
        this.gpsWatchId = null;
        this._greetedPark = null;
        this.gpsStatusPill = document.getElementById('gps-status-pill');
        this.gpsStatusDot = document.getElementById('gps-status-dot');
        this.gpsStatusLabel = document.getElementById('gps-status-label');
        this.parkWelcome = document.getElementById('park-welcome');
        document.getElementById('park-welcome-close')?.addEventListener('click', () => this._hideParkWelcome());

        if (!('geolocation' in navigator)) {
            this._updateGPSStatus('inactive', 'GPS nicht unterstützt');
            return;
        }

        // Only start tracking if the user has the feature enabled (battery-saving toggle).
        if (this.settings.gpsEnabled) {
            this._startGeolocation();
        } else {
            this._updateGPSStatus('inactive', 'GPS aus');
        }
    }

    _startGeolocation() {
        if (!('geolocation' in navigator)) {
            this._updateGPSStatus('inactive', 'GPS nicht unterstützt');
            return;
        }
        // Avoid stacking multiple watchers.
        if (this.gpsWatchId != null) return;

        this._updateGPSStatus('searching', 'Ortung...');

        this.gpsWatchId = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude, accuracy } = pos.coords;
                this.userLocation = { lat: latitude, lng: longitude };

                // If accuracy is weak (e.g. > 150m), show "GPS schwach"
                if (accuracy > 150) {
                    this._updateGPSStatus('weak', 'GPS schwach');
                } else {
                    this._updateGPSStatus('active', 'GPS aktiv');
                }

                this._handleLocationUpdate();
            },
            (err) => {
                console.warn('Geolocation error:', err);
                if (err.code === err.PERMISSION_DENIED) {
                    this._updateGPSStatus('denied', 'Standort gesperrt');
                } else {
                    this._updateGPSStatus('inactive', 'GPS inaktiv');
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 5000
            }
        );
    }

    _stopGeolocation() {
        if (this.gpsWatchId != null && 'geolocation' in navigator) {
            navigator.geolocation.clearWatch(this.gpsWatchId);
        }
        this.gpsWatchId = null;
        this.userLocation = null;
        this._updateGPSStatus('inactive', 'GPS aus');
    }

    _updateGPSStatus(state, text) {
        if (!this.gpsStatusDot || !this.gpsStatusLabel) return;
        this.gpsStatusLabel.textContent = text;

        // Ganze Pille einfärben, damit der Status auf einen Blick erkennbar ist –
        // der Punkt übernimmt die Textfarbe (currentColor).
        this.gpsStatusPill?.classList.remove('is-active', 'is-weak', 'is-denied');
        this.gpsStatusDot.style.animation = 'cc-pulse-gps 2s ease-in-out infinite';

        if (state === 'active') {
            this.gpsStatusPill?.classList.add('is-active');
            this.gpsStatusDot.style.background = 'currentColor';
        } else if (state === 'searching' || state === 'weak') {
            this.gpsStatusPill?.classList.add('is-weak');
            this.gpsStatusDot.style.background = 'currentColor';
        } else if (state === 'denied') {
            this.gpsStatusPill?.classList.add('is-denied');
            this.gpsStatusDot.style.background = 'currentColor';
            this.gpsStatusDot.style.animation = 'none';
        } else {
            this.gpsStatusDot.style.background = '#95a5a6'; // grey
            this.gpsStatusDot.style.animation = 'none';
        }
    }

    _handleLocationUpdate() {
        if (!this.userLocation || this.rides.length === 0) return;

        const uLat = this.userLocation.lat;
        const uLng = this.userLocation.lng;

        // Auto-select nearest park if within 5 km and not already selected
        let nearestParkId = null;
        let minParkDist = Infinity;

        Object.entries(PARK_CONFIG).forEach(([pid, cfg]) => {
            if (cfg.coords) {
                const dist = this._getDistance(uLat, uLng, cfg.coords.lat, cfg.coords.lng);
                if (dist < minParkDist) {
                    minParkDist = dist;
                    nearestParkId = pid;
                }
            }
        });

        // Innerhalb von 5 km um einen Park begrüßen. Ist noch kein Park gewählt,
        // wird er zusätzlich automatisch aktiviert. Wer den Park vorher schon
        // angetippt hat, bekommt trotzdem eine Rückmeldung – jeweils einmal pro Park.
        if (minParkDist <= 5000 && nearestParkId) {
            if (this.activePark === 'all') {
                this._autoSelectPark(nearestParkId);
            } else {
                this._showParkWelcome(nearestParkId);
            }
        } else if (minParkDist > 5000) {
            // Park verlassen → beim nächsten Betreten wieder begrüßen.
            this._greetedPark = null;
        }
    }

    _autoSelectPark(parkId) {
        this.activePark = parkId;
        const tabs = document.getElementById('park-tabs');
        tabs?.querySelectorAll('.chip:not(#park-tab-fav)').forEach(c => {
            const match = c.dataset.park === parkId;
            c.classList.toggle('chip--active', match);
            c.setAttribute('aria-selected', match ? 'true' : 'false');
        });
        
        // Also sync the carousel active card visual if rendered
        const carousel = document.getElementById('park-carousel');
        carousel?.querySelectorAll('.park-hero-card').forEach(btn => {
            const match = btn.dataset.park === parkId;
            btn.classList.toggle('park-hero-card--active', match);
            btn.setAttribute('aria-pressed', match ? 'true' : 'false');
        });

        this._renderThemeFilterChips();
        this._updateFilterBadge();
        this.renderRideList();
        this._showParkWelcome(parkId);
    }

    _showParkWelcome(parkId) {
        // Pro Park nur einmal begrüßen, sonst poppt das Banner bei jedem
        // GPS-Update erneut auf.
        if (this._greetedPark === parkId) return;
        this._greetedPark = parkId;

        if (!this.parkWelcome) return;
        const nameEl = document.getElementById('park-welcome-name');
        if (nameEl) nameEl.textContent = PARK_NAMES[parkId] ?? 'Park';

        this.parkWelcome.hidden = false;
        void this.parkWelcome.offsetHeight; // Reflow, damit die Einblend-Animation greift
        this.parkWelcome.classList.add('park-welcome--open');

        clearTimeout(this._parkWelcomeTimer);
        this._parkWelcomeTimer = setTimeout(() => this._hideParkWelcome(), 7000);
    }

    _hideParkWelcome() {
        if (!this.parkWelcome || this.parkWelcome.hidden) return;
        clearTimeout(this._parkWelcomeTimer);
        this.parkWelcome.classList.remove('park-welcome--open');
        setTimeout(() => {
            if (!this.parkWelcome.classList.contains('park-welcome--open')) {
                this.parkWelcome.hidden = true;
            }
        }, 400);
    }

    // Nach dem Installieren einmal deutlich darauf hinweisen, dass Push-
    // Benachrichtigungen separat aktiviert werden müssen (unabhängig von GPS).
    initPushHint() {
        document.getElementById('push-hint-enable')?.addEventListener('click', () => this._enablePushFromHint());
        document.getElementById('push-hint-dismiss')?.addEventListener('click', () => this._hidePushHint(true));

        // Frisch installiert (Desktop/Android) → Hinweis zeigen.
        window.addEventListener('appinstalled', () => this._maybeShowPushHint());

        // Als installierte App (Standalone) gestartet und Push noch aus → ebenfalls
        // erinnern. Deckt iOS ab, das kein appinstalled-Event kennt.
        const standalone = window.matchMedia('(display-mode: standalone)').matches
            || window.navigator.standalone === true;
        if (standalone) this._maybeShowPushHint();
    }

    _maybeShowPushHint() {
        if (!HAS_BACKEND) return;
        if (!_pushSupported()) return;
        if (localStorage.getItem('cc_push_hint_dismissed') === '1') return;
        if (this.settings.pushEnabled && Notification.permission === 'granted') return;
        const banner = document.getElementById('push-hint-banner');
        if (banner) banner.hidden = false;
    }

    _hidePushHint(remember) {
        const banner = document.getElementById('push-hint-banner');
        if (banner) banner.hidden = true;
        if (remember) {
            try { localStorage.setItem('cc_push_hint_dismissed', '1'); } catch { /* ignore */ }
        }
    }

    async _enablePushFromHint() {
        try {
            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                this.showToast('Zulassung der Berechtigung verweigert.');
                return;
            }
            await _subscribeToPush(this.userId);
            this.settings.pushEnabled = true;
            _saveSettings(this.settings);
            // Toggle in den Einstellungen mitziehen, falls schon gerendert.
            const pushToggle = document.getElementById('settings-push');
            if (pushToggle) pushToggle.checked = true;
            this._hidePushHint(true);
            this.showToast('Push-Benachrichtigungen aktiviert!');
        } catch (err) {
            console.error('Push subscribe failed:', err);
            this.showToast('Push-Abonnement fehlgeschlagen.');
        }
    }

    _getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // Earth radius in meters
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    _applyTheme(theme) {
        if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // Wait Times (queue-times.com proxy + offline cache)
    initWaitTimes() {
        this.waitCache    = _loadWaitCache();
        this.scheduleCache = _loadScheduleCache();
        this._waitFetching = new Set();
        this._scheduleFetching = new Set();
        this._waitTimer    = null;
        this._waitLoopPark = null;

        // Refresh as soon as connectivity returns while a park is open.
        window.addEventListener('online', () => {
            if (this.activePark && this.activePark !== 'all') {
                this.fetchWaitTimes(this.activePark, { silent: true });
            }
        });
    }

    // Match a local ride to its cached wait-time entry by normalized name.
    _getWaitEntry(ride) {
        const entry = this.waitCache?.[ride.park_id];
        if (!entry || !Array.isArray(entry.rides)) return null;
        const target = _normalizeRideName(ride.name);
        if (!target) return null;

        const match = entry.rides.find(r => _normalizeRideName(r.name) === target);
        if (match) return match;

        // Fall back to partial matching (live API names are often shorter).
        return entry.rides.find(r => {
            const n = _normalizeRideName(r.name);
            return n.length >= 4 && (target.includes(n) || n.includes(target));
        }) || null;
    }

    // True when the live feed reports the whole park as shut (every ride closed).
    _isParkClosed(parkId) {
        const entry = this.waitCache?.[parkId];
        if (!entry || !Array.isArray(entry.rides) || entry.rides.length === 0) return false;
        return entry.rides.every(r => r.is_open === false);
    }

    _waitIntervalMinutes() {
        if (this.settings.interval === 'manual') return 10;
        return parseInt(this.settings.interval, 10) || 10;
    }

    // Fetch only if there is no cached data or it is older than the interval.
    _ensureWaitTimes(parkId) {
        if (!parkId || parkId === 'all') return;
        const entry  = this.waitCache[parkId];
        const maxAge = this._waitIntervalMinutes() * 60 * 1000;
        const fresh  = entry && (Date.now() - entry.fetchedAt) < maxAge;
        if (!fresh) this.fetchWaitTimes(parkId, { silent: !!entry });
    }

    // Opening hours change at most daily -> fetch at most every 6h (matches the
    // server-side cache). Kept separate from wait times, which refresh far more often.
    _ensureSchedule(parkId) {
        if (!HAS_BACKEND) return;
        if (!parkId || parkId === 'all') return;
        const entry  = this.scheduleCache[parkId];
        const maxAge = 6 * 60 * 60 * 1000;
        const fresh  = entry && (Date.now() - entry.fetchedAt) < maxAge;
        if (!fresh && navigator.onLine) this.fetchSchedule(parkId);
    }

    async fetchSchedule(parkId) {
        if (!HAS_BACKEND) return;
        if (!parkId || parkId === 'all' || this._scheduleFetching.has(parkId)) return;
        this._scheduleFetching.add(parkId);
        try {
            const res = await fetch(apiUrl(`/api/v1/parks/${parkId}/schedule`));
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (Array.isArray(data.days)) {
                this.scheduleCache[parkId] = {
                    fetchedAt: Date.now(),
                    timezone:  data.timezone,
                    days:      data.days
                };
                _saveScheduleCache(this.scheduleCache);
                if (this.activePark === parkId) this._updateWaitStatus(parkId);
            }
        } catch (err) {
            console.warn(`Schedule fetch failed for ${parkId}:`, err.message);
        } finally {
            this._scheduleFetching.delete(parkId);
        }
    }

    // Today's opening hours for a park. Returns { open, close, type } when the
    // park operates today, { closed: true } when the schedule lists no hours for
    // today, or null when no schedule data is available yet.
    _todaysHours(parkId) {
        const entry = this.scheduleCache?.[parkId];
        if (!entry || !Array.isArray(entry.days) || entry.days.length === 0) return null;
        const today = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD, local time
        const forToday = entry.days.filter(d => d.date === today);
        if (forToday.length === 0) return { closed: true };
        // Prefer regular operating hours; fall back to the first entry (e.g. a
        // ticketed event day), so special hours are still shown.
        const pick = forToday.find(d => d.type === 'OPERATING') || forToday[0];
        if (!pick.opening || !pick.closing) return { closed: true };
        const fmt = iso => new Date(iso).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
        return { open: fmt(pick.opening), close: fmt(pick.closing), type: pick.type };
    }

    async fetchWaitTimes(parkId, { silent = false } = {}) {
        if (!HAS_BACKEND) { this._updateWaitStatus(parkId); return; }
        if (!parkId || parkId === 'all') return;
        if (this._waitFetching.has(parkId)) return;

        if (!navigator.onLine) {
            this._updateWaitStatus(parkId);
            return;
        }

        this._waitFetching.add(parkId);
        if (!silent) this._updateWaitStatus(parkId, { loading: true });

        try {
            const res = await fetch(apiUrl(`/api/v1/parks/${parkId}/wait-times`));
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (!data.success || !Array.isArray(data.rides)) throw new Error('Invalid payload');

            this.waitCache[parkId] = {
                source:    data.source || 'live',
                fetchedAt: Date.now(),
                rides:     data.rides
            };
            _saveWaitCache(this.waitCache);
        } catch (err) {
            console.warn(`Wait-time fetch failed for ${parkId}:`, err.message);
        } finally {
            this._waitFetching.delete(parkId);
        }

        // Refresh any visible wait UI if the user is still on this park.
        if (this.activePark === parkId) {
            this._updateWaitStatus(parkId);
            if (this.sortOrder === 'wait-asc') {
                // Re-sort the list now that fresh wait times are in (also refreshes short-wait + badges).
                this.renderRideList();
            } else {
                this._renderShortWait();
                this._refreshWaitBadges();
            }
        }
        if (this.infoSheetRide && this.infoSheetRide.park_id === parkId) {
            this._updateInfoSheetWait(this.infoSheetRide);
        }
    }

    _startWaitLoop() {
        this._stopWaitLoop();
        if (this.settings.interval === 'manual') return;
        const ms = this._waitIntervalMinutes() * 60 * 1000;
        this._waitTimer = setInterval(() => {
            if (this.activePark && this.activePark !== 'all' && navigator.onLine) {
                this.fetchWaitTimes(this.activePark, { silent: true });
            }
        }, ms);
    }

    _stopWaitLoop() {
        if (this._waitTimer) { clearInterval(this._waitTimer); this._waitTimer = null; }
    }

    _updateWaitStatus(parkId, { loading = false } = {}) {
        const el = document.getElementById('wait-time-status');
        if (!el) return;

        if (!parkId || parkId === 'all') { el.hidden = true; el.innerHTML = ''; return; }

        const entry = this.waitCache[parkId];

        if (loading && !entry) {
            el.hidden = false;
            el.className = 'wait-time-status wait-time-status--loading';
            el.innerHTML = `<span class="material-symbols-rounded">sync</span> Wartezeiten werden geladen…`;
            return;
        }
        if (!entry) {
            el.hidden = false;
            el.className = 'wait-time-status wait-time-status--offline';
            el.innerHTML = HAS_BACKEND
                ? `<span class="material-symbols-rounded">cloud_off</span> Keine Wartezeiten verfügbar`
                : `<span class="material-symbols-rounded">science</span> Demo ohne Server – Live-Wartezeiten sind hier deaktiviert`;
            return;
        }

        // Whole park closed: a park-wide notice is clearer than 30 "Geschlossen" rows.
        if (this._isParkClosed(parkId)) {
            el.hidden = false;
            el.className = 'wait-time-status wait-time-status--closed';
            const name = PARK_NAMES[parkId] ?? 'Der Park';
            const h = this._todaysHours(parkId);
            // If the schedule says the park does operate today (e.g. it is simply
            // before opening or after closing time), show those hours instead of a
            // bare "closed"; only say "geschlossen" when today truly has no hours.
            if (h && !h.closed) {
                el.innerHTML = `<span class="material-symbols-rounded">schedule</span> ${name}: heute ${h.open}–${h.close} Uhr`;
            } else {
                el.innerHTML = `<span class="material-symbols-rounded">block</span> ${name} ist heute geschlossen`;
            }
            return;
        }

        const time = new Date(entry.fetchedAt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
        let cls, icon, label;
        if (!navigator.onLine) {
            cls = 'wait-time-status--offline'; icon = 'cloud_off';
            label = `Offline · letzter Stand ${time} Uhr`;
        } else if (entry.source === 'simulated') {
            cls = 'wait-time-status--sim'; icon = 'science';
            label = `Simulierte Wartezeiten · ${time} Uhr`;
        } else {
            cls = 'wait-time-status--live'; icon = 'wifi_tethering';
            label = `Live-Wartezeiten · aktualisiert ${time} Uhr`;
        }
        const h = this._todaysHours(parkId);
        if (h && !h.closed) label += ` · heute ${h.open}–${h.close} Uhr`;
        el.hidden = false;
        el.className = `wait-time-status ${cls}`;
        el.innerHTML = `<span class="material-symbols-rounded">${icon}</span> ${label}`;
    }

    _closedBadgeHTML() {
        return `<span class="wait-badge wait-badge--closed" title="Aktuell geschlossen"><span class="material-symbols-rounded">block</span>Geschlossen</span>`;
    }

    _outOfServiceBadgeHTML() {
        return `<span class="wait-badge wait-badge--out-of-service" title="Aktuell außer Betrieb (Park geöffnet)"><span class="material-symbols-rounded">build</span>Außer Betrieb</span>`;
    }

    _waitBadgeHTML(entry) {
        if (!entry) return '';
        if (!entry.is_open) return this._closedBadgeHTML();
        const w = entry.wait_time ?? 0;
        const lvl = w <= 15 ? 'low' : w <= 40 ? 'mid' : 'high';
        return `<span class="wait-badge wait-badge--${lvl}" title="Aktuelle Wartezeit: ${w} Minuten"><span class="material-symbols-rounded">schedule</span>${w} min</span>`;
    }

    // Per-ride badge. When the whole park is closed, show a uniform "Geschlossen"
    // badge even for rides the live feed doesn't list (otherwise they'd render blank).
    _rideWaitBadgeHTML(ride) {
        if (this._isParkClosed(ride.park_id)) return this._closedBadgeHTML();
        const entry = this._getWaitEntry(ride);
        if (!entry) return '';
        // Park is open but this ride is not running: a temporary breakdown, not a
        // full closure. Show "Außer Betrieb" instead of the park-wide "Geschlossen".
        if (!entry.is_open) return this._outOfServiceBadgeHTML();
        return this._waitBadgeHTML(entry);
    }

    // Update wait badges already in the DOM without rebuilding the whole list.
    _refreshWaitBadges() {
        document.querySelectorAll('[data-ride-wait]').forEach(el => {
            const ride = this.rides.find(r => r.id === el.dataset.rideWait);
            el.innerHTML = ride ? this._rideWaitBadgeHTML(ride) : '';
        });
    }

    _updateInfoSheetWait(ride) {
        const badgesEl = document.getElementById('ride-info-badges');
        if (!badgesEl) return;
        const html  = this._rideWaitBadgeHTML(ride);
        let waitEl  = badgesEl.querySelector('.ride-info-wait');
        if (!html) { if (waitEl) waitEl.remove(); return; }
        if (!waitEl) {
            waitEl = document.createElement('span');
            waitEl.className = 'ride-info-wait';
            badgesEl.insertBefore(waitEl, badgesEl.firstChild);
        }
        waitEl.innerHTML = html;
    }

    initSettings() {
        const themeSel = document.getElementById('settings-theme');
        const intervalSel = document.getElementById('settings-interval');
        const pushToggle = document.getElementById('settings-push');
        const gpsToggle = document.getElementById('settings-gps');

        // Ohne Backend gibt es nichts zu aktualisieren und nichts zu abonnieren:
        // die beiden Bedienelemente werden gesperrt und der Grund steht daneben,
        // statt dass ein Klick ins Leere laeuft.
        if (!HAS_BACKEND) {
            if (intervalSel) intervalSel.disabled = true;
            if (pushToggle)  { pushToggle.checked = false; pushToggle.disabled = true; }
            const note = document.getElementById('demo-server-note');
            if (note) note.hidden = false;
        }

        if (gpsToggle) {
            if (!('geolocation' in navigator)) {
                gpsToggle.checked = false;
                gpsToggle.disabled = true;
            } else {
                gpsToggle.checked = this.settings.gpsEnabled;
                gpsToggle.addEventListener('change', (e) => {
                    this.settings.gpsEnabled = e.target.checked;
                    _saveSettings(this.settings);
                    if (e.target.checked) {
                        this._startGeolocation();
                        this.showToast('Standort-Vorschläge aktiviert!');
                    } else {
                        this._stopGeolocation();
                        this.showToast('Standort-Vorschläge deaktiviert, spart Akku.');
                    }
                });
            }
        }

        if (themeSel) {
            themeSel.value = this.settings.theme;
            themeSel.addEventListener('change', (e) => {
                const val = e.target.value;
                this.settings.theme = val;
                _saveSettings(this.settings);
                this._applyTheme(val);
                this.showToast('Design-Theme aktualisiert!');
            });
        }

        if (intervalSel) {
            intervalSel.value = this.settings.interval;
            intervalSel.addEventListener('change', (e) => {
                this.settings.interval = e.target.value;
                _saveSettings(this.settings);
                if (this.activePark && this.activePark !== 'all') this._startWaitLoop();
                else this._stopWaitLoop();
                this.showToast('Aktualisierungsintervall gespeichert!');
            });
        }

        if (pushToggle) {
            if (!_pushSupported()) {
                pushToggle.checked = false;
                pushToggle.disabled = true;
            } else {
                pushToggle.checked = this.settings.pushEnabled && Notification.permission === 'granted';
                // Re-register the subscription on the server in case it changed or expired.
                if (pushToggle.checked) {
                    _subscribeToPush(this.userId).catch(err => console.warn('Push re-subscribe failed:', err));
                }
                pushToggle.addEventListener('change', async (e) => {
                    const checked = e.target.checked;
                    if (checked) {
                        const permission = await Notification.requestPermission();
                        if (permission === 'granted') {
                            try {
                                await _subscribeToPush(this.userId);
                                this.settings.pushEnabled = true;
                                this.showToast('Push-Benachrichtigungen aktiviert!');
                            } catch (err) {
                                console.error('Push subscribe failed:', err);
                                this.settings.pushEnabled = false;
                                pushToggle.checked = false;
                                this.showToast('Push-Abonnement fehlgeschlagen.');
                            }
                        } else {
                            this.settings.pushEnabled = false;
                            pushToggle.checked = false;
                            this.showToast('Zulassung der Berechtigung verweigert.');
                        }
                    } else {
                        await _unsubscribeFromPush(this.userId);
                        this.settings.pushEnabled = false;
                        this.showToast('Push-Benachrichtigungen deaktiviert.');
                    }
                    _saveSettings(this.settings);
                });
            }
        }

        document.getElementById('settings-export-btn')?.addEventListener('click', async () => {
            if (!this.db) { this.showToast('Datenbank nicht bereit.'); return; }
            try {
                const [reviews, counts] = await Promise.all([getReviews(this.db), getAllRideCounts(this.db)]);
                const backup = {
                    version: 2,
                    exportedAt: new Date().toISOString(),
                    userId: this.userId,
                    favorites: Array.from(this.favorites),
                    reviews,
                    counts
                };
                const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `coastercheck_backup_${new Date().toISOString().slice(0, 10)}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                this.showToast('Daten erfolgreich gesichert!');
            } catch (err) {
                console.error('Backup failed:', err);
                this.showToast('Export fehlgeschlagen.');
            }
        });

        document.getElementById('settings-import-file')?.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (!this.db) { this.showToast('Datenbank nicht bereit.'); return; }

            const reader = new FileReader();
            reader.onload = async (event) => {
                try {
                    const backup = JSON.parse(event.target.result);
                    if (!backup.reviews || !backup.favorites) {
                        this.showToast('Ungültiges Backup-Format.');
                        return;
                    }

                    if (Array.isArray(backup.favorites)) {
                        backup.favorites.forEach(f => this.favorites.add(f));
                        _saveFavorites(this.favorites);
                        this.favorites.forEach(f => this._updateStarButtons(f));
                    }

                    await mergeImportedReviews(this.db, backup.reviews);
                    if (Array.isArray(backup.counts)) {
                        await mergeImportedCounts(this.db, backup.counts);
                    }
                    this.reviews = await getReviews(this.db);

                    this.showToast('Daten erfolgreich wiederhergestellt!');
                    
                    e.target.value = '';

                    if (this.currentPage === 'page-logbook') this.renderLogbook();
                    this.renderRideList();
                } catch (err) {
                    console.error('Import failed:', err);
                    this.showToast('Ungültige Backup-Datei.');
                }
            };
            reader.readAsText(file);
        });

        document.getElementById('settings-reset-btn')?.addEventListener('click', async () => {
            const confirmed = confirm(
                'ACHTUNG: Möchtest du dein Konto wirklich zurücksetzen?\n\n' +
                'Dadurch werden alle geloggten Fahrten, Bewertungen, Tageszähler und Favoriten unwiderruflich von diesem Gerät gelöscht!'
            );
            if (!confirmed) return;

            try {
                await _unsubscribeFromPush(this.userId).catch(() => {});
                if (this.db) {
                    await clearAllData(this.db);
                }
                this.reviews = [];

                localStorage.removeItem(FAV_KEY);
                localStorage.removeItem(SETTINGS_KEY);
                localStorage.removeItem('coastercheck_user_id');
                
                this.favorites = new Set();
                this.settings = { theme: 'system', interval: '10', pushEnabled: false, gpsEnabled: true };
                this.userId = _getUserId();

                if (themeSel) themeSel.value = this.settings.theme;
                if (intervalSel) intervalSel.value = this.settings.interval;
                if (pushToggle) pushToggle.checked = false;
                const gpsToggle = document.getElementById('settings-gps');
                if (gpsToggle) gpsToggle.checked = true;
                this._startGeolocation();

                this._applyTheme(this.settings.theme);
                this.navigateTo('page-parks');
                this._resetParksToHome();
                
                this.showToast('Konto erfolgreich zurückgesetzt!');
            } catch (err) {
                console.error('Reset failed:', err);
                this.showToast('Fehler beim Zurücksetzen.');
            }
        });

        document.getElementById('settings-report-btn')?.addEventListener('click', () => {
            const subject = encodeURIComponent('CoasterCheck PWA: Fehlerbericht');
            const body = encodeURIComponent(
                'Hallo CoasterCheck Support,\n\n' +
                'ich habe folgenden Fehler entdeckt:\n' +
                '[Bitte beschreibe den Fehler hier...]\n\n' +
                '---\n' +
                'System-Informationen:\n' +
                '- Browser/User-Agent: ' + navigator.userAgent + '\n' +
                '- Online-Status: ' + (navigator.onLine ? 'Online' : 'Offline') + '\n' +
                '- App-Version: v1.2.0-PWA\n' +
                '- OS: Windows\n'
            );
            window.open(`mailto:support@coastercheck.example.com?subject=${subject}&body=${body}`, '_blank');
        });
    }

    initMoreParksPopup() {
        const overlay = document.getElementById('more-parks-overlay');
        const close   = document.getElementById('more-parks-close');
        if (!overlay || !close) return;

        const shut = () => { overlay.hidden = true; };
        close.addEventListener('click', shut);
        overlay.addEventListener('click', e => { if (e.target === overlay) shut(); });
        overlay.addEventListener('keydown', e => { if (e.key === 'Escape') shut(); });
    }

    _openMoreParksPopup() {
        const overlay = document.getElementById('more-parks-overlay');
        const close   = document.getElementById('more-parks-close');
        if (!overlay) return;
        overlay.hidden = false;
        close?.focus();
    }

    initParkChips() {
        const tabs = document.getElementById('park-tabs');
        if (!tabs) return;

        const favChip = document.getElementById('park-tab-fav');
        if (favChip) {
            favChip.addEventListener('click', () => {
                const nowActive = !this.filters.favOnly;
                this.filters.favOnly = nowActive;
                favChip.classList.toggle('chip--active', nowActive);
                favChip.setAttribute('aria-selected', nowActive ? 'true' : 'false');
                const icon = favChip.querySelector('.material-symbols-rounded');
                if (icon) icon.style.fontVariationSettings = nowActive ? "'FILL' 1" : "'FILL' 0";
                this.renderRideList();
            });
        }

        tabs.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (!chip || chip.id === 'park-tab-fav') return;
            const parkId = chip.dataset.park;
            if (parkId === this.activePark) return;
            tabs.querySelectorAll('.chip:not(#park-tab-fav)').forEach(c => {
                c.classList.remove('chip--active');
                c.setAttribute('aria-selected', 'false');
            });
            chip.classList.add('chip--active');
            chip.setAttribute('aria-selected', 'true');
            this.activePark = parkId;
            this._renderThemeFilterChips();
            this._updateFilterBadge();
            this.renderRideList();
        });
    }

    initSearch() {
        const input = document.getElementById('search-input');
        if (!input) return;
        // Debounce so a burst of keystrokes only triggers one (expensive)
        // renderRideList(), which rebuilds ~90 cards + SVGs, instead of one
        // per keypress. ~180 ms keeps typing responsive without the mobile jank.
        let searchTimer = null;
        input.addEventListener('input', (e) => {
            const value = e.target.value.trim();
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                this.searchQuery = value;
                this.renderRideList();
            }, 180);
        });
    }

    initFilters() {
        const filterBtn   = document.getElementById('filter-btn');
        const filterModal = document.getElementById('filter-modal');
        const filterClose = document.getElementById('filter-close');

        if (filterBtn && filterModal && filterClose) {
            const openFilter = () => {
                this._renderThemeFilterChips();
                filterModal.classList.add('filter-modal--open');
                filterBtn.setAttribute('aria-expanded', 'true');
                const firstFocusable = filterModal.querySelector('button, input, [tabindex]:not([tabindex="-1"])');
                firstFocusable?.focus();
            };
            const closeFilter = () => {
                filterModal.classList.remove('filter-modal--open');
                filterBtn.setAttribute('aria-expanded', 'false');
                filterBtn.focus();
            };
            filterBtn.addEventListener('click', openFilter);
            filterClose.addEventListener('click', closeFilter);
            filterModal.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') { closeFilter(); return; }
                this._focusTrap(filterModal, e);
            });

            filterModal.querySelectorAll('.chip-group[data-type="multi"] .chip-multi').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    const group = e.target.closest('.chip-group');
                    e.target.classList.toggle('chip-multi--selected');
                    const vals = Array.from(group.querySelectorAll('.chip-multi--selected')).map(c => c.dataset.value);
                    if (group.id === 'filter-categories') this.filters.categories = vals;
                    else if (group.id === 'filter-features') this.filters.features = vals;
                    else if (group.id === 'filter-thrill') this.filters.thrillLevels = vals;
                    this._updateFilterBadge();
                    this.renderRideList();
                });
            });

            filterModal.querySelectorAll('.chip-group[data-type="single"] .chip-select').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    const group = e.target.closest('.chip-group');
                    group.querySelectorAll('.chip-select').forEach(c => c.classList.remove('chip-select--selected'));
                    e.target.classList.add('chip-select--selected');
                    const val = e.target.dataset.value;
                    if (group.id === 'filter-min-height') this.filters.minHeight = val;
                    else if (group.id === 'filter-min-age') this.filters.minAge = val;
                    this._updateFilterBadge();
                    this.renderRideList();
                });
            });

            const headacheToggle = document.getElementById('filter-headache');
            if (headacheToggle) {
                headacheToggle.addEventListener('change', (e) => {
                    this.filters.hideHeadache = e.target.checked;
                    this._updateFilterBadge();
                    this.renderRideList();
                });
            }

            const loopsToggle = document.getElementById('filter-loops');
            if (loopsToggle) {
                loopsToggle.addEventListener('change', (e) => {
                    this.filters.onlyLoops = e.target.checked;
                    this._updateFilterBadge();
                    this.renderRideList();
                });
            }

            const sortSelect = document.getElementById('sort-select');
            if (sortSelect) {
                sortSelect.addEventListener('change', (e) => {
                    this.sortOrder = e.target.value;
                    this.renderRideList();
                });
            }
        }
    }

    _updateFilterBadge() {
        const badge = document.getElementById('filter-badge');
        if (!badge) return;
        const count = this.filters.categories.length +
                      this.filters.features.length +
                      this.filters.themeAreas.length +
                      (this.filters.hideHeadache ? 1 : 0) +
                      (this.filters.minHeight !== 'all' ? 1 : 0) +
                      (this.filters.minAge !== 'all' ? 1 : 0) +
                      this.filters.thrillLevels.length +
                      (this.filters.onlyLoops ? 1 : 0);
        badge.textContent = count;
        badge.hidden = count === 0;
    }

    // Builds the Themenbereich chips from the areas actually present in the
    // active park (or all parks). The list is park-specific, so it is rebuilt
    // whenever the filter opens or the park changes. Chips added here get their
    // own click handler; the static setup pass never sees them.
    _renderThemeFilterChips() {
        const field = document.getElementById('filter-theme-field');
        const group = document.getElementById('filter-theme');
        if (!field || !group) return;

        const pool  = this.rides.filter(r => this.activePark === 'all' || r.park_id === this.activePark);
        const areas = [...new Set(pool.map(r => r.theme_area).filter(Boolean))]
            .sort((a, b) => a.localeCompare(b, 'de'));

        // Drop any selected areas that no longer exist in the current pool.
        this.filters.themeAreas = this.filters.themeAreas.filter(a => areas.includes(a));

        if (areas.length === 0) {
            field.hidden = true;
            group.innerHTML = '';
            return;
        }
        field.hidden = false;
        group.innerHTML = areas.map(a => {
            const sel = this.filters.themeAreas.includes(a) ? ' chip-multi--selected' : '';
            const esc = this._escapeHtml(a);
            return `<button class="chip-multi${sel}" data-value="${esc}">${esc}</button>`;
        }).join('');

        group.querySelectorAll('.chip-multi').forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.target.classList.toggle('chip-multi--selected');
                this.filters.themeAreas = Array.from(group.querySelectorAll('.chip-multi--selected'))
                    .map(c => c.dataset.value);
                this._updateFilterBadge();
                this.renderRideList();
            });
        });
    }

    _renderSaveSuccessFavStar(rideId) {
        const card = document.querySelector('.review-success__card');
        if (!card) return;
        const existing = card.querySelector('.review-success__fav-btn');
        if (existing) existing.remove();
        const isFav = this.isFavorite(rideId);
        const btn = document.createElement('button');
        btn.className = 'review-success__fav-btn cc-press';
        btn.innerHTML = `<span class="material-symbols-rounded" style="font-variation-settings:${isFav ? "'FILL' 1" : "'FILL' 0"}">${'star'}</span> ${isFav ? 'Favorit!' : 'Als Favorit markieren'}`;
        btn.setAttribute('aria-label', isFav ? 'Aus Favoriten entfernen' : 'Als Favorit markieren');
        if (isFav) btn.classList.add('review-success__fav-btn--active');
        btn.addEventListener('click', () => {
            this.toggleFavorite(rideId);
            const nowFav = this.isFavorite(rideId);
            btn.classList.toggle('review-success__fav-btn--active', nowFav);
            const icon = btn.querySelector('.material-symbols-rounded');
            if (icon) icon.style.fontVariationSettings = nowFav ? "'FILL' 1" : "'FILL' 0";
            btn.innerHTML = `<span class="material-symbols-rounded" style="font-variation-settings:${nowFav ? "'FILL' 1" : "'FILL' 0"}">star</span> ${nowFav ? 'Favorit!' : 'Als Favorit markieren'}`;
        });
        card.appendChild(btn);
    }

    async loadInitialData() {
        const rideList = document.getElementById('ride-list');
        if (!rideList) return;
        rideList.innerHTML = '<p class="page__placeholder">Lade Attraktionen…</p>';

        if (this.db) {
            try {
                const cached = await getCachedRides(this.db);
                if (cached.length > 0) {
                    this.categories = this._buildCategoriesFromRides(cached);
                    this.rides = cached;
                    this.renderRideList();
                    if (navigator.onLine) this._fetchAndCacheRides();
                    return;
                }
            } catch (e) {
                console.warn('Cache read error:', e);
            }
        }
        await this._fetchAndCacheRides();
    }

    async _fetchAndCacheRides() {
        const rideList = document.getElementById('ride-list');
        try {
            const [catRes, hpRes, plRes, mpRes] = await Promise.all([
                fetch('src/data/categories.json'),
                fetch('src/data/parks/heidepark.json'),
                fetch('src/data/parks/phantasialand.json'),
                fetch('src/data/parks/moviepark.json')
            ]);
            if (!catRes.ok || !hpRes.ok || !plRes.ok || !mpRes.ok) throw new Error('Network error');

            this.categories = await catRes.json();
            this.rides = [
                ...await hpRes.json(),
                ...await plRes.json(),
                ...await mpRes.json()
            ];
            if (this.db) {
                try { await cacheRides(this.db, this.rides); } catch (e) { console.warn('Caching failed:', e); }
            }
            this.renderRideList();
        } catch (err) {
            console.error('Error loading park data:', err);
            if (rideList && this.rides.length === 0) {
                rideList.innerHTML = '<p class="page__placeholder" style="color:var(--cc-danger)">Daten konnten nicht geladen werden.</p>';
            }
        }
    }

    _buildCategoriesFromRides(rides) {
        return [...new Set(rides.map(r => r.category))].map(id => ({ id, name: id }));
    }

    _getCategoryLabel(categoryId) {
        return CAT_LABELS[categoryId] ?? (this.categories?.find(c => c.id === categoryId)?.name ?? categoryId);
    }

    renderRideList() {
        if (!this.rides || this.rides.length === 0) return;

        const showAll = this.activePark === 'all';
        const hasFilters = this.filters.categories.length > 0 ||
                           this.filters.features.length > 0 ||
                           this.filters.themeAreas.length > 0 ||
                           this.filters.hideHeadache ||
                           this.filters.minHeight !== 'all' ||
                           this.filters.minAge !== 'all' ||
                           this.filters.thrillLevels.length > 0 ||
                           this.filters.onlyLoops;

        this._renderParkCarousel();

        // Wait-time orchestration: load + keep a refresh loop for the active park.
        if (this.activePark !== 'all') {
            this._ensureWaitTimes(this.activePark);
            this._ensureSchedule(this.activePark);
            if (this._waitLoopPark !== this.activePark) {
                this._waitLoopPark = this.activePark;
                this._startWaitLoop();
            }
        } else {
            this._waitLoopPark = null;
            this._stopWaitLoop();
        }
        this._updateWaitStatus(this.activePark === 'all' ? null : this.activePark);

        if (!this.searchQuery && !hasFilters && !this.filters.favOnly) {
            this._renderShortWait();
        } else {
            const featured = document.getElementById('featured-ride');
            if (featured) featured.innerHTML = '';
        }

        const filtered = this._filterRides();

        const countEl = document.getElementById('ride-count-label');
        if (countEl) {
            countEl.textContent = `${filtered.length} Bahn${filtered.length !== 1 ? 'en' : ''}`;
        }

        if (this.sortOrder && this.sortOrder !== 'default') {
            if (this.sortOrder === 'name-asc') {
                filtered.sort((a, b) => a.name.localeCompare(b.name, 'de', { sensitivity: 'base' }));
            } else if (this.sortOrder === 'name-desc') {
                filtered.sort((a, b) => b.name.localeCompare(a.name, 'de', { sensitivity: 'base' }));
            } else if (this.sortOrder === 'score-desc') {
                filtered.sort((a, b) => this._getRideScore(b) - this._getRideScore(a));
            } else if (this.sortOrder === 'speed-desc') {
                filtered.sort((a, b) => (b.stats.speed_kmh ?? 0) - (a.stats.speed_kmh ?? 0));
            } else if (this.sortOrder === 'height-desc') {
                filtered.sort((a, b) => (b.stats.height_m ?? 0) - (a.stats.height_m ?? 0));
            } else if (this.sortOrder === 'inversions-desc') {
                filtered.sort((a, b) => (b.stats.inversions ?? 0) - (a.stats.inversions ?? 0));
            } else if (this.sortOrder === 'wait-asc') {
                const waitOf = (ride) => {
                    const entry = this._getWaitEntry(ride);
                    return (entry && entry.is_open && typeof entry.wait_time === 'number')
                        ? entry.wait_time
                        : Infinity; // closed / unknown rides sink to the bottom
                };
                filtered.sort((a, b) => waitOf(a) - waitOf(b));
            }
        }

        const container = document.getElementById('ride-list');
        if (!container) return;
        container.innerHTML = '';

        if (filtered.length === 0) {
            if (this.filters.favOnly) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state__icon-wrap empty-state__icon-wrap--fav">
                            <span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1">star</span>
                        </div>
                        <h3 class="empty-state__title">Keine Favoriten gespeichert</h3>
                        <p class="empty-state__text">Markiere deine Lieblings-Achterbahnen mit einem Stern, um sie hier schnell wiederzufinden!</p>
                        <button class="btn empty-state__btn cc-press" id="empty-fav-cta">
                            <span class="material-symbols-rounded">attractions</span>
                            Alle Bahnen anzeigen
                        </button>
                    </div>`;
                container.querySelector('#empty-fav-cta')?.addEventListener('click', () => {
                    this.filters.favOnly = false;
                    const favChip = document.getElementById('park-tab-fav');
                    if (favChip) {
                        favChip.classList.remove('chip--active');
                        favChip.setAttribute('aria-selected', 'false');
                        const icon = favChip.querySelector('.material-symbols-rounded');
                        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
                    }
                    this.renderRideList();
                });
            } else {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state__icon-wrap">
                            <span class="material-symbols-rounded">search_off</span>
                        </div>
                        <h3 class="empty-state__title">Keine Bahnen gefunden</h3>
                        <p class="empty-state__text">Es gibt keine Attraktionen, die deinen ausgewählten Such- oder Filterkriterien entsprechen.</p>
                        <button class="btn empty-state__btn cc-press" id="empty-filter-cta">
                            <span class="material-symbols-rounded">restart_alt</span>
                            Filter zurücksetzen
                        </button>
                    </div>`;
                container.querySelector('#empty-filter-cta')?.addEventListener('click', () => {
                    this._resetParksToHome();
                });
            }
            return;
        }

        const titleEl = document.createElement('div');
        titleEl.innerHTML = `<div class="section-head" style="margin-top:8px">
            <h2 class="section-head__title">
                <span class="material-symbols-rounded">attractions</span>
                ${this.filters.favOnly ? 'Favoriten' : this.searchQuery ? 'Suchergebnisse' : !showAll ? (PARK_NAMES[this.activePark] || 'Ergebnisse') : hasFilters ? 'Ergebnisse' : 'Alle Bahnen'}
            </h2>
        </div>`;
        container.appendChild(titleEl);

        const frag = document.createDocumentFragment();
        filtered.forEach((ride, i) => {
            const card = this.createRideCard(ride);
            card.style.setProperty('--card-i', i);
            frag.appendChild(card);
        });
        container.appendChild(frag);
    }

    _filterRides() {
        return this.rides.filter(ride => {
            if (this.filters.favOnly && !this.isFavorite(ride.id)) return false;
            if (this.activePark !== 'all' && ride.park_id !== this.activePark) return false;
            if (this.searchQuery) {
                const q = this.searchQuery.toLowerCase();
                const name = ride.name.toLowerCase();
                const park = (PARK_NAMES[ride.park_id] ?? '').toLowerCase();
                if (!name.includes(q) && !park.includes(q)) return false;
            }
            if (this.filters.categories.length > 0) {
                const THRILL_CATS = new Set(['thrill_rides', 'flat_rides_vertical', 'flat_rides_horizontal']);
                const matchesCat = this.filters.categories.some(c =>
                    c === 'thrill_rides' ? THRILL_CATS.has(ride.category) : c === ride.category
                );
                if (!matchesCat) return false;
            }
            if (this.filters.features.length > 0) {
                const hasSR = ride.features.single_rider;
                const isWet = ride.hints?.wet === true || ride.category === 'water_rides' || (ride.features.special_features?.some(f => f.toLowerCase().match(/wasser|nässe|splash|nass/)));
                const isSpooky = ride.features.special_features?.some(f => f.toLowerCase().match(/horror|grusel|halloween/));
                const isLoud = ride.hints?.loud_effects === true;
                const isDark = ride.hints?.darkness === true;
                if (this.filters.features.includes('single_rider') && !hasSR) return false;
                if (this.filters.features.includes('water') && !isWet) return false;
                if (this.filters.features.includes('spooky') && !isSpooky) return false;
                if (this.filters.features.includes('loud') && !isLoud) return false;
                if (this.filters.features.includes('dark') && !isDark) return false;
            }
            if (this.filters.themeAreas.length > 0) {
                if (!ride.theme_area || !this.filters.themeAreas.includes(ride.theme_area)) return false;
            }
            if (this.filters.hideHeadache && ride.app_metrics.headache_potential === true && ride.app_metrics.headache_reports >= 5) return false;
            
            // Minimum requirement: keep only rides that demand at least this height.
            if (this.filters.minHeight !== 'all') {
                const limit = parseInt(this.filters.minHeight, 10);
                const reqHeight = ride.requirements?.min_height_cm;
                if (reqHeight === undefined || reqHeight === null || reqHeight < limit) return false;
            }

            // Minimum requirement: keep only rides that demand at least this age.
            if (this.filters.minAge !== 'all') {
                const limit = parseInt(this.filters.minAge, 10);
                const reqAge = ride.requirements?.min_age;
                if (reqAge === undefined || reqAge === null || reqAge < limit) return false;
            }

            if (this.filters.thrillLevels.length > 0) {
                const thrill = ride.app_metrics?.thrill_level;
                if (!this.filters.thrillLevels.includes(thrill)) return false;
            }

            if (this.filters.onlyLoops) {
                const inversions = ride.stats?.inversions ?? 0;
                if (inversions <= 0) return false;
            }

            return true;
        });
    }

    // Builds a collage card background. The logo sits under every tile, so a
    // missing image (404) falls back to the logo. A scrim on top keeps text readable.
    _buildParkCollage(images) {
        const imgs = (images || []).filter(Boolean).slice(0, 4);
        if (imgs.length === 0) return '';
        const tiles = imgs
            .map(src => `<span class="park-collage__tile" style="background-image:url(${src}),url(${CC_LOGO})"></span>`)
            .join('');
        return `
            <div class="park-collage park-collage--${imgs.length}" aria-hidden="true">${tiles}</div>
            <div class="park-hero-card__scrim" aria-hidden="true"></div>`;
    }

    _renderParkCarousel() {
        const carousel = document.getElementById('park-carousel');
        if (!carousel) return;

        // The carousel only depends on the active park, the favourites-only
        // toggle and which rides are favourited. It does NOT depend on the
        // search query, so skip the (expensive) innerHTML rebuild + listener
        // rebinding when none of those changed, e.g. on every search keystroke.
        const favIds    = this.rides.filter(r => this.isFavorite(r.id)).map(r => r.id).join(',');
        const signature = `${this.activePark}|${this.filters.favOnly ? 1 : 0}|${this.rides.length}|${favIds}`;
        if (this._carouselSignature === signature && carousel.childElementCount > 0) return;
        this._carouselSignature = signature;

        const isAllActive = this.activePark === 'all' && !this.filters.favOnly;
        const isFavActive = this.filters.favOnly;
        const favCount    = this.rides.filter(r => this.isFavorite(r.id)).length;

        const parkIds = ['heide_park', 'phantasialand', 'movie_park'];
        // Collage from the images of all available parks.
        const parkImages = parkIds.map(pid => PARK_CONFIG[pid]?.image).filter(Boolean);
        const collageHtml = this._buildParkCollage(parkImages);

        // Favourites collage: images of the favourited rides (favourites store rides, not parks).
        const favRideImages = this.rides
            .filter(r => this.isFavorite(r.id) && r.image)
            .map(r => r.image);
        // Without favourites the logo fills the whole card like a regular card image.
        const logoFill = `<div class="park-hero-card__fill" style="background:url(${CC_LOGO}) center/cover" aria-hidden="true"></div><div class="park-hero-card__scrim" aria-hidden="true"></div>`;
        const favCollageHtml = this._buildParkCollage(favRideImages);

                const allCard = `
            <button class="park-hero-card park-hero-card--special park-hero-card--all${isAllActive ? ' park-hero-card--active' : ''} cc-press"
                data-special="all" aria-label="Alle Parks anzeigen" aria-pressed="${isAllActive}">
                ${collageHtml || '<div class="park-hero-card__stripes" aria-hidden="true"></div>'}
                <div class="park-hero-card__top">
                    <div class="park-hero-card__special-icon">
                        <span class="material-symbols-rounded" style="font-size:20px">apps</span>
                    </div>
                    <div>
                        <div class="park-hero-card__name">Alle Parks</div>
                        <div class="park-hero-card__location">${this.rides.length} Bahnen</div>
                    </div>
                </div>
                <div class="park-hero-card__bottom">
                    <div class="park-hero-card__motto">Alle verfügbaren Attraktionen</div>
                </div>
            </button>`;

        const parkCardsHtml = parkIds.map(pid => {
            const cfg = PARK_CONFIG[pid];
            const parkRides = this.rides.filter(r => r.park_id === pid);
            const isActive = this.activePark === pid && !this.filters.favOnly;
            const parkBg = `background:url(${cfg.image || CC_LOGO}) center/cover`;
            return `
                <button class="park-hero-card${isActive ? ' park-hero-card--active' : ''} cc-press" data-park="${pid}"
                    style="${parkBg}" aria-label="${PARK_NAMES[pid]} anzeigen" aria-pressed="${isActive}">
                    <div class="park-hero-card__scrim" aria-hidden="true"></div>
                    <div class="park-hero-card__top">
                        <img src="${cfg.logo}" alt="" class="park-hero-logo" width="32" height="32">
                        <div>
                            <div class="park-hero-card__name">${PARK_NAMES[pid]}</div>
                            <div class="park-hero-card__location">${cfg.location}</div>
                        </div>
                    </div>
                    <div class="park-hero-card__bottom">
                        <div class="park-hero-card__motto">${cfg.motto}</div>
                        <div class="park-hero-card__counter">
                            <span class="material-symbols-rounded" style="font-size:11px;vertical-align:middle">attractions</span>
                            ${parkRides.length} Bahnen
                        </div>
                    </div>
                </button>`;
        }).join('');

        const favCard = `
            <button class="park-hero-card park-hero-card--special park-hero-card--fav${isFavActive ? ' park-hero-card--active' : ''} cc-press"
                data-special="fav" aria-label="Favoriten anzeigen" aria-pressed="${isFavActive}">
                ${favCollageHtml || logoFill}
                <div class="park-hero-card__top">
                    <div class="park-hero-card__special-icon">
                        <span class="material-symbols-rounded" style="font-size:20px;font-variation-settings:'FILL' ${isFavActive ? 1 : 0}">star</span>
                    </div>
                    <div>
                        <div class="park-hero-card__name">Favoriten</div>
                        <div class="park-hero-card__location">${favCount} Bahn${favCount !== 1 ? 'en' : ''}</div>
                    </div>
                </div>
                <div class="park-hero-card__bottom">
                    <div class="park-hero-card__motto">Deine Lieblingsattraktionen</div>
                </div>
            </button>`;

        const moreCard = `
            <button class="park-hero-card park-hero-card--special park-hero-card--more cc-press"
                style="background:url(assets/images/parks/weitereParks.webp) center/cover"
                data-special="more" aria-label="Weitere Parks in Planung" aria-haspopup="dialog">
                <div class="park-hero-card__scrim" aria-hidden="true"></div>
                <div class="park-hero-card__top">
                    <div class="park-hero-card__special-icon">
                        <span class="material-symbols-rounded" style="font-size:20px">more_horiz</span>
                    </div>
                    <div>
                        <div class="park-hero-card__name">Weitere Parks</div>
                        <div class="park-hero-card__location">In Planung</div>
                    </div>
                </div>
                <div class="park-hero-card__bottom">
                    <div class="park-hero-card__motto">Was als nächstes kommt</div>
                </div>
            </button>`;

        carousel.innerHTML = `
            <div class="park-carousel-section">
                <div class="section-head">
                    <h2 class="section-head__title"><span class="material-symbols-rounded">park</span>Deine Parks</h2>
                </div>
                <div class="park-carousel-scroll">${allCard}${parkCardsHtml}${favCard}${moreCard}</div>
            </div>`;

        carousel.querySelectorAll('.park-hero-card').forEach(btn => {
            btn.addEventListener('click', () => {
                const special = btn.dataset.special;
                const parkId  = btn.dataset.park;
                if (special === 'all') {
                    this.activePark = 'all';
                    this.filters.favOnly = false;
                    this.renderRideList();
                } else if (special === 'fav') {
                    this.activePark = 'all';
                    this.filters.favOnly = !this.filters.favOnly;
                    this.renderRideList();
                } else if (special === 'more') {
                    this._openMoreParksPopup();
                } else if (parkId) {
                    this.activePark = parkId;
                    this.filters.favOnly = false;
                    this.renderRideList();
                    document.getElementById('page-parks')?.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }

    _renderShortWait() {
        const featured = document.getElementById('featured-ride');
        if (!featured) return;

        const titleHead = `
            <h2 class="section-head__title">
                <span class="material-symbols-rounded">timer</span>
                Kurze Wartezeiten
            </h2>`;

        const placeholder = (icon, text) => `
            <div class="featured-section">
                <div class="section-head">${titleHead}</div>
                <div class="short-wait-placeholder">
                    <span class="material-symbols-rounded short-wait-placeholder__icon">${icon}</span>
                    <p class="short-wait-placeholder__text">${text}</p>
                </div>
            </div>`;

        if (this.activePark === 'all') {
            featured.innerHTML = placeholder('location_on', 'Wähle einen Park, um die kürzesten Wartezeiten zu sehen');
            return;
        }

        const entry = this.waitCache[this.activePark];
        if (!entry || !Array.isArray(entry.rides)) {
            featured.innerHTML = navigator.onLine
                ? placeholder('hourglass_empty', 'Wartezeiten werden geladen…')
                : placeholder('cloud_off', 'Offline, keine gespeicherten Wartezeiten');
            return;
        }

        if (this._isParkClosed(this.activePark)) {
            featured.innerHTML = placeholder('block', `${PARK_NAMES[this.activePark] ?? 'Der Park'} ist heute geschlossen`);
            return;
        }

        const { onlyCoasters, threshold } = this.shortWaitFilter;

        const list = this.rides
            .filter(r => r.park_id === this.activePark)
            .filter(r => !onlyCoasters || r.category === 'roller_coasters')
            .map(ride => ({ ride, wait: this._getWaitEntry(ride) }))
            .filter(x => x.wait && x.wait.is_open && typeof x.wait.wait_time === 'number')
            .filter(x => x.wait.wait_time <= threshold)
            .sort((a, b) => a.wait.wait_time - b.wait.wait_time);

        const time = new Date(entry.fetchedAt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

        const segBtn = (label, active, dataAttr) =>
            `<button type="button" class="seg__btn${active ? ' seg__btn--active' : ''}" ${dataAttr} aria-pressed="${active}">${label}</button>`;

        const controls = `
            <div class="short-wait-controls">
                <div class="seg" role="group" aria-label="Kategorie">
                    ${segBtn('Alle', !onlyCoasters, 'data-sw-cat="all"')}
                    ${segBtn('Achterbahnen', onlyCoasters, 'data-sw-cat="coaster"')}
                </div>
                <div class="seg" role="group" aria-label="Maximale Wartezeit">
                    ${segBtn('≤ 15 Min', threshold === 15, 'data-sw-th="15"')}
                    ${segBtn('≤ 30 Min', threshold === 30, 'data-sw-th="30"')}
                </div>
            </div>`;

        let body;
        if (list.length === 0) {
            const what = onlyCoasters ? 'Achterbahnen' : 'Attraktionen';
            body = `
                <div class="short-wait-empty">
                    <span class="material-symbols-rounded">search_off</span>
                    <p>Keine ${what} mit ≤ ${threshold} Min Wartezeit</p>
                </div>`;
        } else {
            const cards = list.map(({ ride, wait }) => {
                const photo = this._ridePhotoBg(ride);
                const name  = this._escapeHtml(ride.name);
                return `
                    <button class="short-wait-card cc-press" data-ride-id="${this._escapeHtml(ride.id)}" aria-label="${name}: ${wait.wait_time} Minuten Wartezeit">
                        <span class="short-wait-card__photo" style="${photo}" aria-hidden="true"></span>
                        <span class="short-wait-card__info">
                            <span class="short-wait-card__name">${name}</span>
                            ${this._waitBadgeHTML(wait)}
                        </span>
                    </button>`;
            }).join('');
            body = `<div class="short-wait-scroll">${cards}</div>`;
        }

        featured.innerHTML = `
            <div class="featured-section">
                <div class="section-head section-head--with-meta">
                    ${titleHead}
                    <span class="short-wait-stamp">${entry.source === 'simulated' ? 'Simuliert' : 'Live'} · ${time} Uhr</span>
                </div>
                ${controls}
                ${body}
            </div>`;

        featured.querySelectorAll('.short-wait-card').forEach(btn => {
            btn.addEventListener('click', () => {
                const ride = this.rides.find(r => r.id === btn.dataset.rideId);
                if (ride) this.openRideInfoSheet(ride);
            });
        });

        featured.querySelectorAll('[data-sw-cat]').forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.dataset.swCat === 'coaster';
                if (this.shortWaitFilter.onlyCoasters === val) return;
                this.shortWaitFilter.onlyCoasters = val;
                this._renderShortWait();
            });
        });

        featured.querySelectorAll('[data-sw-th]').forEach(btn => {
            btn.addEventListener('click', () => {
                const val = parseInt(btn.dataset.swTh, 10);
                if (this.shortWaitFilter.threshold === val) return;
                this.shortWaitFilter.threshold = val;
                this._renderShortWait();
            });
        });
    }

    // Real user score from the latest review if the ride was rated, otherwise the
    // automatic preview score. Both use the same 0-100 scale.
    _getRideScore(ride) {
        const reviews = (this.reviews ?? []).filter(r => r.rideId === ride.id);
        if (reviews.length) {
            const latest = reviews.reduce((a, b) => ((a.timestamp ?? '') >= (b.timestamp ?? '') ? a : b));
            const s = latest.scores?.display;
            if (typeof s === 'number') return s;
        }
        return ridePrescore(ride);
    }

    // Photo background for a ride: its real image (cover) or a branded
    // CoasterCheck-logo placeholder over the park gradient when no image exists.
    _ridePhotoBg(ride) {
        const cfg = PARK_CONFIG[ride.park_id] ?? { hueA: '#333', hueB: '#111' };
        return ride.image
            ? `background-image:url(${ride.image});background-size:cover;background-position:center`
            : `background:url(${CC_LOGO}) center/44% no-repeat, linear-gradient(135deg,${cfg.hueA},${cfg.hueB})`;
    }

    createRideCard(ride) {
        const cfg   = PARK_CONFIG[ride.park_id] ?? { hueA: '#333', hueB: '#111', logo: '', short: ride.park_id };
        const score = this._getRideScore(ride);
        const cat   = this._getCategoryLabel(ride.category);

        const speedTxt  = ride.stats.speed_kmh  ? `⚡ ${ride.stats.speed_kmh} km/h` : '';
        const heightTxt = ride.stats.height_m   ? `↗ ${ride.stats.height_m} m`     : '';
        const invTxt    = ride.stats.inversions  ? `🌀 ${ride.stats.inversions}`     : '';
        const statsText = [speedTxt, heightTxt, invTxt].filter(Boolean).join('  ');

        const srBadge   = ride.features.single_rider ? '<span class="cat-pill"><span class="material-symbols-rounded" style="font-size:12px">person</span>Single Rider</span>' : '';
        const headBadge = (ride.app_metrics.headache_potential && ride.app_metrics.headache_reports >= 5)
            ? '<span class="cat-pill" style="color:var(--cc-danger);border-color:rgba(179,54,27,.25)"><span class="material-symbols-rounded" style="font-size:12px">sick</span>Ruckelig</span>' : '';

        const isFav  = this.isFavorite(ride.id);
        const favStyle = isFav ? "'FILL' 1" : "'FILL' 0";

        const isRated = this.reviews && this.reviews.some(r => r.rideId === ride.id);
        const ratedStyle = isRated ? "'FILL' 1" : "'FILL' 0";

        const el = document.createElement('article');
        el.className = 'ride-card cc-press';
        el.tabIndex = 0;
        el.setAttribute('role', 'button');
        el.setAttribute('aria-label', `${ride.name}: Details anzeigen`);

        const photoStyle = this._ridePhotoBg(ride);

        el.innerHTML = `
            <div class="ride-card__photo" style="${photoStyle}">
                <div class="ride-card__badge-park">
                    <img src="${cfg.logo}" alt="" class="ride-card__badge-park-logo" width="16" height="16">
                    <span class="ride-card__badge-park-name">${cfg.short}</span>
                </div>
                <div class="ride-card-rated${isRated ? ' ride-card-rated--active' : ''}" aria-label="${isRated ? 'Bereits bewertet' : 'Noch nicht bewertet'}">
                    <span class="material-symbols-rounded" style="font-variation-settings:${ratedStyle}">check_circle</span>
                </div>
                <button class="ride-card-star${isFav ? ' ride-card-star--active' : ''}" data-ride-id="${ride.id}" aria-label="${isFav ? 'Aus Favoriten entfernen' : 'Als Favorit markieren'}">
                    <span class="material-symbols-rounded" style="font-variation-settings:${favStyle}">star</span>
                </button>
                <div class="ride-card__bottom-grad">
                    <span class="ride-card__photo-name">${this._escapeHtml(ride.name)}</span>
                </div>
            </div>
            <div class="ride-card__body">
                <div class="ride-card__meta-row">
                    <div class="ride-thrill-meter">${thrillMeterSVGDark(score, 46)}</div>
                    <span class="cat-pill">${cat}</span>
                    ${srBadge}${headBadge}
                    <span class="ride-card__wait" data-ride-wait="${ride.id}">${this._rideWaitBadgeHTML(ride)}</span>
                </div>
                ${statsText ? `<div class="ride-card__stats-row"><span class="ride-card__stat">${statsText}</span></div>` : ''}
            </div>`;

        const open = () => this.openRideInfoSheet(ride);
        el.addEventListener('click', (e) => {
            if (e.target.closest('.ride-card-star')) return;
            open();
        });
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });

        const starBtn = el.querySelector('.ride-card-star');
        if (starBtn) {
            starBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFavorite(ride.id);
            });
        }
        return el;
    }

    createRideCardCompact(ride, { rating, onClick } = {}) {
        const cat   = this._getCategoryLabel(ride.category);
        const stats = [
            ride.stats.speed_kmh  ? `⚡ ${ride.stats.speed_kmh} km/h` : '',
            ride.stats.height_m   ? `↗ ${ride.stats.height_m} m`      : '',
            ride.stats.inversions ? `🌀 ${ride.stats.inversions}`      : ''
        ].filter(Boolean).join('  ');

        const el = document.createElement('article');
        el.className = 'ride-card--compact cc-press';
        el.tabIndex = 0;
        el.setAttribute('role', 'button');
        el.setAttribute('aria-label', `${ride.name} Details`);

        const compactPhotoStyle = this._ridePhotoBg(ride);

        el.innerHTML = `
            <div class="ride-card-compact__photo" style="${compactPhotoStyle}">
            </div>
            <div class="ride-card-compact__info">
                <div class="ride-card-compact__name">${this._escapeHtml(ride.name)}</div>
                <div class="ride-card-compact__cat">${cat}</div>
                ${stats ? `<div class="ride-card-compact__stats">${stats}</div>` : ''}
            </div>
            <div class="ride-card-compact__right">
                ${rating !== undefined ? `<span style="font-size:11px;font-weight:700;color:var(--cc-accent);font-variant-numeric:tabular-nums">${rating}</span>` : ''}
                ${rating !== undefined ? '' : '<span class="material-symbols-rounded ride-card-compact__chevron">chevron_right</span>'}
            </div>`;

        const action = onClick ? onClick : () => this.openReview(ride);
        el.addEventListener('click', action);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); } });
        return el;
    }

    initRideInfoSheet() {
        const sheet    = document.getElementById('ride-info-sheet');
        const backdrop = document.getElementById('ride-info-backdrop');
        if (!sheet) return;

        document.getElementById('ride-info-close')?.addEventListener('click',  () => this.closeRideInfoSheet());
        backdrop.addEventListener('click', () => this.closeRideInfoSheet());
        document.getElementById('ride-info-rate-btn')?.addEventListener('click', () => {
            const ride = this.infoSheetRide;
            this.closeRideInfoSheet();
            if (ride) {
                const existingReview = this.reviews && this.reviews.find(r => r.rideId === ride.id);
                if (existingReview) {
                    this.openReviewForEdit(ride, existingReview);
                } else {
                    this.openReview(ride);
                }
            }
        });
        document.getElementById('ride-info-fav-btn')?.addEventListener('click', () => {
            if (!this.infoSheetRide) return;
            this.toggleFavorite(this.infoSheetRide.id);
            this._updateInfoSheetFavBtn(this.infoSheetRide.id);
        });
        sheet.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeRideInfoSheet();
            this._focusTrap(sheet, e);
        });

        const badgesEl  = document.getElementById('ride-info-badges');
        const tooltipEl = document.getElementById('ride-info-badge-tooltip');
        const tipIcon   = document.getElementById('ride-info-badge-tooltip-icon');
        const tipText   = document.getElementById('ride-info-badge-tooltip-text');
        if (badgesEl && tooltipEl) {
            badgesEl.addEventListener('click', (e) => {
                const badge = e.target.closest('[data-tooltip]');
                if (!badge) { tooltipEl.hidden = true; return; }
                e.stopPropagation();
                const same = !tooltipEl.hidden && tooltipEl.dataset.for === badge.dataset.tooltip;
                if (same) { tooltipEl.hidden = true; delete tooltipEl.dataset.for; return; }
                if (tipIcon) tipIcon.textContent = badge.dataset.icon || 'info';
                if (tipText) tipText.textContent = badge.dataset.tooltip;
                tooltipEl.dataset.for = badge.dataset.tooltip;
                tooltipEl.hidden = false;
            });
            sheet.addEventListener('click', (e) => {
                if (!e.target.closest('[data-tooltip]')) tooltipEl.hidden = true;
            });
        }

        const decBtn = document.getElementById('ride-info-dec-btn');
        const incBtn = document.getElementById('ride-info-inc-btn');
        const dayCountEl = document.getElementById('ride-info-day-count');
        const lifetimeCountEl = document.getElementById('ride-info-lifetime-count');

        if (decBtn) {
            decBtn.addEventListener('click', async () => {
                if (!this.infoSheetRide || !this.db) return;
                const updated = await adjustRideDayCount(this.db, this.infoSheetRide.id, -1);
                if (dayCountEl) dayCountEl.textContent = updated.dayCount;
                if (lifetimeCountEl) lifetimeCountEl.textContent = updated.lifetimeCount;
                this.showToast(`Fahrt für „${this.infoSheetRide.name}“ abgezogen.`);
                if (this.currentPage === 'page-logbook') this.renderLogbook();
            });
        }
        if (incBtn) {
            incBtn.addEventListener('click', async () => {
                if (!this.infoSheetRide || !this.db) return;
                const updated = await adjustRideDayCount(this.db, this.infoSheetRide.id, 1);
                if (dayCountEl) dayCountEl.textContent = updated.dayCount;
                if (lifetimeCountEl) lifetimeCountEl.textContent = updated.lifetimeCount;
                this.showToast(`Fahrt für „${this.infoSheetRide.name}“ hinzugefügt.`);
                if (this.currentPage === 'page-logbook') this.renderLogbook();
            });
        }
    }

    async openRideInfoSheet(ride) {
        this.infoSheetRide = ride;
        const cfg = PARK_CONFIG[ride.park_id] ?? { hueA: '#333', hueB: '#111', logo: '', short: ride.park_id };
        const cat = this._getCategoryLabel(ride.category);

        const today = new Date().toISOString().slice(0, 10);
        let dayCount = 0;
        let lifetimeCount = 0;
        if (this.db) {
            try {
                const countRecord = await getRideCount(this.db, ride.id);
                if (countRecord) {
                    dayCount = countRecord.dayDate === today ? countRecord.dayCount : 0;
                    lifetimeCount = countRecord.lifetimeCount;
                }
            } catch (e) {
                console.error('Error loading counters:', e);
            }
        }
        const dayCountEl = document.getElementById('ride-info-day-count');
        const lifetimeCountEl = document.getElementById('ride-info-lifetime-count');
        if (dayCountEl) dayCountEl.textContent = dayCount;
        if (lifetimeCountEl) lifetimeCountEl.textContent = lifetimeCount;

        this._renderRideHero(ride, cfg);

        const parkLogo = document.getElementById('ride-info-park-logo');
        if (parkLogo) { parkLogo.src = cfg.logo; parkLogo.alt = PARK_NAMES[ride.park_id] ?? ''; }
        const parkName = document.getElementById('ride-info-park-name');
        if (parkName) parkName.textContent = PARK_NAMES[ride.park_id] ?? ride.park_id;

        const rideName = document.getElementById('ride-info-ride-name');
        if (rideName) rideName.textContent = ride.name;

        const statsEl = document.getElementById('ride-info-stats');
        if (statsEl) {
            const parts = [
                ride.stats.speed_kmh  ? `⚡ ${ride.stats.speed_kmh} km/h` : '',
                ride.stats.height_m   ? `↗ ${ride.stats.height_m} m`      : '',
                ride.stats.inversions ? `🌀 ${ride.stats.inversions} Inv.` : ''
            ].filter(Boolean);
            statsEl.textContent = parts.join('   ');
        }

        const badgesEl = document.getElementById('ride-info-badges');
        const tooltipEl = document.getElementById('ride-info-badge-tooltip');
        if (tooltipEl) tooltipEl.hidden = true;
        if (badgesEl) {
            const mkBadge = (icon, label, tip, danger = false) => {
                const s = danger ? ' style="color:var(--cc-danger);border-color:rgba(179,54,27,.25)"' : '';
                return `<button class="cat-pill cat-pill--btn" data-tooltip="${tip}" data-icon="${icon}"${s} title="${tip}" aria-label="${label}: ${tip}">` +
                    `<span class="material-symbols-rounded" style="font-size:12px">${icon}</span>${label}</button>`;
            };
            const THRILL_ICON  = { high: 'local_fire_department', medium: 'speed', low: 'child_care' };
            const THRILL_LABEL = { high: 'Hoher Thrill', medium: 'Mittlerer Thrill', low: 'Familienfahrt' };
            const THRILL_TIP   = {
                high:   'Intensiver Ride für Adrenalin-Junkies',
                medium: 'Mittleres Erlebnis für die meisten Besucher',
                low:    'Sanft und familienfreundlich'
            };
            const tl = ride.app_metrics.thrill_level;
            let html = mkBadge('attractions', cat, `Kategorie: ${cat}`);
            if (tl) html += mkBadge(THRILL_ICON[tl] ?? 'speed', THRILL_LABEL[tl] ?? tl, THRILL_TIP[tl] ?? `Thrill-Level: ${tl}`);
            if (ride.features.single_rider) html += mkBadge('person', 'Single Rider', 'Single-Rider-Schlange verfügbar, oft kürzere Wartezeiten');
            if (ride.app_metrics.immersive_theming === true) html += mkBadge('visibility', 'Thematisiert', 'Aufwendige Thematisierung mit Storyline und Atmosphäre');
            if (ride.features.vr) html += mkBadge('vrpano', 'VR', 'Virtual-Reality-Erlebnis an Bord');
            if (ride.app_metrics.headache_potential && ride.app_metrics.headache_reports >= 5)
                html += mkBadge('sick', 'Ruckelig', 'Hohes Kopfschmerz-Potenzial laut Nutzerberichten', true);
            if (ride.requirements?.min_height_cm)
                html += mkBadge('height', `ab ${ride.requirements.min_height_cm} cm`, `Mindestgröße: ${ride.requirements.min_height_cm} cm`);
            if (ride.theme_area)
                html += mkBadge('location_on', ride.theme_area, `Themenbereich: ${ride.theme_area}`);
            if (ride.hints?.loud_effects) html += mkBadge('volume_up', 'Laute Effekte', 'Laute Soundeffekte an Bord');
            if (ride.hints?.darkness)     html += mkBadge('dark_mode', 'Dunkelheit', 'Fahrt führt durch dunkle Bereiche');
            if (ride.hints?.wet)          html += mkBadge('water_drop', 'Nass', 'Hier kannst du nass werden');
            badgesEl.innerHTML = html;
        }

        // Live wait time badge (uses cache; fetches in background if stale).
        this._ensureWaitTimes(ride.park_id);
        this._updateInfoSheetWait(ride);

        const descEl = document.getElementById('ride-info-description');
        if (descEl) {
            let html = '';
            if (ride.subcategory) html += `<p class="ride-info-sheet__subcategory">${this._escapeHtml(ride.subcategory)}</p>`;
            if (ride.description) html += `<p class="ride-info-sheet__desc-text">${this._escapeHtml(ride.description)}</p>`;
            const sf = ride.features?.special_features;
            if (sf?.length) {
                html += `<ul class="ride-info-sheet__features">` +
                    sf.map(f => `<li><span class="material-symbols-rounded" style="font-size:14px;vertical-align:middle;color:var(--cc-accent)">chevron_right</span> ${this._escapeHtml(f)}</li>`).join('') +
                    `</ul>`;
            }

            // "Gut zu wissen": strukturierte Zusatz-Bestimmungen laut Movie-Park-Aushang.
            const req = ride.requirements || {};
            const facts = [];
            if (req.companion_under_cm) facts.push(['group', `Begleitung nötig unter ${req.companion_under_cm} cm`]);
            if (req.max_height_cm)      facts.push(['height', `Höchstgröße: ${req.max_height_cm} cm`]);
            if (req.max_age)            facts.push(['cake', `Höchstalter: ${req.max_age} Jahre`]);
            if (req.max_weight_kg)      facts.push(['scale', `max. ${req.max_weight_kg} kg pro Fahrzeug`]);
            if (facts.length) {
                html += `<div class="ride-info-sheet__facts">` +
                    `<h4 class="ride-info-sheet__facts-title">Gut zu wissen</h4>` +
                    `<ul class="ride-info-sheet__features">` +
                    facts.map(([icon, label]) => `<li><span class="material-symbols-rounded" style="font-size:14px;vertical-align:middle;color:var(--cc-accent)">${icon}</span> ${this._escapeHtml(label)}</li>`).join('') +
                    `</ul></div>`;
            }
            descEl.innerHTML = html;
        }

        const rateBtn = document.getElementById('ride-info-rate-btn');
        if (rateBtn) {
            const isRated = this.reviews && this.reviews.some(r => r.rideId === ride.id);
            if (isRated) {
                rateBtn.classList.add('ride-info-sheet__rate-btn--rated');
                rateBtn.innerHTML = `
                    <span class="material-symbols-rounded">check_circle</span>
                    Bereits bewertet
                `;
            } else {
                rateBtn.classList.remove('ride-info-sheet__rate-btn--rated');
                rateBtn.innerHTML = `
                    <span class="material-symbols-rounded">rate_review</span>
                    Bewerten
                `;
            }
        }

        this._updateInfoSheetFavBtn(ride.id);

        const sheet    = document.getElementById('ride-info-sheet');
        const backdrop = document.getElementById('ride-info-backdrop');
        sheet?.classList.add('ride-info-sheet--open');
        backdrop?.classList.add('ride-info-sheet__backdrop--open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => document.getElementById('ride-info-rate-btn')?.focus(), 50);
    }

    // Hero visual: a swipeable gallery when a ride has several media (photos or a
    // clip), otherwise the single photo as a cover background, or the logo placeholder.
    _renderRideHero(ride, cfg) {
        const hero = document.getElementById('ride-info-hero');
        const gallery = document.getElementById('ride-info-gallery');
        if (!hero) return;

        const media = (Array.isArray(ride.media) && ride.media.length)
            ? ride.media
            : (ride.image ? [{ type: 'image', src: ride.image }] : []);
        const firstImg = media.find(m => m.type === 'image')?.src ?? ride.image;

        // Background behind the gallery, and the whole visual for a single medium.
        hero.style.background = firstImg
            ? `url(${firstImg}) center/cover no-repeat`
            : `url(${CC_LOGO}) center/38% no-repeat, linear-gradient(135deg, ${cfg.hueA}, ${cfg.hueB})`;

        if (!gallery) return;
        if (media.length < 2) {
            gallery.hidden = true;
            gallery.innerHTML = '';
            return;
        }

        const slides = media.map(m => m.type === 'video'
            ? `<div class="ride-info-sheet__slide"><video class="ride-info-sheet__slide-video" src="${m.src}" muted loop playsinline preload="metadata"></video></div>`
            : `<div class="ride-info-sheet__slide" style="background-image:url(${m.src})"></div>`
        ).join('');
        const dots = media.map((_, i) =>
            `<button class="ride-info-sheet__dot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Medium ${i + 1}"></button>`
        ).join('');
        gallery.innerHTML =
            `<div class="ride-info-sheet__track">${slides}</div>` +
            `<div class="ride-info-sheet__dots">${dots}</div>`;
        gallery.hidden = false;

        const track = gallery.querySelector('.ride-info-sheet__track');
        const dotEls = [...gallery.querySelectorAll('.ride-info-sheet__dot')];

        const setActive = (idx) => {
            dotEls.forEach((d, i) => d.classList.toggle('is-active', i === idx));
            gallery.querySelectorAll('video').forEach(v => {
                if (v.closest('.ride-info-sheet__slide') === track.children[idx]) v.play().catch(() => {});
                else { v.pause(); v.currentTime = 0; }
            });
        };
        track.addEventListener('scroll', () => {
            setActive(Math.round(track.scrollLeft / track.clientWidth));
        }, { passive: true });
        dotEls.forEach((d, i) => d.addEventListener('click', () => {
            track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
        }));
        setActive(0);
    }

    closeRideInfoSheet() {
        document.getElementById('ride-info-sheet')?.classList.remove('ride-info-sheet--open');
        document.getElementById('ride-info-backdrop')?.classList.remove('ride-info-sheet__backdrop--open');
        document.body.style.overflow = '';
        this.infoSheetRide = null;
        document.getElementById('ride-info-gallery')?.querySelectorAll('video').forEach(v => v.pause());
        const tip = document.getElementById('ride-info-badge-tooltip');
        if (tip) tip.hidden = true;
    }

    _updateInfoSheetFavBtn(rideId) {
        const btn  = document.getElementById('ride-info-fav-btn');
        const icon = document.getElementById('ride-info-fav-icon');
        if (!btn || !icon) return;
        const isFav = this.isFavorite(rideId);
        btn.classList.toggle('ride-info-sheet__fav-btn--active', isFav);
        icon.textContent = isFav ? 'star' : 'star';
        icon.style.fontVariationSettings = isFav ? "'FILL' 1" : "'FILL' 0";
        btn.setAttribute('aria-label', isFav ? 'Aus Favoriten entfernen' : 'Als Favorit markieren');
    }

    initReviewForm() {
        if (!this.reviewModal) return;

        document.getElementById('review-close')?.addEventListener('click', () => this.closeReview());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.reviewModal.classList.contains('review-modal--open')) this.closeReview();
        });
        this.reviewModal.addEventListener('keydown', (e) => this._focusTrap(this.reviewModal, e));

        this.reviewModal.querySelectorAll('.review-stepper__tab').forEach(tab => {
            tab.addEventListener('click', () => this.stepTo(parseInt(tab.dataset.step)));
        });

        document.getElementById('review-back')?.addEventListener('click', () => this.stepTo(this.currentStep - 1));
        document.getElementById('review-next')?.addEventListener('click', () => this.stepTo(this.currentStep + 1));
        document.getElementById('review-save')?.addEventListener('click', () => this.saveReview());

        this._initReviewA11y();

        this.reviewModal.querySelectorAll('.chip-group[data-type="single"]').forEach(group => {
            group.addEventListener('click', (e) => {
                const chip = e.target.closest('.chip-select');
                if (!chip) return;
                group.querySelectorAll('.chip-select').forEach(c => {
                    const on = c === chip;
                    c.classList.toggle('chip-select--selected', on);
                    c.setAttribute('aria-checked', on ? 'true' : 'false');
                });
                this._onFormChange();
            });
        });

        this.reviewModal.querySelectorAll('.chip-group[data-type="multi"]').forEach(group => {
            group.addEventListener('click', (e) => {
                const chip = e.target.closest('.chip-multi');
                if (!chip) return;
                const field = group.dataset.field;
                if (field === 'uniqueness') {
                    const selected = group.querySelectorAll('.chip-multi--selected');
                    if (!chip.classList.contains('chip-multi--selected') && selected.length >= 5) return;
                }
                const on = chip.classList.toggle('chip-multi--selected');
                chip.setAttribute('aria-pressed', on ? 'true' : 'false');
                this._updateUniquenessCount();
                this._onFormChange();
            });
        });

        this.reviewModal.querySelectorAll('.toggle-card-group[data-type="tristate"]').forEach(group => {
            group.addEventListener('click', (e) => {
                const card = e.target.closest('.toggle-card');
                if (!card) return;
                card.dataset.state = ((parseInt(card.dataset.state, 10) + 1) % 4);
                this._applyToggleCardState(card);
            });
        });
    }

    // A11y (WCAG 4.1.2): expose the chip/card selection state to assistive tech.
    // Single groups become radiogroup/radio, multi chips use aria-pressed, and
    // group labels are linked via aria-labelledby.
    _initReviewA11y() {
        this.reviewModal.querySelectorAll('.chip-group[data-type="single"]').forEach(group => {
            this._labelGroup(group, 'radiogroup');
            group.querySelectorAll('.chip-select').forEach(chip => {
                chip.setAttribute('role', 'radio');
                chip.setAttribute('aria-checked', chip.classList.contains('chip-select--selected') ? 'true' : 'false');
            });
        });
        this.reviewModal.querySelectorAll('.chip-group[data-type="multi"]').forEach(group => {
            this._labelGroup(group, 'group');
            group.querySelectorAll('.chip-multi').forEach(chip => {
                chip.setAttribute('aria-pressed', chip.classList.contains('chip-multi--selected') ? 'true' : 'false');
            });
        });
        this.reviewModal.querySelectorAll('.toggle-card-group[data-type="tristate"]').forEach(group => {
            this._labelGroup(group, 'group');
        });
    }

    _labelGroup(group, role) {
        group.setAttribute('role', role);
        const label = group.closest('.form-field')?.querySelector('.form-field__label');
        if (label) {
            if (!label.id) label.id = `chiplbl-${group.dataset.field}`;
            group.setAttribute('aria-labelledby', label.id);
        }
    }

    _applyToggleCardState(card) {
        const state = parseInt(card.dataset.state, 10) || 0;
        card.classList.remove('toggle-card--yes', 'toggle-card--partial', 'toggle-card--no');
        const lbl = card.querySelector('.toggle-card__state');
        const name = card.querySelector('.toggle-card__label')?.textContent ?? '';
        let stateText = 'keine Angabe';
        if (state === 1) { card.classList.add('toggle-card--no'); stateText = 'Nein'; }
        else if (state === 2) { card.classList.add('toggle-card--partial'); stateText = 'Eingeschränkt'; }
        else if (state === 3) { card.classList.add('toggle-card--yes'); stateText = 'Ja'; }
        if (lbl) lbl.textContent = state === 0 ? '-' : stateText;
        card.setAttribute('aria-label', `${name}: ${stateText}`);
    }

    _syncChipAria() {
        this.reviewModal.querySelectorAll('.chip-select').forEach(c =>
            c.setAttribute('aria-checked', c.classList.contains('chip-select--selected') ? 'true' : 'false'));
        this.reviewModal.querySelectorAll('.chip-multi').forEach(c =>
            c.setAttribute('aria-pressed', c.classList.contains('chip-multi--selected') ? 'true' : 'false'));
    }

    _updateUniquenessCount() {
        const group = this.reviewModal.querySelector('.chip-group[data-field="uniqueness"]');
        const count = group?.querySelectorAll('.chip-multi--selected').length ?? 0;
        const el = document.getElementById('uniqueness-count');
        if (el) el.textContent = `(${count}/5)`;
    }

    _onFormChange() {
        this._updateLiveScore();
        this._updateStepperChecks();
        this._updateSaveBtn();
    }

    stepTo(n) {
        const total = 4;
        if (n < 1 || n > total) return;
        this.currentStep = n;

        this.reviewModal.querySelectorAll('.review-section').forEach(sec => {
            sec.hidden = parseInt(sec.dataset.step) !== n;
        });

        this.reviewModal.querySelectorAll('.review-stepper__tab').forEach(tab => {
            const active = parseInt(tab.dataset.step) === n;
            tab.classList.toggle('review-stepper__tab--active', active);
            tab.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        const back = document.getElementById('review-back');
        if (back) back.disabled = n === 1;

        const next = document.getElementById('review-next');
        const save = document.getElementById('review-save');
        if (next && save) {
            if (n < total) {
                next.hidden = false;
                save.hidden = true;
            } else {
                next.hidden = true;
                save.hidden = false;
            }
        }

        document.getElementById('review-body')?.scrollTo(0, 0);
    }

    _updateLiveScore() {
        const score = this._computeDisplayScore();
        const meterEl = document.getElementById('review-thrill-meter');
        if (meterEl) meterEl.innerHTML = thrillMeterSVG(score, 56);
        const scoreDisplay = document.getElementById('review-score-display');
        if (scoreDisplay) scoreDisplay.textContent = score;
    }

    // Live-preview score: read the current chip values off the DOM and hand them
    // to the pure computeDisplayScore() formula (single source of truth).
    _computeDisplayScore() {
        return computeDisplayScore({
            experience:    this._chipVal('experience')   ?? 0,
            uniquenessLen: Math.min(5, this._multiChipVals('uniqueness').length),
            theme:         this._chipVal('theme')        ?? 0,
            effects:       this._chipVal('effects')      ?? 0,
            sounds:        this._chipVal('sounds')       ?? 0,
            queueLine:     this._chipVal('queueLine')    ?? 0,
            smoothness:    this._chipVal('smoothness')   ?? 0,
            repeatFactor:  this._chipVal('repeatFactor') ?? 0,
        });
    }

    _updateStepperChecks() {
        const sections = [
            { step: 1, fields: ['experience'] },
            { step: 2, fields: ['theme', 'effects', 'sounds', 'queueLine'] },
            { step: 3, fields: ['smoothness'] },
            { step: 4, fields: ['repeatFactor'] }
        ];
        sections.forEach(({ step, fields }) => {
            const complete = fields.every(f => this._chipVal(f) !== null);
            const tab = this.reviewModal.querySelector(`.review-stepper__tab[data-step="${step}"]`);
            const check = tab?.querySelector('.review-stepper__check');
            if (check) check.hidden = !complete;
        });
    }

    _updateSaveBtn() {
        const sections = [
            { fields: ['experience'] },
            { fields: ['theme', 'effects', 'sounds', 'queueLine'] },
            { fields: ['smoothness'] },
            { fields: ['repeatFactor'] }
        ];
        const completed = sections.filter(s => s.fields.every(f => this._chipVal(f) !== null)).length;
        const save = document.getElementById('review-save');
        if (save) save.disabled = completed < 4;
    }

    _chipVal(field) {
        const sel = this.reviewModal.querySelector(`.chip-group[data-field="${field}"] .chip-select--selected`);
        return sel ? parseFloat(sel.dataset.value) : null;
    }

    _multiChipVals(field) {
        return Array.from(this.reviewModal.querySelectorAll(`.chip-group[data-field="${field}"] .chip-multi--selected`)).map(c => c.dataset.feature ?? c.dataset.value);
    }

    openReview(ride) {
        this.currentReviewRide = ride;
        const cfg = PARK_CONFIG[ride.park_id] ?? { hueA: '#333', hueB: '#111', logo: '', short: ride.park_id };

        const hero = document.getElementById('review-hero');
        if (hero) {
            if (ride.image) {
                hero.style.background = `linear-gradient(to bottom, rgba(0,0,0,.35) 0%, rgba(0,0,0,.55) 100%), url(${ride.image}) center/cover no-repeat`;
            } else {
                hero.style.background = `url(${CC_LOGO}) center/38% no-repeat, linear-gradient(135deg, ${cfg.hueA}, ${cfg.hueB})`;
            }
        }

        const parkLogo = document.getElementById('review-hero-park-logo');
        if (parkLogo) { parkLogo.src = cfg.logo; parkLogo.alt = PARK_NAMES[ride.park_id] ?? ''; }
        const parkName = document.getElementById('review-hero-park-name');
        if (parkName) parkName.textContent = PARK_NAMES[ride.park_id] ?? ride.park_id;

        const rideName = document.getElementById('review-hero-ride-name');
        if (rideName) rideName.textContent = ride.name;

        const statsEl = document.getElementById('review-hero-stats');
        if (statsEl) {
            const parts = [
                ride.stats.speed_kmh  ? `⚡ ${ride.stats.speed_kmh} km/h` : '',
                ride.stats.height_m   ? `↗ ${ride.stats.height_m} m`      : '',
                ride.stats.inversions ? `🌀 ${ride.stats.inversions} Inv.` : ''
            ].filter(Boolean);
            statsEl.textContent = parts.join('   ');
        }

        const srToggle = document.getElementById('review-single-rider');
        if (srToggle) srToggle.checked = ride.features.single_rider === true;

        this.resetReviewForm();
        this.stepTo(1);
        this._updateLiveScore();

        this.reviewModal.classList.add('review-modal--open');
        document.body.style.overflow = 'hidden';
        document.getElementById('review-body')?.scrollTo(0, 0);

        this._setModalInert(true);
        setTimeout(() => document.getElementById('review-close')?.focus(), 50);
    }

    openReviewForEdit(ride, review) {
        this.editingReviewId = review.localId;
        this.openReview(ride);
        this._prefillReviewForm(review.inputs);
    }

    _prefillReviewForm(inputs) {
        if (!inputs) return;
        ['experience', 'theme', 'effects', 'sounds', 'queueLine', 'smoothness', 'repeatFactor'].forEach(field => {
            const val = inputs[field];
            if (val === null || val === undefined) return;
            const group = this.reviewModal.querySelector(`.chip-group[data-field="${field}"]`);
            group?.querySelectorAll('.chip-select').forEach(chip => {
                if (parseFloat(chip.dataset.value) === val) chip.classList.add('chip-select--selected');
            });
        });
        if (Array.isArray(inputs.themeTags) && inputs.themeTags.length > 0) {
            const group = this.reviewModal.querySelector('.chip-group[data-field="uniqueness"]');
            group?.querySelectorAll('.chip-multi').forEach(chip => {
                const key = chip.dataset.feature ?? chip.dataset.value;
                if (inputs.themeTags.includes(key)) chip.classList.add('chip-multi--selected');
            });
        }
        const sr = document.getElementById('review-single-rider');
        if (sr) sr.checked = inputs.singleRider === 1;
        this._syncChipAria();
        this._updateUniquenessCount();
        this._onFormChange();
    }

    closeReview() {
        this.editingReviewId = null;
        this.reviewModal.classList.remove('review-modal--open');
        document.body.style.overflow = '';
        this._setModalInert(false);
        this.currentReviewRide = null;
        const success = document.getElementById('review-success');
        if (success) success.hidden = true;
    }

    _setModalInert(active) {
        document.querySelector('.app-header')?.toggleAttribute('inert', active);
        document.getElementById('bottom-nav')?.toggleAttribute('inert', active);
        this.pages.forEach(p => p.toggleAttribute('inert', active));
    }

    _focusTrap(container, e) {
        if (e.key !== 'Tab') return;
        const sel = 'button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])';
        const els = Array.from(container.querySelectorAll(sel)).filter(el => !el.closest('[hidden]') && el.offsetParent !== null);
        if (els.length === 0) return;
        const first = els[0];
        const last  = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }

    resetReviewForm() {
        this.reviewModal.querySelectorAll('.chip-select--selected').forEach(c => c.classList.remove('chip-select--selected'));
        this.reviewModal.querySelectorAll('.chip-multi--selected').forEach(c => c.classList.remove('chip-multi--selected'));
        this.reviewModal.querySelectorAll('.toggle-card').forEach(card => {
            card.dataset.state = '0';
            this._applyToggleCardState(card);
        });
        this._syncChipAria();
        this._updateUniquenessCount();
        this._hideValidationError();
        const success = document.getElementById('review-success');
        if (success) success.hidden = true;
    }

    collectReviewData() {
        const ride = this.currentReviewRide;
        if (!ride) return null;

        const experience    = this._chipVal('experience');
        const uniquenessLen = Math.min(this._multiChipVals('uniqueness').length, 5);
        const theme         = this._chipVal('theme');
        const effects      = this._chipVal('effects');
        const sounds       = this._chipVal('sounds');
        const queueLine    = this._chipVal('queueLine');
        const smoothness   = this._chipVal('smoothness');
        const repeatFactor = this._chipVal('repeatFactor');
        const themeTags    = this._multiChipVals('uniqueness');
        const singleRider  = document.getElementById('review-single-rider')?.checked ? 1 : 0;

        const familyCards = this.reviewModal.querySelectorAll('.toggle-card-group[data-field="family"] .toggle-card');
        let familySum = 0;
        familyCards.forEach(card => {
            const s = parseInt(card.dataset.state, 10);
            if (s === 3) familySum += 1;
            else if (s === 2) familySum += 0.5;
        });

        const LABELS = { experience: 'Erleben', theme: 'Thema', effects: 'Spezialeffekte', sounds: 'Sounds', queueLine: 'Wartebereich', smoothness: 'Smoothness', repeatFactor: 'Wiederholungsfaktor' };
        const required = { experience, theme, effects, sounds, queueLine, smoothness, repeatFactor };
        const missing = Object.entries(required).filter(([, v]) => v === null);
        if (missing.length > 0) {
            return { error: `Bitte noch ausfüllen: ${missing.map(([k]) => LABELS[k] ?? k).join(', ')}`, missingFields: missing.map(([k]) => k) };
        }

        // Reuse the already-collected inputs with the shared score formulas.
        const physicsScore = this._calcPhysicsScore(ride.stats);
        const detail = computeDetailScores({
            physicsScore, experience, uniquenessLen,
            theme, effects, sounds, queueLine, smoothness, familySum, repeatFactor,
        });
        const displayScore = computeDisplayScore({
            experience, uniquenessLen,
            theme, effects, sounds, queueLine, smoothness, repeatFactor,
        });

        return {
            userId: this.userId, rideId: ride.id, rideName: ride.name, parkId: ride.park_id,
            timestamp: new Date().toISOString(),
            inputs: { experience, uniquenessLen, theme, effects, sounds, queueLine, themeTags, singleRider, smoothness, familySum, repeatFactor },
            scores: { ...detail, display: displayScore }
        };
    }

    _calcPhysicsScore(stats) {
        const s = stats.speed_kmh  ?? 0;
        const h = stats.height_m   ?? 0;
        const i = stats.inversions ?? 0;
        const sp = s < 40 ? 1 : s <= 65 ? 2 : s <= 90 ? 3 : s <= 115 ? 4 : 5;
        const hp = h < 15 ? 1 : h <= 30 ? 2 : h <= 50 ? 3 : h <= 70 ? 4 : 5;
        const ip = i === 0 ? 1 : i <= 2 ? 2 : i <= 4 ? 3 : i <= 6 ? 4 : 5;
        return (sp + hp + ip) / 3;
    }

    async saveReview() {
        // Guard against double submits.
        if (this._saving) return;

        const data = this.collectReviewData();
        if (!data) return;
        if (data.error) { this._showValidationError(data.error, data.missingFields); return; }
        this._hideValidationError();

        this._saving = true;
        const saveBtn = document.getElementById('review-save');
        if (saveBtn) saveBtn.disabled = true;

        try {
            if (this.db) {
                if (this.editingReviewId !== null) {
                    await updateReview(this.db, this.editingReviewId, data);
                } else {
                    await saveReviewToDB(this.db, data);
                    await adjustRideDayCount(this.db, data.rideId, +1);
                }
                this.reviews = await getReviews(this.db);
            } else {
                // No IndexedDB: persist to localStorage and enqueue for server sync.
                const reviews = JSON.parse(localStorage.getItem('coastercheck_reviews') || '[]');
                reviews.push(data);
                localStorage.setItem('coastercheck_reviews', JSON.stringify(reviews));
                this.reviews = reviews;
                if (this.editingReviewId === null) this._enqueueFallbackSync(data);
            }
            this.renderRideList();

            if ('serviceWorker' in navigator && 'SyncManager' in window) {
                const reg = await navigator.serviceWorker.ready;
                await reg.sync.register('sync-reviews').catch(() => {});
            } else {
                // No Background Sync (Firefox, iOS Safari): upload the queue directly.
                this._flushSyncQueue();
            }

            if (this.editingReviewId === null) this._checkTrophyUnlocks();
            this._updateAppBadge();
            this._showSaveSuccess(data.scores.display, data.rideName);
        } catch (e) {
            console.error('Save failed:', e);
            this._showValidationError('Bewertung konnte nicht gespeichert werden.', []);
            // Re-enable so the user can retry after a failed save.
            if (saveBtn) saveBtn.disabled = false;
        } finally {
            this._saving = false;
        }
    }

    // Fallback sync for browsers without IndexedDB: park reviews in localStorage
    // and POST them on save / reconnect.
    _enqueueFallbackSync(data) {
        try {
            const queue = JSON.parse(localStorage.getItem('coastercheck_fallback_sync') || '[]');
            queue.push(data);
            localStorage.setItem('coastercheck_fallback_sync', JSON.stringify(queue));
        } catch (e) { console.warn('Fallback sync enqueue failed:', e); }
        this._flushFallbackSync();
    }

    async _flushFallbackSync() {
        if (!HAS_BACKEND) return;
        if (this._flushingFallback || !navigator.onLine) return;
        let queue;
        try { queue = JSON.parse(localStorage.getItem('coastercheck_fallback_sync') || '[]'); }
        catch { queue = []; }
        if (!queue.length) return;

        this._flushingFallback = true;
        const remaining = [];
        try {
            for (const data of queue) {
                try {
                    const res = await fetch(apiUrl('/api/v1/reviews'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'x-user-id': data.userId ?? this.userId },
                        body: JSON.stringify(data),
                    });
                    // Keep for retry on network/5xx errors; drop on 2xx or a
                    // permanent 4xx (retrying a rejected payload never succeeds).
                    if (!res.ok && res.status >= 500) remaining.push(data);
                } catch {
                    remaining.push(data);
                }
            }
            localStorage.setItem('coastercheck_fallback_sync', JSON.stringify(remaining));
        } finally {
            this._flushingFallback = false;
        }
    }

    // Drains the IndexedDB sync queue over HTTP. Background Sync in the Service
    // Worker normally does this, but Firefox and iOS Safari have no SyncManager,
    // so without this the queue would never upload. Runs on startup, on reconnect
    // and after each save. The server dedups on dedup_key, so re-sends are safe.
    async _flushSyncQueue() {
        if (!HAS_BACKEND) return;
        if (this._flushingSyncQueue || !this.db || !navigator.onLine) return;
        this._flushingSyncQueue = true;
        try {
            const queue = await getSyncQueue(this.db);
            for (const item of queue) {
                const review = item.review;
                try {
                    const res = await fetch(apiUrl('/api/v1/reviews'), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'x-user-id': review?.userId ?? this.userId },
                        body: JSON.stringify(review),
                    });
                    // Drop on success or a permanent 4xx (those never succeed on
                    // retry); keep on network/5xx so a later flush retries.
                    const permanentClientError =
                        res.status >= 400 && res.status < 500 && res.status !== 408 && res.status !== 429;
                    if (res.ok || permanentClientError) {
                        await deleteSyncQueueItem(this.db, item.queueId);
                    }
                } catch {
                    // Offline / network error mid-flush: stop and retry on the next trigger.
                    break;
                }
            }
        } catch (e) {
            console.warn('Sync-Queue-Flush fehlgeschlagen:', e);
        } finally {
            this._flushingSyncQueue = false;
        }
        this._updateAppBadge();
    }

    _getSeenTrophies() {
        return new Set(JSON.parse(localStorage.getItem('cc_seen_trophies') || '[]'));
    }

    _markTrophiesSeen(ids) {
        const seen = this._getSeenTrophies();
        ids.forEach(id => seen.add(id));
        localStorage.setItem('cc_seen_trophies', JSON.stringify([...seen]));
    }

    async _checkTrophyUnlocks() {
        if (!this.db) return;
        try {
            const [reviews, counts] = await Promise.all([getReviews(this.db), getAllRideCounts(this.db)]);
            const trophies = this._computeTrophies(reviews, counts);
            const seen = this._getSeenTrophies();
            const newlyUnlocked = trophies.filter(t => t.unlocked && !seen.has(t.id));
            if (newlyUnlocked.length === 0) return;
            this._enqueueTrophyToasts(newlyUnlocked);
        } catch {}
    }

    // Zeigt neu freigeschaltete Trophäen nacheinander an – jede für ihre volle
    // Dauer, damit sich mehrere Toasts nicht gegenseitig überschreiben. Eine
    // Trophäe wird erst dann als "gesehen" gespeichert, wenn ihr Toast wirklich
    // erscheint; bricht der Ablauf vorher ab, taucht sie beim nächsten Mal erneut auf.
    _enqueueTrophyToasts(trophies) {
        this._trophyToastQueue = (this._trophyToastQueue || []).concat(trophies);
        if (this._trophyToastRunning) return;
        this._trophyToastRunning = true;
        // Erst nach dem Erfolgs-Overlay starten (das schließt und navigiert nach 2200 ms).
        const overlay = document.getElementById('review-success');
        const startDelay = overlay && !overlay.hidden ? 2500 : 300;
        setTimeout(() => this._drainTrophyToastQueue(), startDelay);
    }

    _drainTrophyToastQueue() {
        const next = (this._trophyToastQueue || []).shift();
        if (!next) { this._trophyToastRunning = false; return; }
        this._showTrophyToast(next);
        this._markTrophiesSeen([next.id]);
        // Nächster Toast erst nach der vollen Anzeigedauer des aktuellen.
        setTimeout(() => this._drainTrophyToastQueue(), 3900);
    }

    _showTrophyToast(trophy) {
        const tierGradients = {
            bronze:   'linear-gradient(135deg,#E0A26B,#A86A3C)',
            silver:   'linear-gradient(135deg,#E4E7EC,#6B7280)',
            gold:     'linear-gradient(135deg,#FFE082,#F2A53A)',
            platinum: 'linear-gradient(135deg,#E8DEFB,#5B21B6)'
        };
        const bg = tierGradients[trophy.tier] ?? 'linear-gradient(135deg,#333,#111)';
        const toast = document.createElement('div');
        toast.className = 'trophy-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.innerHTML = `
            <div class="trophy-toast__icon" style="background:${bg}">
                <span class="material-symbols-rounded">${trophy.icon}</span>
            </div>
            <div class="trophy-toast__body">
                <div class="trophy-toast__eyebrow">Trophäe freigeschaltet!</div>
                <div class="trophy-toast__name">${trophy.name}</div>
            </div>
            <div class="trophy-toast__confetti" aria-hidden="true"></div>`;
        document.body.appendChild(toast);
        spawnConfetti(toast.querySelector('.trophy-toast__confetti'));
        setTimeout(() => toast.remove(), 3600);
    }

    isFavorite(rideId) {
        return this.favorites.has(rideId);
    }

    toggleFavorite(rideId) {
        if (this.favorites.has(rideId)) {
            this.favorites.delete(rideId);
        } else {
            this.favorites.add(rideId);
        }
        _saveFavorites(this.favorites);
        this._updateStarButtons(rideId);
    }

    _updateStarButtons(rideId) {
        const isFav = this.isFavorite(rideId);
        document.querySelectorAll(`.ride-card-star[data-ride-id="${rideId}"]`).forEach(btn => {
            btn.classList.toggle('ride-card-star--active', isFav);
            btn.querySelector('.material-symbols-rounded').style.fontVariationSettings = isFav ? "'FILL' 1" : "'FILL' 0";
            btn.setAttribute('aria-label', isFav ? 'Aus Favoriten entfernen' : 'Als Favorit markieren');
        });
    }

    _showSaveSuccess(score, rideName) {
        const overlay = document.getElementById('review-success');
        const sub     = document.getElementById('review-success-sub');
        if (!overlay) return;
        if (sub) sub.textContent = `${score} Punkte · ${navigator.onLine ? 'wird synchronisiert' : 'offline gesichert'}`;

        const confettiEl = overlay.querySelector('.review-success__confetti');
        // Partikel der vorigen Bewertung entfernen, sonst wachsen sie unbegrenzt an.
        if (confettiEl) { confettiEl.replaceChildren(); spawnConfetti(confettiEl); }

        if (this.currentReviewRide) this._renderSaveSuccessFavStar(this.currentReviewRide.id);

        overlay.hidden = false;

        // Failsafe gegen den beim Live-Test beobachteten "schwarzen Bildschirm":
        // Das Overlay liegt bildschirmfüllend (position:fixed; inset:0) über der
        // App. Würde die Folgelogik werfen, bliebe es sichtbar hängen. Deshalb
        // wird das Ausblenden garantiert (try/finally) und zusätzlich hart per
        // eigenem Timer abgesichert, unabhängig vom übrigen Ablauf.
        const forceHide = setTimeout(() => { overlay.hidden = true; }, 4000);
        setTimeout(() => {
            try {
                this.closeReview();
                this.navigateTo('page-logbook');
                this.showToast(`"${rideName}" bewertet!`);
            } finally {
                overlay.hidden = true;
                clearTimeout(forceHide);
            }
        }, 2200);
    }

    _showValidationError(message, missingFields = []) {
        const box = document.getElementById('review-validation-error');
        const msg = document.getElementById('review-validation-message');
        if (box && msg) { msg.textContent = message; box.hidden = false; box.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
        missingFields.forEach(field => {
            this.reviewModal.querySelector(`.chip-group[data-field="${field}"]`)?.classList.add('chip-group--error');
        });
    }

    _hideValidationError() {
        const box = document.getElementById('review-validation-error');
        if (box) box.hidden = true;
        this.reviewModal.querySelectorAll('.chip-group--error').forEach(g => g.classList.remove('chip-group--error'));
    }

    async renderLogbook() {
        if (!this.db) {
            document.getElementById('logbook-history').innerHTML = '<p class="logbook-empty">Datenbank nicht verfügbar.</p>';
            return;
        }
        try {
            const [reviews, counts] = await Promise.all([getReviews(this.db), getAllRideCounts(this.db)]);
            this._renderLogbookStats(reviews, counts);

            const diarySection = document.getElementById('diary-section');
            const logSection = document.getElementById('log-section');

            if (this.activeLogbookTab === 'diary') {
                if (diarySection) diarySection.hidden = false;
                if (logSection) logSection.hidden = true;
                this._renderLogbookHistory(reviews, counts);
            } else {
                if (diarySection) diarySection.hidden = true;
                if (logSection) logSection.hidden = false;
                this._renderTodayHero(reviews, counts);
                this._renderLogbookCounters(reviews, counts);
            }
        } catch (e) {
            console.error('Logbook error:', e);
            document.getElementById('logbook-history').innerHTML = '<p class="logbook-empty" style="color:var(--cc-danger)">Logbuch konnte nicht geladen werden.</p>';
        }
    }

    _renderLogbookStats(reviews, counts) {
        const statsEl = document.getElementById('stats-overview');
        if (!statsEl) return;
        const totalRides   = counts.reduce((s, c) => s + (c.lifetimeCount ?? 0), 0);
        const uniqueRides  = counts.filter(c => (c.lifetimeCount ?? 0) > 0).length;
        const parks        = new Set(reviews.map(r => r.parkId)).size;

        statsEl.innerHTML = `
            <div class="stat-tile">
                <span class="stat-tile__value">${totalRides}</span>
                <span class="stat-tile__label">Fahrten gesamt</span>
            </div>
            <div class="stat-tile">
                <span class="stat-tile__value" style="color:var(--cc-accent-2)">${uniqueRides}</span>
                <span class="stat-tile__label">Bahnen</span>
            </div>
            <div class="stat-tile">
                <span class="stat-tile__value" style="color:var(--cc-accent-3)">${parks}</span>
                <span class="stat-tile__label">Parks</span>
            </div>`;
    }

    // Escapes HTML-significant characters for safe interpolation into an
    // innerHTML template. Ride data is normally trusted static JSON, but values
    // originating from an imported backup (rideId, score) are attacker-controllable.
    _escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    _renderTodayHero(reviews, counts) {
        const heroEl = document.getElementById('today-hero');
        if (!heroEl) return;
        const today = new Date().toISOString().slice(0, 10);
        const todayCounts = counts.filter(c => c.dayDate === today && c.dayCount > 0);
        if (todayCounts.length === 0) { heroEl.innerHTML = ''; return; }

        const todayTotal = todayCounts.reduce((s, c) => s + c.dayCount, 0);

        const parkCounts = {};
        todayCounts.forEach(c => {
            const ride = this.rides.find(r => r.id === c.rideId);
            if (ride) parkCounts[ride.park_id] = (parkCounts[ride.park_id] ?? 0) + c.dayCount;
        });
        const topPark = Object.entries(parkCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
        const parkCfg = PARK_CONFIG[topPark] ?? null;

        const dateStr = new Date().toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });

        const visibleCounts = todayCounts.slice(0, 4);
        const hiddenCount   = todayCounts.length - visibleCounts.length;
        const ridesHtml = visibleCounts.map(c => {
            const ride   = this.rides.find(r => r.id === c.rideId);
            // `name` falls back to the raw rideId, and `scores.display` can both
            // come from an imported backup, so escape before writing to innerHTML.
            const name   = this._escapeHtml(ride?.name ?? c.rideId);
            const rev    = reviews.filter(r => r.rideId === c.rideId).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
            const scoreText = rev ? `Score ${this._escapeHtml(rev.scores.display ?? '-')}` : '';
            return `
                <div class="today-hero__ride-item" data-ride-id="${this._escapeHtml(c.rideId)}">
                    <span class="today-hero__mood">🎢</span>
                    <div class="today-hero__ride-info">
                        <div class="today-hero__ride-name">${name}</div>
                        ${scoreText ? `<div class="today-hero__ride-score">${scoreText}</div>` : ''}
                    </div>
                    <div class="counter-inline">
                        <button class="counter-inline__btn counter-inline__btn--dec cc-press" aria-label="Weniger">
                            <span class="material-symbols-rounded" style="font-size:16px">remove</span>
                        </button>
                        <span class="counter-inline__val" id="today-cnt-${this._escapeHtml(c.rideId)}">${c.dayCount}</span>
                        <button class="counter-inline__btn counter-inline__btn--inc cc-press" aria-label="Mehr">
                            <span class="material-symbols-rounded" style="font-size:16px">add</span>
                        </button>
                    </div>
                </div>`;
        }).join('');

        heroEl.innerHTML = `
            <div class="today-hero" style="margin-bottom:var(--space-md)">
                <div class="today-hero__stripes" aria-hidden="true"></div>
                <div class="today-hero__top">
                    <div>
                        <div class="today-hero__date">Heute · ${dateStr}</div>
                        <div>
                            <span class="today-hero__count">${todayTotal}</span>
                            <span class="today-hero__count-sub">Fahrten</span>
                        </div>
                    </div>
                    ${parkCfg ? `<img src="${parkCfg.logo}" alt="${PARK_NAMES[topPark]}" class="today-hero__park-logo" width="44" height="44">` : ''}
                </div>
                <div class="today-hero__rides">${ridesHtml}</div>
                ${hiddenCount > 0 ? `<div style="text-align:center;font-size:11px;opacity:.75;margin-top:6px;font-weight:600">+ ${hiddenCount} weitere Bahn${hiddenCount > 1 ? 'en' : ''}</div>` : ''}
            </div>`;

        heroEl.querySelectorAll('.today-hero__ride-item').forEach(item => {
            const rideId = item.dataset.rideId;
            const [decBtn, incBtn] = item.querySelectorAll('.counter-inline__btn');
            const valEl = document.getElementById(`today-cnt-${rideId}`);

            decBtn.addEventListener('click', async () => {
                const updated = await adjustRideDayCount(this.db, rideId, -1);
                if (valEl) valEl.textContent = updated.dayCount;
            });
            incBtn.addEventListener('click', async () => {
                const updated = await adjustRideDayCount(this.db, rideId, +1);
                if (valEl) valEl.textContent = updated.dayCount;
            });
        });
    }

    _renderLogbookHistory(reviews, counts) {
        const histEl = document.getElementById('logbook-history');
        if (!histEl) return;

        if (reviews.length === 0) {
            histEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state__icon-wrap">
                        <span class="material-symbols-rounded">book</span>
                    </div>
                    <h3 class="empty-state__title">Dein Tagebuch ist noch leer</h3>
                    <p class="empty-state__text">Du hast bisher noch keine Achterbahnen bewertet oder Rezensionen verfasst. Lass uns deine erste Meinung festhalten!</p>
                    <button class="btn empty-state__btn cc-press" id="empty-logbook-cta">
                        <span class="material-symbols-rounded">attractions</span>
                        Rides entdecken
                    </button>
                </div>`;
            histEl.querySelector('#empty-logbook-cta')?.addEventListener('click', () => this.navigateTo('page-parks'));
            return;
        }

        const byDate = {};
        reviews.forEach(r => {
            const date = r.timestamp.slice(0, 10);
            (byDate[date] = byDate[date] ?? []).push(r);
        });

        const sortedDates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));

        const frag = document.createDocumentFragment();

        const head = document.createElement('div');
        head.innerHTML = `<div class="section-head"><h2 class="section-head__title"><span class="material-symbols-rounded">schedule</span>Verlauf</h2></div>`;
        frag.appendChild(head);

        const historyEl = document.createElement('div');
        historyEl.className = 'logbook-history';

        sortedDates.forEach(date => {
            const group = document.createElement('div');
            group.className = 'logbook-date-group';

            const dateLabel = new Date(date + 'T12:00:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
            group.innerHTML = `<span class="logbook-date-label">${dateLabel}</span>`;

            byDate[date].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).forEach(r => {
                const ride = this.rides.find(rd => rd.id === r.rideId);
                if (!ride) return;
                const card = this.createRideCardCompact(ride, { 
                    rating: r.scores?.display,
                    onClick: () => this.openRideInfoSheet(ride)
                });
                const rightEl = card.querySelector('.ride-card-compact__right');
                if (rightEl) {
                    // Web Share (or clipboard fallback): share this ride's score card.
                    if (navigator.share || navigator.clipboard) {
                        const shareBtn = document.createElement('button');
                        shareBtn.className = 'logbook-edit-btn';
                        shareBtn.setAttribute('aria-label', `${ride.name} Bewertung teilen`);
                        shareBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:18px">ios_share</span>';
                        shareBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            this._shareReview(ride, r);
                        });
                        rightEl.appendChild(shareBtn);
                    }

                    const editBtn = document.createElement('button');
                    editBtn.className = 'logbook-edit-btn';
                    editBtn.setAttribute('aria-label', `${ride.name} Bewertung bearbeiten`);
                    editBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:18px">edit</span>';
                    editBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.openReviewForEdit(ride, r);
                    });

                    const delBtn = document.createElement('button');
                    delBtn.className = 'logbook-edit-btn';
                    delBtn.setAttribute('aria-label', `${ride.name} Bewertung löschen`);
                    delBtn.style.color = 'var(--cc-danger)';
                    delBtn.innerHTML = '<span class="material-symbols-rounded" style="font-size:18px">delete</span>';
                    delBtn.addEventListener('click', async (e) => {
                        e.stopPropagation();
                        if (!confirm(`Bewertung für „${ride.name}" wirklich löschen?`)) return;
                        try {
                            const reviewDate = r.timestamp.slice(0, 10);
                            await deleteReviewFromDB(this.db, r.localId);
                            await decrementRideCount(this.db, r.rideId, reviewDate);
                            this.reviews = await getReviews(this.db);
                            await this.renderLogbook();
                            this.renderRideList();
                        } catch (err) {
                            console.error('Delete failed:', err);
                        }
                    });

                    rightEl.appendChild(editBtn);
                    rightEl.appendChild(delBtn);
                }
                group.appendChild(card);
            });

            const today = new Date().toISOString().slice(0, 10);
            if (date === today) {
                const countedIds = new Set(byDate[date].map(r => r.rideId));
                counts.filter(c => c.dayDate === today && !countedIds.has(c.rideId) && c.dayCount > 0).forEach(c => {
                    const ride = this.rides.find(rd => rd.id === c.rideId);
                    if (ride) group.appendChild(this.createRideCardCompact(ride, {
                        onClick: () => this.openRideInfoSheet(ride)
                    }));
                });
            }

            historyEl.appendChild(group);
        });

        frag.appendChild(historyEl);
        histEl.innerHTML = '';
        histEl.appendChild(frag);
    }

    _renderLogbookCounters(reviews, counts) {
        const countersEl = document.getElementById('logbook-counters');
        if (!countersEl) return;

        const activeCounts = counts.filter(c => (c.lifetimeCount ?? 0) > 0)
                                   .sort((a, b) => (b.lifetimeCount ?? 0) - (a.lifetimeCount ?? 0));

        if (activeCounts.length === 0) {
            countersEl.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state__icon-wrap">
                        <span class="material-symbols-rounded">edit_calendar</span>
                    </div>
                    <h3 class="empty-state__title">Keine Fahrten eingetragen</h3>
                    <p class="empty-state__text">Du hast bisher noch keine Fahrten geloggt. Entdecke Achterbahnen und füge direkt Fahrten hinzu!</p>
                    <button class="btn empty-state__btn cc-press" id="empty-counters-cta">
                        <span class="material-symbols-rounded">attractions</span>
                        Rides entdecken
                    </button>
                </div>`;
            countersEl.querySelector('#empty-counters-cta')?.addEventListener('click', () => this.navigateTo('page-parks'));
            return;
        }

        const today = new Date().toISOString().slice(0, 10);
        
        let html = `
            <div class="section-head" style="margin-top:var(--space-md)">
                <h2 class="section-head__title">
                    <span class="material-symbols-rounded">analytics</span>
                    Fahrtenzähler
                </h2>
            </div>
            <div class="logbook-counter-list">`;

        activeCounts.forEach(c => {
            const ride = this.rides.find(r => r.id === c.rideId);
            if (!ride) return;
            const isToday = c.dayDate === today;
            const currentDayCount = isToday ? c.dayCount : 0;

            const compactPhotoStyle = this._ridePhotoBg(ride);

            html += `
                <div class="logbook-counter-item" data-ride-id="${c.rideId}">
                    <div class="logbook-counter-item__photo" style="${compactPhotoStyle}">
                    </div>
                    <div class="logbook-counter-item__info">
                        <div class="logbook-counter-item__name">${this._escapeHtml(ride.name)}</div>
                        <div class="logbook-counter-item__meta">
                            <span>Heute: <b id="list-day-cnt-${c.rideId}" style="color:var(--cc-accent-2)">${currentDayCount}</b></span>
                            <span style="opacity: 0.4">•</span>
                            <span>Gesamt: <b id="list-life-cnt-${c.rideId}" style="color:var(--cc-accent)">${c.lifetimeCount}</b></span>
                        </div>
                    </div>
                    <div class="logbook-counter-item__right">
                        <div class="counter-inline">
                            <button class="counter-inline__btn counter-inline__btn--dec cc-press" aria-label="Weniger">
                                <span class="material-symbols-rounded" style="font-size:16px">remove</span>
                            </button>
                            <span class="counter-inline__val" id="list-val-cnt-${c.rideId}">${currentDayCount}</span>
                            <button class="counter-inline__btn counter-inline__btn--inc cc-press" aria-label="Mehr">
                                <span class="material-symbols-rounded" style="font-size:16px">add</span>
                            </button>
                        </div>
                    </div>
                </div>`;
        });
        html += `</div>`;
        countersEl.innerHTML = html;

        countersEl.querySelectorAll('.logbook-counter-item').forEach(item => {
            const rideId = item.dataset.rideId;
            const ride = this.rides.find(r => r.id === rideId);
            if (!ride) return;

            item.addEventListener('click', (e) => {
                if (e.target.closest('.counter-inline')) return;
                this.openRideInfoSheet(ride);
            });

            const [decBtn, incBtn] = item.querySelectorAll('.counter-inline__btn');
            const dayTextEl = document.getElementById(`list-day-cnt-${rideId}`);
            const lifeTextEl = document.getElementById(`list-life-cnt-${rideId}`);
            const valEl = document.getElementById(`list-val-cnt-${rideId}`);

            decBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const updated = await adjustRideDayCount(this.db, rideId, -1);
                const updatedIsToday = updated.dayDate === today;
                const updatedDayCount = updatedIsToday ? updated.dayCount : 0;
                
                if (dayTextEl) dayTextEl.textContent = updatedDayCount;
                if (lifeTextEl) lifeTextEl.textContent = updated.lifetimeCount;
                if (valEl) valEl.textContent = updatedDayCount;
                this.showToast(`Fahrt für „${ride.name}“ abgezogen.`);
                
                this._updateTodayHeroAndStatsDirectly();
            });

            incBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const updated = await adjustRideDayCount(this.db, rideId, 1);
                const updatedIsToday = updated.dayDate === today;
                const updatedDayCount = updatedIsToday ? updated.dayCount : 0;
                
                if (dayTextEl) dayTextEl.textContent = updatedDayCount;
                if (lifeTextEl) lifeTextEl.textContent = updated.lifetimeCount;
                if (valEl) valEl.textContent = updatedDayCount;
                this.showToast(`Fahrt für „${ride.name}“ hinzugefügt.`);
                
                this._updateTodayHeroAndStatsDirectly();
            });
        });
    }

    async _updateTodayHeroAndStatsDirectly() {
        if (!this.db) return;
        try {
            const [reviews, counts] = await Promise.all([getReviews(this.db), getAllRideCounts(this.db)]);
            this._renderLogbookStats(reviews, counts);
            this._renderTodayHero(reviews, counts);
        } catch (e) {
            console.error(e);
        }
    }

    async renderHallOfFame() {
        if (!this.db) return;
        try {
            const [reviews, counts] = await Promise.all([getReviews(this.db), getAllRideCounts(this.db)]);
            const trophies = this._computeTrophies(reviews, counts);
            this._renderTrophyShowcase(trophies);
            this._renderTrophyGrids(trophies);
        } catch (e) {
            console.error('HoF error:', e);
        }
    }

    _computeTrophies(reviews, counts) {
        const totalRides         = counts.reduce((s, c) => s + (c.lifetimeCount ?? 0), 0);
        const uniqueReviewedRides = new Set(reviews.map(r => r.rideId)).size;
        const parksFromReviews   = reviews.map(r => r.parkId).filter(Boolean);
        const parksFromCounts    = counts.map(c => this.rides.find(r => r.id === c.rideId)?.park_id).filter(Boolean);
        const parks = new Set([...parksFromReviews, ...parksFromCounts]).size;

        return [
            { id: 't1', tier: 'bronze',   icon: 'rocket_launch',     name: 'Erster Flug',     desc: 'Erste Bewertung abgegeben',         target: 1,   progress: Math.min(1, reviews.length),   unlocked: reviews.length >= 1 },
            { id: 't2', tier: 'bronze',   icon: 'local_fire_department', name: 'Aufgewärmt',   desc: '5 Bewertungen abgegeben',           target: 5,   progress: Math.min(5, reviews.length),   unlocked: reviews.length >= 5 },
            { id: 't3', tier: 'silver',   icon: 'explore',            name: 'Entdecker',       desc: '3 verschiedene Parks besucht',       target: 3,   progress: Math.min(3, parks),            unlocked: parks >= 3 },
            { id: 't4', tier: 'silver',   icon: 'speed',              name: 'Thrill-Seeker',   desc: '10 verschiedene Bahnen bewertet',    target: 10,  progress: Math.min(10, uniqueReviewedRides), unlocked: uniqueReviewedRides >= 10 },
            { id: 't5', tier: 'bronze',   icon: 'repeat',             name: 'Stammgast',       desc: '10 Fahrten geloggt',                target: 10,  progress: Math.min(10, totalRides),      unlocked: totalRides >= 10 },
            { id: 't6', tier: 'gold',     icon: 'military_tech',      name: 'Veteran',         desc: '25 Bewertungen abgegeben',          target: 25,  progress: Math.min(25, reviews.length),  unlocked: reviews.length >= 25 },
            { id: 't7', tier: 'gold',     icon: 'loop',               name: 'Coaster-Fan',     desc: '50 Fahrten geloggt',                target: 50,  progress: Math.min(50, totalRides),      unlocked: totalRides >= 50 },
            { id: 't8', tier: 'platinum', icon: 'workspace_premium',  name: 'Coaster-König',   desc: '100 Fahrten geloggt',               target: 100, progress: Math.min(100, totalRides),     unlocked: totalRides >= 100 }
        ];
    }

    _renderTrophyShowcase(trophies) {
        const el = document.getElementById('trophy-showcase');
        if (!el) return;

        const unlocked = trophies.filter(t => t.unlocked);
        const totalPct = Math.round(unlocked.length / trophies.length * 100);
        const recent   = unlocked.at(-1);

        const tierGradients = {
            bronze:   'linear-gradient(135deg,#E0A26B,#A86A3C)',
            silver:   'linear-gradient(135deg,#E4E7EC,#6B7280)',
            gold:     'linear-gradient(135deg,#FFE082,#F2A53A)',
            platinum: 'linear-gradient(135deg,#E8DEFB,#5B21B6)'
        };

                const discHtml = recent
            ? `<div class="trophy-showcase__disc" style="background:${tierGradients[recent.tier] ?? tierGradients.gold}">
                   <span class="material-symbols-rounded" style="font-size:40px;color:#fff">${recent.icon}</span>
               </div>
               <div class="trophy-showcase__text">
                   <div class="trophy-showcase__eyebrow">Zuletzt freigeschaltet</div>
                   <div class="trophy-showcase__name">${recent.name}</div>
                   <div class="trophy-showcase__desc">${recent.desc}</div>
               </div>`
            : `<div class="trophy-showcase__disc" style="background:var(--cc-surface-2)">
                   <span class="material-symbols-rounded" style="font-size:40px;color:var(--cc-muted)">lock</span>
               </div>
               <div class="trophy-showcase__text">
                   <div class="trophy-showcase__eyebrow">Noch keine Trophäen</div>
                   <div class="trophy-showcase__name">Leg los!</div>
                   <div class="trophy-showcase__desc">Bewerte deinen ersten Ride.</div>
               </div>`;

        el.innerHTML = `
            <div class="trophy-showcase" style="margin-bottom:var(--space-md)">
                <div class="trophy-showcase__radial" aria-hidden="true"></div>
                <div class="trophy-showcase__body">${discHtml}</div>
                <div class="trophy-showcase__progress-row">
                    <span class="trophy-showcase__progress-label">Gesamtfortschritt</span>
                    <span><b class="trophy-showcase__progress-value">${unlocked.length}</b>/${trophies.length} · ${totalPct}%</span>
                </div>
                <div class="trophy-showcase__bar-wrap">
                    <div class="trophy-showcase__bar" style="width:${totalPct}%"></div>
                </div>
            </div>`;
    }

    _renderTrophyGrids(trophies) {
        const inProgress = trophies.filter(t => !t.unlocked)
            .sort((a, b) => (b.progress / b.target) - (a.progress / a.target))
            .slice(0, 4);
        const progressEl = document.getElementById('trophy-in-progress');
        if (progressEl && inProgress.length > 0) {
            const head = `<div class="section-head"><h2 class="section-head__title"><span class="material-symbols-rounded">flag</span>Knapp dran</h2></div>`;
            const grid = `<div class="trophy-grid">${inProgress.map(t => this._trophyCardHTML(t)).join('')}</div>`;
            progressEl.innerHTML = head + grid;
        }

        const gridEl = document.getElementById('trophy-grid');
        if (gridEl) {
            const head = `<div class="section-head" style="margin-top:8px"><h2 class="section-head__title"><span class="material-symbols-rounded">grid_view</span>Alle Trophäen</h2></div>`;
            const grid = `<div class="trophy-grid">${trophies.map(t => this._trophyCardHTML(t)).join('')}</div>`;
            gridEl.innerHTML = head + grid;
        }

        requestAnimationFrame(() => {
            document.querySelectorAll('.trophy-card__progress-bar[data-target-pct]').forEach(bar => {
                bar.style.width = bar.dataset.targetPct + '%';
            });
        });
    }

    _trophyCardHTML(t) {
        const pct = Math.round(t.progress / t.target * 100);
        const tierClass = t.unlocked ? `trophy-card__disc--${t.tier}` : 'trophy-card__disc--locked';
        const icon = t.unlocked ? t.icon : 'lock';
        return `
            <div class="trophy-card${t.unlocked ? '' : ' trophy-card--locked'}">
                <span class="trophy-card__tier-pill trophy-card__tier-pill--${t.tier}">${t.tier}</span>
                <div class="trophy-card__disc ${tierClass}">
                    <span class="material-symbols-rounded">${icon}</span>
                </div>
                <div class="trophy-card__name">${t.name}</div>
                <div class="trophy-card__desc">${t.desc}</div>
                <div class="trophy-card__progress-bar-wrap"
                     role="progressbar" aria-valuenow="${t.progress}" aria-valuemin="0" aria-valuemax="${t.target}"
                     aria-label="${t.name}: ${t.progress} von ${t.target}">
                    <div class="trophy-card__progress-bar" style="width:0" data-target-pct="${pct}"></div>
                </div>
                <div class="trophy-card__progress-text">${t.progress}/${t.target}${t.unlocked ? ' ✓' : ''}</div>
            </div>`;
    }

    showToast(message) {
        document.querySelector('.toast')?.remove();
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position:fixed;bottom:calc(var(--nav-height)+16px);left:50%;
            transform:translateX(-50%);
            background:var(--cc-success);color:#fff;
            padding:12px 24px;border-radius:var(--radius-full);
            font-size:var(--font-size-sm);font-weight:600;
            z-index:2000;box-shadow:var(--cc-shadow-md);
            animation:toastIn 300ms ease,toastOut 300ms ease 2s forwards;`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2400);
    }
}

// --- Absturz-Erfassung -------------------------------------------------------
// Hintergrund: Beim Live-Test wurde die App zweimal "plötzlich schwarz" ohne
// Fehlermeldung; nach Neuladen war alles normal. Ohne globale Fehlerbehandlung
// verschwindet die Ursache spurlos. Wir schreiben deshalb einen kleinen,
// rollenden Absturz-Log nach localStorage (die letzten Einträge) und blenden
// bei einem echten, nicht abgefangenen Fehler eine sichtbare Neu-laden-Leiste
// ein – statt eines stummen schwarzen Bildschirms.
const CRASH_LOG_KEY = 'cc_crash_log';
const CRASH_LOG_MAX = 10;

function _recordCrash(entry) {
    try {
        const log = JSON.parse(localStorage.getItem(CRASH_LOG_KEY) || '[]');
        log.push({
            at:         new Date().toISOString(),
            page:       window.app?.currentPage ?? null,
            park:       window.app?.activePark ?? null,
            online:     navigator.onLine,
            visibility: document.visibilityState,
            ua:         navigator.userAgent,
            ...entry
        });
        // Nur die letzten Einträge behalten, damit localStorage nicht vollläuft.
        localStorage.setItem(CRASH_LOG_KEY, JSON.stringify(log.slice(-CRASH_LOG_MAX)));
    } catch { /* Logging ist best effort – niemals selbst zur Fehlerquelle werden. */ }
}

function _showCrashBanner() {
    if (document.getElementById('crash-banner')) return;
    const bar = document.createElement('div');
    bar.id = 'crash-banner';
    bar.setAttribute('role', 'alert');
    bar.style.cssText = `
        position:fixed;left:0;right:0;bottom:0;z-index:5000;
        display:flex;gap:12px;align-items:center;justify-content:center;
        padding:12px 16px;background:var(--cc-danger,#c0392b);color:#fff;
        font-size:14px;font-weight:600;box-shadow:0 -2px 12px rgba(0,0,0,.25);`;
    bar.innerHTML = `
        <span>Es ist ein Fehler aufgetreten.</span>
        <button type="button" style="background:#fff;color:#c0392b;border:0;border-radius:999px;padding:8px 18px;font-weight:700;cursor:pointer">Neu laden</button>`;
    bar.querySelector('button').addEventListener('click', () => location.reload());
    document.body.appendChild(bar);
}

window.addEventListener('error', (e) => {
    // Ressourcen-Fehler (fehlgeschlagenes Bild o. Ä.) tragen kein Error-Objekt –
    // die ignorieren wir, uns interessieren nur echte JS-Abstürze.
    if (!e.error) return;
    _recordCrash({
        type:   'error',
        message: e.message,
        source:  e.filename,
        pos:     `${e.lineno}:${e.colno}`,
        stack:   e.error?.stack ?? null
    });
    _showCrashBanner();
});

window.addEventListener('unhandledrejection', (e) => {
    const reason = e.reason;
    _recordCrash({
        type:    'unhandledrejection',
        message: reason?.message ?? String(reason),
        stack:   reason?.stack ?? null
    });
});

if (!document.getElementById('toast-keyframes')) {
    const s = document.createElement('style');
    s.id = 'toast-keyframes';
    s.textContent = `
        @keyframes toastIn  { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes toastOut { from{opacity:1} to{opacity:0;transform:translateX(-50%) translateY(20px)} }
    `;
    document.head.appendChild(s);
}

document.addEventListener('DOMContentLoaded', () => { window.app = new App(); });
