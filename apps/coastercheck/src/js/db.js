/**
 * CoasterCheck IndexedDB Service
 *
 * Schema v2:
 *   rides       (keyPath 'id'): cached park/ride data for offline use
 *   reviews     (keyPath 'localId', autoIncrement): user ratings
 *   sync_queue  (keyPath 'queueId', autoIncrement): reviews pending POST /reviews
 *   ride_counts (keyPath 'rideId'): per-ride day counter + lifetime counter (added v2)
 */

const DB_NAME = 'CoasterCheckDB';
const DB_VERSION = 2;

export function openDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION);

        req.onupgradeneeded = (e) => {
            const db = e.target.result;

            if (!db.objectStoreNames.contains('rides')) {
                db.createObjectStore('rides', { keyPath: 'id' });
            }

            if (!db.objectStoreNames.contains('reviews')) {
                const store = db.createObjectStore('reviews', {
                    keyPath: 'localId',
                    autoIncrement: true
                });
                store.createIndex('by_ride', 'rideId');
                store.createIndex('by_time', 'timestamp');
            }

            if (!db.objectStoreNames.contains('sync_queue')) {
                db.createObjectStore('sync_queue', {
                    keyPath: 'queueId',
                    autoIncrement: true
                });
            }

            // v2: per-ride daily / lifetime counter
            if (!db.objectStoreNames.contains('ride_counts')) {
                db.createObjectStore('ride_counts', { keyPath: 'rideId' });
            }
        };

        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

export function cacheRides(db, rides) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('rides', 'readwrite');
        const store = tx.objectStore('rides');
        for (const ride of rides) store.put(ride);
        tx.oncomplete = resolve;
        tx.onerror = (e) => reject(e.target.error);
    });
}

export function getCachedRides(db) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('rides', 'readonly');
        const req = tx.objectStore('rides').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

export function saveReview(db, review) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(['reviews', 'sync_queue'], 'readwrite');
        let resultId;

        const addReq = tx.objectStore('reviews').add(review);
        addReq.onsuccess = () => {
            resultId = addReq.result;
        };

        tx.objectStore('sync_queue').add({
            review,
            queuedAt: new Date().toISOString()
        });

        tx.oncomplete = () => resolve(resultId);
        tx.onerror = (e) => reject(e.target.error);
    });
}

export function getReviews(db) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('reviews', 'readonly');
        const req = tx.objectStore('reviews').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

// Number of reviews still waiting to be synced to the server (drives the app badge).
export function getSyncQueueCount(db) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('sync_queue', 'readonly');
        const req = tx.objectStore('sync_queue').count();
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

// All queued reviews still awaiting upload. Used to drain the queue over HTTP
// on browsers without Background Sync (Firefox, iOS Safari).
export function getSyncQueue(db) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('sync_queue', 'readonly');
        const req = tx.objectStore('sync_queue').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

export function deleteSyncQueueItem(db, queueId) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('sync_queue', 'readwrite');
        tx.objectStore('sync_queue').delete(queueId);
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

export function deleteReview(db, localId) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('reviews', 'readwrite');
        tx.objectStore('reviews').delete(localId);
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

export function updateReview(db, localId, data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('reviews', 'readwrite');
        tx.objectStore('reviews').put({ ...data, localId });
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

// Ride Counts (Daily / Lifetime)
const _today = () => new Date().toISOString().slice(0, 10);

export function getRideCount(db, rideId) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('ride_counts', 'readonly');
        const req = tx.objectStore('ride_counts').get(rideId);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = (e) => reject(e.target.error);
    });
}

export function getAllRideCounts(db) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('ride_counts', 'readonly');
        const req = tx.objectStore('ride_counts').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

function _setRideCount(db, record) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('ride_counts', 'readwrite');
        tx.objectStore('ride_counts').put(record);
        tx.oncomplete = resolve;
        tx.onerror = (e) => reject(e.target.error);
    });
}

/**
 * Adjusts the day counter by delta (+1 / -1).
 * + increments both dayCount and lifetimeCount.
 * - decrements only dayCount (lifetime never decreases).
 * Resets dayCount to 0 automatically on a new day.
 * Returns the updated record.
 */
export function adjustRideDayCount(db, rideId, delta) {
    const today = _today();
    // Read and write in one transaction so rapid +/- taps cannot race.
    return new Promise((resolve, reject) => {
        const tx    = db.transaction('ride_counts', 'readwrite');
        const store = tx.objectStore('ride_counts');
        const getReq = store.get(rideId);
        let updated;
        getReq.onsuccess = () => {
            const base = getReq.result || { rideId, lifetimeCount: 0, dayCount: 0, dayDate: today };
            const prevDay     = base.dayDate === today ? base.dayCount : 0;
            const newDay      = Math.max(0, prevDay + delta);
            const actualDelta = newDay - prevDay;
            updated = {
                rideId,
                lifetimeCount: base.lifetimeCount + Math.max(0, actualDelta),
                dayCount: newDay,
                dayDate: today
            };
            store.put(updated);
        };
        getReq.onerror = (e) => reject(e.target.error);
        tx.oncomplete = () => resolve(updated);
        tx.onerror    = (e) => reject(e.target.error);
    });
}

/**
 * Decrements lifetimeCount by 1 and, if the review was from today, dayCount by 1.
 * Called when a review entry is deleted to keep counts in sync.
 */
export async function decrementRideCount(db, rideId, reviewDate) {
    const today = _today();
    const base  = await getRideCount(db, rideId);
    if (!base) return;

    const currentDay = base.dayDate === today ? base.dayCount : 0;
    await _setRideCount(db, {
        ...base,
        lifetimeCount: Math.max(0, base.lifetimeCount - 1),
        dayCount:      reviewDate === today ? Math.max(0, currentDay - 1) : currentDay,
    });
}

// LocalStorage Migration
/**
 * One-time migration: moves existing localStorage reviews into IndexedDB
 * and removes the localStorage key afterwards.
 */
export function migrateFromLocalStorage(db) {
    const raw = localStorage.getItem('coastercheck_reviews');
    if (!raw) return Promise.resolve();

    let items;
    try {
        items = JSON.parse(raw);
        if (!Array.isArray(items) || items.length === 0) return Promise.resolve();
    } catch {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const tx = db.transaction('reviews', 'readwrite');
        const store = tx.objectStore('reviews');
        for (const item of items) {
            // eslint-disable-next-line no-unused-vars
            const { localId, ...data } = item;
            store.add(data);
        }
        tx.oncomplete = () => {
            localStorage.removeItem('coastercheck_reviews');
            resolve();
        };
        tx.onerror = (e) => reject(e.target.error);
    });
}

// Settings Helper Functions
export function clearAllData(db) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(['reviews', 'ride_counts', 'sync_queue'], 'readwrite');
        tx.objectStore('reviews').clear();
        tx.objectStore('ride_counts').clear();
        tx.objectStore('sync_queue').clear();
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

export function mergeImportedReviews(db, reviews) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(reviews) || reviews.length === 0) { resolve(); return; }
        const tx = db.transaction('reviews', 'readwrite');
        const store = tx.objectStore('reviews');
        
        const req = store.getAll();
        req.onsuccess = () => {
            const existing = req.result;
            const existingKeys = new Set(existing.map(r => `${r.timestamp}_${r.rideId}`));
            
            for (const r of reviews) {
                const key = `${r.timestamp}_${r.rideId}`;
                if (!existingKeys.has(key)) {
                    // eslint-disable-next-line no-unused-vars
                    const { localId, ...cleanReview } = r;
                    store.add(cleanReview);
                }
            }
        };
        
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

export function mergeImportedCounts(db, counts) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(counts) || counts.length === 0) { resolve(); return; }
        const tx = db.transaction('ride_counts', 'readwrite');
        const store = tx.objectStore('ride_counts');
        for (const c of counts) {
            // Normalise each imported record to a bounded shape (don't trust the backup).
            if (!c || typeof c.rideId !== 'string' || !c.rideId.trim()) continue;
            const dayDate = typeof c.dayDate === 'string' ? c.dayDate.slice(0, 10) : '';
            store.put({
                rideId:        c.rideId.trim().slice(0, 120),
                lifetimeCount: Math.max(0, Math.floor(Number(c.lifetimeCount) || 0)),
                dayCount:      Math.max(0, Math.floor(Number(c.dayCount) || 0)),
                dayDate,
            });
        }
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}
