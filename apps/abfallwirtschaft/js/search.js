/**
 * Seitensuche (index.html)
 *
 * Baut beim Laden ein Verzeichnis aus allen XML-Quellen und einigen fest
 * eingetragenen Seiten auf und durchsucht es waehrend der Eingabe.
 *
 * Die Suche verzeiht Tippfehler: findet der genaue Vergleich nichts, wird
 * ueber die Levenshtein-Distanz verglichen. Der Laengenvergleich davor
 * verhindert, dass ein kurzer Suchbegriff auf lange Titel passt.
 *
 * Abhaengigkeiten: utils.js (fetchXML, calculateLevenshtein)
 */

// Ab dieser Laenge wird gesucht, und so viele Treffer werden gezeigt
const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 8;

// Symbol je Trefferart, alles Uebrige bekommt den Pfeil
const RESULT_ICONS = {
    'Abfall-ABC': 'fa-recycle',
    'Service':    'fa-calendar-alt',
    'Standort':   'fa-map-marker-alt',
    'Tool':       'fa-calculator'
};

// Seiten ohne XML-Quelle, die trotzdem auffindbar sein sollen
const STATIC_PAGES = [
    { title: 'Abfallkalender',            url: 'kalender.html',                       type: 'Service' },
    { title: 'Sperrmüll anmelden',        url: 'onlinedienste.html#sperrmuell',       type: 'Dienstleistung' },
    { title: 'Wertstoffhöfe Öffnungszeiten', url: 'standorte.html#wertstoffhof',      type: 'Standort' },
    { title: 'Abfall-ABC',                url: 'infos.html#abc',                      type: 'Info' },
    { title: 'Gebührenrechner',           url: 'rechner.html',                        type: 'Tool' },
    { title: 'Glascontainer Standorte',   url: 'standorte.html#altglascontainer',     type: 'Standort' },
    { title: 'Grünabfall Sammelstellen',  url: 'standorte.html#sammelstellen',        type: 'Standort' },
    { title: 'Tonne bestellen',           url: 'onlinedienste.html#behaelter',        type: 'Dienstleistung' },
    { title: 'Repair-Cafés',              url: 'infos.html#repair',                   type: 'Info' },
    { title: 'Verschenkmarkt',            url: 'infos.html#verschenkmarkt',           type: 'Info' },
    { title: 'Rechtliches & Impressum',   url: 'legal.html',                          type: 'Info' },
    { title: 'Kontakt',                   url: 'kontakt.html',                        type: 'Info' },
    { title: 'Kompostwerk',               url: 'standorte.html#kompostwerk',          type: 'Standort' }
];

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('global-search-results');

    // Das Suchfeld gibt es nur auf der Startseite
    if (!searchInput || !resultsContainer) return;

    let searchIndex = [...STATIC_PAGES];

    buildSearchIndex().then(entries => {
        searchIndex = [...STATIC_PAGES, ...entries];
    });

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (query.length < MIN_QUERY_LENGTH) {
            resultsContainer.classList.remove('active');
            return;
        }

        const results = findMatches(searchIndex, query);
        results.forEach(entry => resultsContainer.appendChild(createResultLink(entry)));
        resultsContainer.classList.toggle('active', results.length > 0);
    });

    // Ein Klick daneben schliesst die Trefferliste
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !resultsContainer.contains(event.target)) {
            resultsContainer.classList.remove('active');
        }
    });
});

/* ------------------------------------------------------------------
   Verzeichnis aufbauen
   ------------------------------------------------------------------ */

/**
 * Liest alle XML-Quellen ein. Faellt eine aus, fehlen nur ihre Eintraege -
 * die Suche selbst bleibt benutzbar.
 *
 * @returns {Promise<Array>} Eintraege mit title, url und type
 */
async function buildSearchIndex() {
    const sources = await Promise.all([
        readSource('data/infos.xml', indexInfos),
        readSource('data/onlinedienste.xml', indexOnlineServices),
        readSource('data/news.xml', indexNews)
    ]);

    return sources.flat();
}

async function readSource(url, indexer) {
    try {
        return indexer(await fetchXML(url));
    } catch (error) {
        console.warn(`Suche: ${url} konnte nicht gelesen werden.`, error);
        return [];
    }
}

/** Abfall-ABC, Merkblaetter, Bilanzen und Sortierhinweise aus infos.xml. */
function indexInfos(xmlDoc) {
    const entries = [];

    // Abfall-ABC: der gesuchte Begriff wird spaeter in infos.html geoeffnet
    xmlDoc.querySelectorAll('abc item').forEach(item => {
        const name = item.querySelector('name')?.textContent;
        if (!name) return;
        entries.push({
            title: `${name} (Abfall-ABC)`,
            url: 'infos.html#abc',
            type: 'Abfall-ABC',
            meta: item.querySelector('disposal')?.textContent || ''
        });
    });

    xmlDoc.querySelectorAll('merkblaetter item').forEach(item => {
        const text = item.querySelector('text')?.textContent;
        if (!text) return;
        entries.push({ title: text, url: item.querySelector('link')?.textContent || '', type: 'Merkblatt' });
    });

    xmlDoc.querySelectorAll('bilanzen box downloads link').forEach(link => {
        const text = link.querySelector('text')?.textContent;
        const url = link.querySelector('url')?.textContent;
        if (text && url) entries.push({ title: text, url, type: 'Download' });
    });

    xmlDoc.querySelectorAll('sortierung box').forEach(box => {
        const title = box.querySelector('title')?.textContent;
        if (!title) return;
        entries.push({ title: `${title} – Sortierungshinweise`, url: 'infos.html#sortierung', type: 'Info' });
    });

    return entries;
}

/** Die dreizehn Online-Antraege aus onlinedienste.xml. */
function indexOnlineServices(xmlDoc) {
    const sections = {
        behaelter: 'onlinedienste.html#behaelter',
        abholung: 'onlinedienste.html#abholung',
        sonstiges: 'onlinedienste.html#sonstiges'
    };

    const entries = [];

    Object.entries(sections).forEach(([tagName, fallbackUrl]) => {
        const section = xmlDoc.querySelector(tagName);
        if (!section) return;

        Array.from(section.getElementsByTagName('item')).forEach(item => {
            const text = item.querySelector('text')?.textContent;
            if (!text) return;

            const id = item.querySelector('id')?.textContent;
            entries.push({
                title: text,
                url: id ? `onlinedienste.html#${id}` : fallbackUrl,
                type: 'Onlinedienst'
            });
        });
    });

    return entries;
}

/** Die Meldungen aus news.xml. */
function indexNews(xmlDoc) {
    return Array.from(xmlDoc.getElementsByTagName('news'))
        .map(item => ({
            title: item.querySelector('title')?.textContent || '',
            url: item.querySelector('link')?.textContent || 'news.html',
            type: 'Aktuelles'
        }))
        .filter(entry => entry.title);
}

/* ------------------------------------------------------------------
   Suchen und anzeigen
   ------------------------------------------------------------------ */

/** Sucht passende Eintraege, Titelanfaenge zuerst. */
function findMatches(searchIndex, query) {
    // Laengere Suchbegriffe duerfen mehr Tippfehler enthalten
    const threshold = query.length > 4 ? 2 : 1;

    return searchIndex
        .filter(entry => {
            const title = entry.title.toLowerCase();
            if (title.includes(query)) return true;

            // Unscharf nur bei aehnlich langen Titeln, sonst passt alles auf alles
            if (Math.abs(title.length - query.length) >= 5) return false;
            return calculateLevenshtein(title, query) <= threshold;
        })
        .sort((a, b) => {
            const aStarts = a.title.toLowerCase().startsWith(query);
            const bStarts = b.title.toLowerCase().startsWith(query);
            return Number(bStarts) - Number(aStarts);
        })
        .slice(0, MAX_RESULTS);
}

/** Baut einen Treffer als anklickbaren Eintrag der Liste. */
function createResultLink(entry) {
    const link = document.createElement('a');
    link.href = entry.url;
    link.className = 'search-result-item';
    link.innerHTML = `
        <span class="search-result-title">${entry.title}</span>
        <div class="search-result-meta">
            <span class="search-result-type">${entry.type}</span>
            <i class="fas ${RESULT_ICONS[entry.type] || 'fa-chevron-right'}"></i>
        </div>
    `;

    // Beim Abfall-ABC den Begriff merken, damit infos.html ihn aufschlaegt
    if (entry.type === 'Abfall-ABC') {
        link.addEventListener('click', () => {
            sessionStorage.setItem('abcSearchTerm', entry.title.replace(' (Abfall-ABC)', ''));
        });
    }

    return link;
}
