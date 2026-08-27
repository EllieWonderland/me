/**
 * Darstellung anpassen
 *
 * Ein kleines Fenster mit zwei Schaltern: hoher Kontrast und groessere
 * Schrift. Beide Einstellungen bleiben ueber LocalStorage erhalten, denn
 * wer sie braucht, braucht sie auf jeder Seite und bei jedem Besuch.
 *
 * Der Auslöser sitzt in der Fusszeile ("Darstellung anpassen") und ist
 * bewusst getrennt vom Link "Barrierefreiheit", der zur Erklaerung fuehrt.
 *
 * Abhaengigkeiten: keine
 */

const CONTRAST_STORAGE_KEY = 'high-contrast';
const FONT_SIZE_STORAGE_KEY = 'large-font';

document.addEventListener('DOMContentLoaded', function () {
    insertAccessibilityDialog();

    const dialog = document.getElementById('acc-modal');
    const contrastButton = document.getElementById('btn-contrast');
    const fontSizeButton = document.getElementById('btn-fontsize');

    setupDialogHandling(dialog);

    // Der Kontrast haengt am <body>, die Schriftgroesse an <html>: Letztere
    // wird ueber die Wurzel-Schriftgroesse skaliert, damit alle rem-Werte folgen.
    setupPreferenceToggle(contrastButton, CONTRAST_STORAGE_KEY, document.body, 'high-contrast');
    setupPreferenceToggle(fontSizeButton, FONT_SIZE_STORAGE_KEY, document.documentElement, 'large-font');
});

/** Haengt das Dialogfenster ans Ende der Seite. */
function insertAccessibilityDialog() {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="acc-modal" class="acc-modal" role="dialog" aria-modal="true" aria-labelledby="acc-modal-title">
            <div class="acc-content">
                <h2 id="acc-modal-title">Darstellung anpassen</h2>
                <p class="mb-05">Passen Sie die Darstellung der Webseite an.</p>
                <button id="btn-contrast" class="acc-btn"><i class="fas fa-adjust"></i> Hoher Kontrast</button>
                <button id="btn-fontsize" class="acc-btn"><i class="fas fa-text-height"></i> Schrift vergrößern</button>
                <button id="btn-acc-close" class="acc-close">Schließen</button>
            </div>
        </div>
    `);
}

/**
 * Oeffnen und Schliessen des Dialogs. Der Fokus wandert beim Oeffnen in
 * den Dialog und beim Schliessen dorthin zurueck, wo er herkam - sonst
 * steht er fuer Tastaturnutzer im Nichts.
 */
function setupDialogHandling(dialog) {
    if (!dialog) return;

    const trigger = document.getElementById('acc-trigger');
    const closeButton = document.getElementById('btn-acc-close');
    const contrastButton = document.getElementById('btn-contrast');
    let previousFocus = null;

    const openDialog = () => {
        previousFocus = document.activeElement;
        dialog.classList.add('active');
        if (contrastButton) contrastButton.focus();
    };

    const closeDialog = () => {
        dialog.classList.remove('active');
        if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    };

    if (trigger) {
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            openDialog();
        });
    }

    if (closeButton) closeButton.addEventListener('click', closeDialog);

    // Escape schliesst, ein Klick auf den abgedunkelten Hintergrund ebenfalls
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && dialog.classList.contains('active')) closeDialog();
    });

    dialog.addEventListener('click', function (event) {
        if (event.target === dialog) closeDialog();
    });
}

/**
 * Verbindet eine Schaltflaeche mit einer gespeicherten Einstellung.
 *
 * @param {HTMLElement|null} button   Die Schaltflaeche im Dialog
 * @param {string} storageKey         Schluessel im LocalStorage
 * @param {HTMLElement} target        Element, das die Klasse traegt
 * @param {string} className          Die zu schaltende Klasse
 */
function setupPreferenceToggle(button, storageKey, target, className) {
    if (!button) return;

    // Gespeicherte Wahl beim Laden wiederherstellen
    if (localStorage.getItem(storageKey) === 'true') {
        target.classList.add(className);
        button.classList.add('active');
    }

    button.addEventListener('click', function () {
        const isActive = target.classList.toggle(className);
        button.classList.toggle('active', isActive);
        localStorage.setItem(storageKey, String(isActive));
    });
}
