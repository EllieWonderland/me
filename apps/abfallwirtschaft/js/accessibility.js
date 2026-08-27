/**
 * Accessibility.js - Accessibility tools
 * Provides a modal to toggle high contrast mode and large font size.
 * Persists user preferences using LocalStorage.
 * Dependencies: None
 */

document.addEventListener("DOMContentLoaded", function () {
    try {
        // 1. Inject accessibility modal HTML
        const accModalHTML = `
        <div id="acc-modal" class="acc-modal" role="dialog" aria-modal="true" aria-labelledby="acc-modal-title">
            <div class="acc-content">
                <h2 id="acc-modal-title">Darstellung anpassen</h2>
                <p class="mb-05">Passen Sie die Darstellung der Webseite an.</p>
                <button id="btn-contrast" class="acc-btn"><i class="fas fa-adjust"></i> Hoher Kontrast</button>
                <button id="btn-fontsize" class="acc-btn"><i class="fas fa-text-height"></i> Schrift vergrößern</button>
                <button id="btn-acc-close" class="acc-close">Schließen</button>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', accModalHTML);

        // 2. Setup triggers
        // Eigener Auslöser im Footer: "Barrierefreiheit" fuehrt zur Erklaerung,
        // "Darstellung anpassen" oeffnet diese Werkzeuge. Frueher hat dieses
        // Skript den Erklaerungs-Link gekapert, der dadurch ins Leere fuehrte.
        const accTrigger = document.getElementById('acc-trigger');

        const accModal = document.getElementById('acc-modal');
        const btnContrast = document.getElementById('btn-contrast');
        const btnFontsize = document.getElementById('btn-fontsize');
        const btnClose = document.getElementById('btn-acc-close');

        let letzterFokus = null;

        const modalOeffnen = () => {
            if (!accModal) return;
            letzterFokus = document.activeElement;
            accModal.classList.add('active');
            if (btnContrast) btnContrast.focus();
        };

        const modalSchliessen = () => {
            if (!accModal) return;
            accModal.classList.remove('active');
            if (letzterFokus && typeof letzterFokus.focus === 'function') letzterFokus.focus();
        };

        // Open modal
        if (accTrigger) {
            accTrigger.addEventListener('click', function (e) {
                e.preventDefault();
                modalOeffnen();
            });
        }

        // Close modal: Schaltflaeche, Escape und Klick auf den Hintergrund
        if (btnClose) btnClose.addEventListener('click', modalSchliessen);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && accModal && accModal.classList.contains('active')) {
                modalSchliessen();
            }
        });

        if (accModal) {
            accModal.addEventListener('click', function (e) {
                if (e.target === accModal) modalSchliessen();
            });
        }

        // 3. Feature: High contrast mode (Persistent)
        if (btnContrast) {
            // Load saved state
            if (localStorage.getItem('high-contrast') === 'true') {
                document.body.classList.add('high-contrast');
                btnContrast.classList.add('active');
            }
            btnContrast.addEventListener('click', function () {
                const isHigh = document.body.classList.toggle('high-contrast');
                this.classList.toggle('active');
                localStorage.setItem('high-contrast', isHigh);
            });
        }

        // 4. Feature: Large font size (Persistent)
        if (btnFontsize) {
            // Load saved state
            if (localStorage.getItem('large-font') === 'true') {
                document.documentElement.classList.add('large-font');
                btnFontsize.classList.add('active');
            }
            btnFontsize.addEventListener('click', function () {
                const isLarge = document.documentElement.classList.toggle('large-font');
                this.classList.toggle('active');
                localStorage.setItem('large-font', isLarge);
            });
        }
    } catch (e) {
        console.error("Error in Accessibility:", e);
    }
});
