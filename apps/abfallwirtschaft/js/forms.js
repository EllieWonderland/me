/**
 * Forms.js
 * Formulare des Studienentwurfs: Kontaktformular (kontakt.html) und die
 * dreizehn Online-Antraege (onlinedienste.html).
 *
 * Der Entwurf ist oeffentlich erreichbar, aber keine Seite des Landkreises.
 * Ein echter Versand waere darum falsch: Antraege gehoeren zur zustaendigen
 * Behoerde und nicht in ein privates Postfach. Statt zu senden, zeigen die
 * Formulare deshalb genau das, was abgeschickt wuerde - so bleibt die Strecke
 * bis zur Bestaetigung vollstaendig bedienbar und nachvollziehbar.
 *
 * Dependencies: keine
 */

const FELD_LABELS = {
    'form-name':    'Name',
    'form-email':   'E-Mail',
    'form-subject': 'Thema',
    'form-message': 'Nachricht'
};

/** Beschriftung eines Feldes: eigenes <label>, sonst name/placeholder. */
function feldBezeichnung(feld) {
    if (FELD_LABELS[feld.id]) return FELD_LABELS[feld.id];
    const ueber = feld.closest('label');
    if (ueber) return ueber.textContent.replace(feld.value, '').trim();
    if (feld.id) {
        const label = document.querySelector(`label[for="${feld.id}"]`);
        if (label) return label.textContent.trim().replace(/\*$/, '').trim();
    }
    const vorher = feld.previousElementSibling;
    if (vorher && vorher.tagName === 'LABEL') return vorher.textContent.trim().replace(/\*$/, '').trim();
    return feld.name || feld.placeholder || 'Angabe';
}

/** Alle ausgefuellten Felder eines Formulars als [Bezeichnung, Wert]. */
function ausgefuellteFelder(form) {
    const zeilen = [];
    form.querySelectorAll('input, select, textarea').forEach(feld => {
        if (feld.type === 'submit' || feld.type === 'button' || feld.disabled) return;
        let wert;
        if (feld.type === 'checkbox' || feld.type === 'radio') {
            if (!feld.checked) return;
            wert = feld.value && feld.value !== 'on' ? feld.value : 'ja';
        } else if (feld.tagName === 'SELECT') {
            wert = feld.selectedIndex >= 0 ? feld.options[feld.selectedIndex].text : '';
            if (!feld.value) return;
        } else {
            wert = feld.value;
        }
        if (!String(wert).trim()) return;
        zeilen.push([feldBezeichnung(feld), String(wert).trim()]);
    });
    return zeilen;
}

/** Bestaetigung unter dem Formular einblenden. */
function zeigeBestaetigung(form, titel) {
    const zeilen = ausgefuellteFelder(form);

    let box = form.parentElement.querySelector('.form-demo-confirm');
    if (!box) {
        box = document.createElement('div');
        box.className = 'form-demo-confirm';
        box.setAttribute('role', 'status');
        box.setAttribute('aria-live', 'polite');
        form.parentElement.insertBefore(box, form.nextSibling);
    }

    const liste = zeilen.length
        ? '<dl class="form-demo-confirm__data">' + zeilen.map(([k, v]) =>
            `<dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd>`).join('') + '</dl>'
        : '<p>Es wurden keine Angaben gemacht.</p>';

    box.innerHTML = `
        <h4 class="form-demo-confirm__title">
            <i class="fas fa-circle-check" aria-hidden="true"></i>
            ${escapeHTML(titel)}
        </h4>
        <p class="form-demo-confirm__note">
            Studienentwurf: Es wurde nichts versendet. So sähen die Daten aus,
            die im Echtbetrieb an das Amt für Bodenschutz und Abfallwirtschaft gingen.
        </p>
        ${liste}
        <button type="button" class="form-demo-confirm__close">Schließen</button>
    `;
    box.querySelector('.form-demo-confirm__close').addEventListener('click', () => box.remove());
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    form.reset();
}

function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Kontaktformular (kontakt.html)
const mailForm = document.getElementById('mail-form');
if (mailForm) {
    mailForm.addEventListener('submit', function (e) {
        e.preventDefault();
        zeigeBestaetigung(this, 'Ihre Nachricht ist vollständig');
    });
}

// Online-Antraege (onlinedienste.html)
document.querySelectorAll('.online-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const dienst = this.getAttribute('data-service') || 'Antrag';
        zeigeBestaetigung(this, `${dienst}: Antrag vollständig`);
    });
});
