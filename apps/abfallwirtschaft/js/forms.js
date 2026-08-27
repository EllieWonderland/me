/**
 * Formulare
 *
 * Kontaktformular (kontakt.html) und die dreizehn Online-Antraege
 * (onlinedienste.html).
 *
 * Der Entwurf ist oeffentlich erreichbar, aber keine Seite des Landkreises.
 * Ein echter Versand waere darum falsch: Antraege gehoeren zur zustaendigen
 * Behoerde und nicht in ein privates Postfach. Statt zu senden, zeigen die
 * Formulare deshalb genau das, was abgeschickt wuerde - so bleibt die Strecke
 * bis zur Bestaetigung vollstaendig bedienbar und nachvollziehbar.
 *
 * Abhaengigkeiten: keine
 */

// Felder des Kontaktformulars, deren Beschriftung nicht aus dem HTML
// abzulesen ist
const FIELD_LABELS = {
    'form-name':    'Name',
    'form-email':   'E-Mail',
    'form-subject': 'Thema',
    'form-message': 'Nachricht'
};

/**
 * Sucht die Beschriftung eines Feldes: erst die feste Zuordnung, dann ein
 * umschliessendes <label>, ein <label for="...">, ein direkt davor
 * stehendes <label> - und zuletzt Name oder Platzhalter des Feldes.
 */
function findFieldLabel(field) {
    if (FIELD_LABELS[field.id]) return FIELD_LABELS[field.id];

    const enclosingLabel = field.closest('label');
    if (enclosingLabel) return enclosingLabel.textContent.replace(field.value, '').trim();

    if (field.id) {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label) return stripRequiredMark(label.textContent);
    }

    const previous = field.previousElementSibling;
    if (previous && previous.tagName === 'LABEL') return stripRequiredMark(previous.textContent);

    return field.name || field.placeholder || 'Angabe';
}

/** Entfernt den Stern, mit dem Pflichtfelder gekennzeichnet sind. */
function stripRequiredMark(text) {
    return text.trim().replace(/\*$/, '').trim();
}

/**
 * Sammelt alle ausgefuellten Felder eines Formulars.
 *
 * @param {HTMLFormElement} form
 * @returns {Array<[string, string]>} Paare aus Beschriftung und Wert
 */
function collectFilledFields(form) {
    const rows = [];

    form.querySelectorAll('input, select, textarea').forEach(field => {
        if (field.type === 'submit' || field.type === 'button' || field.disabled) return;

        let value;
        if (field.type === 'checkbox' || field.type === 'radio') {
            if (!field.checked) return;
            // Ohne eigenen Wert liefert der Browser "on" - das sagt niemandem etwas
            value = field.value && field.value !== 'on' ? field.value : 'ja';
        } else if (field.tagName === 'SELECT') {
            if (!field.value) return;
            value = field.options[field.selectedIndex].text;
        } else {
            value = field.value;
        }

        if (!String(value).trim()) return;
        rows.push([findFieldLabel(field), String(value).trim()]);
    });

    return rows;
}

/** Zeigt die Bestaetigung mit allen Angaben unter dem Formular. */
function showConfirmation(form, title) {
    const rows = collectFilledFields(form);

    // Je Formular gibt es nur eine Bestaetigung, sie wird wiederverwendet
    let box = form.parentElement.querySelector('.form-demo-confirm');
    if (!box) {
        box = document.createElement('div');
        box.className = 'form-demo-confirm';
        box.setAttribute('role', 'status');
        box.setAttribute('aria-live', 'polite');
        form.parentElement.insertBefore(box, form.nextSibling);
    }

    const list = rows.length
        ? '<dl class="form-demo-confirm__data">' + rows.map(([label, value]) =>
            `<dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd>`).join('') + '</dl>'
        : '<p>Es wurden keine Angaben gemacht.</p>';

    box.innerHTML = `
        <h4 class="form-demo-confirm__title">
            <i class="fas fa-circle-check" aria-hidden="true"></i>
            ${escapeHTML(title)}
        </h4>
        <p class="form-demo-confirm__note">
            Studienentwurf: Es wurde nichts versendet. So sähen die Daten aus,
            die im Echtbetrieb an das Amt für Bodenschutz und Abfallwirtschaft gingen.
        </p>
        ${list}
        <button type="button" class="form-demo-confirm__close">Schließen</button>
    `;

    box.querySelector('.form-demo-confirm__close').addEventListener('click', () => box.remove());
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    form.reset();
}

/** Gibt Text so zurueck, dass er als HTML sicher eingesetzt werden kann. */
function escapeHTML(text) {
    const container = document.createElement('div');
    container.textContent = text;
    return container.innerHTML;
}

// Kontaktformular (kontakt.html)
const mailForm = document.getElementById('mail-form');
if (mailForm) {
    mailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        showConfirmation(this, 'Ihre Nachricht ist vollständig');
    });
}

// Online-Antraege (onlinedienste.html)
document.querySelectorAll('.online-form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const service = this.dataset.service || 'Antrag';
        showConfirmation(this, `${service}: Antrag vollständig`);
    });
});
