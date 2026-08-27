// Service Worker registration + update banner.
// Kept in its own file (not inline) so the Content-Security-Policy can use a
// strict `script-src 'self'` without needing 'unsafe-inline'.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((reg) => {
            const banner = document.getElementById('update-banner');
            const showBanner = () => { if (banner) banner.hidden = false; };

            // A new worker was found: reveal the hint once it has finished
            // installing, but only if the app was already controlled (i.e.
            // this is a genuine update, not the very first install).
            reg.addEventListener('updatefound', () => {
                const worker = reg.installing;
                if (!worker) return;
                worker.addEventListener('statechange', () => {
                    if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                        showBanner();
                    }
                });
            });

            document.getElementById('update-reload')?.addEventListener('click', () => location.reload());
            document.getElementById('update-dismiss')?.addEventListener('click', () => {
                if (banner) banner.hidden = true;
            });
        }).catch((err) => {
            console.warn('Service Worker Registrierung fehlgeschlagen:', err);
        });
    });
}
