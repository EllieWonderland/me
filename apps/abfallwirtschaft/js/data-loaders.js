/**
 * Inhalte aus den XML-Daten
 *
 * Die Seiten kommen weitgehend leer aus dem HTML und werden hier gefuellt:
 * Meldungen, Dienstleistungen, Standorte, Abfall-ABC, Merkblaetter,
 * Bilanzen, Onlinedienste, Repair-Cafes und Sortierhinweise.
 *
 * Jeder Lader prueft zuerst, ob sein Zielelement ueberhaupt existiert -
 * dieselbe Datei laeuft auf allen Seiten, aber jede braucht nur einen Teil.
 *
 * Abhaengigkeiten: utils.js (fetchXML, createNewsCard, calculateLevenshtein)
 */

// So viele Meldungen zeigt die Startseite an
const NEWS_ON_HOMEPAGE = 3;

// Ab dieser Laenge sucht das Abfall-ABC unscharf
const ABC_FUZZY_MIN_LENGTH = 3;

document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    loadServices();
    loadLocations();
    loadInfos();
    loadOnlineServices();
    loadRepairCafes();
    loadSortingHints();
});

/**
 * XML-Text, in dem Markup doppelt kodiert steckt, wieder lesbar machen.
 * Die Daten sind aus verschiedenen Quellen zusammengetragen, darum stehen
 * dort &lt;br&gt; statt Zeilenumbruechen.
 */
function decodeMarkup(text) {
    return (text || '')
        .replace(/&lt;br&gt;/g, '<br>')
        .replace(/&lt;em&gt;/g, '<em>')
        .replace(/&lt;\/em&gt;/g, '</em>')
        .replace(/&amp;/g, '&');
}

/** Kurzform fuer den Textinhalt eines Kindelements. */
function textOf(element, selector) {
    return element.querySelector(selector)?.textContent || '';
}

/* ------------------------------------------------------------------
   Meldungen und Dienstleistungen
   ------------------------------------------------------------------ */

/** Startseite zeigt die neuesten Meldungen, news.html alle. */
function loadNews() {
    const homepageGrid = document.getElementById('news-grid');
    const archiveGrid = document.getElementById('news-archive-grid');
    if (!homepageGrid && !archiveGrid) return;

    fetchXML('data/news.xml')
        .then(xmlDoc => {
            const items = Array.from(xmlDoc.getElementsByTagName('news'));
            const target = homepageGrid || archiveGrid;
            const shown = homepageGrid ? items.slice(0, NEWS_ON_HOMEPAGE) : items;

            target.innerHTML = '';
            shown.forEach(item => target.appendChild(createNewsCard(item)));
        })
        .catch(error => console.error('Meldungen konnten nicht geladen werden:', error));
}

/** Die Kacheln der Dienstleistungen auf der Startseite. */
function loadServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    fetchXML('data/services.xml')
        .then(xmlDoc => {
            Array.from(xmlDoc.getElementsByTagName('service')).forEach(service => {
                const article = document.createElement('article');
                article.className = 'service-card';
                article.innerHTML = `
                    <div class="card-icon"><i class="${textOf(service, 'icon')}"></i></div>
                    <h3>${textOf(service, 'title')}</h3>
                    <p>${textOf(service, 'text')}</p>
                    <a href="${textOf(service, 'link')}" class="card-link">
                        ${textOf(service, 'linkText')} <i class="fas fa-arrow-right"></i>
                    </a>
                `;
                grid.appendChild(article);
            });
        })
        .catch(error => console.error('Dienstleistungen konnten nicht geladen werden:', error));
}

/* ------------------------------------------------------------------
   Standorte (standorte.html)
   ------------------------------------------------------------------ */

function loadLocations() {
    const recyclingGrid = document.getElementById('locations-grid');
    const greenWasteGrid = document.getElementById('gruen-grid');
    const compostGrid = document.getElementById('kompost-grid');
    const glassList = document.getElementById('altglas-list');
    const clothingGrid = document.getElementById('kleider-grid');

    if (!recyclingGrid && !greenWasteGrid && !compostGrid && !glassList && !clothingGrid) return;

    fetchXML('data/standorte.xml')
        .then(xmlDoc => {
            if (recyclingGrid) renderRecyclingCenters(recyclingGrid, xmlDoc);
            if (greenWasteGrid) renderGreenWaste(greenWasteGrid, xmlDoc);
            if (compostGrid) renderCompostPlant(compostGrid, xmlDoc);
            if (glassList) renderGlassContainers(glassList, xmlDoc);
            if (clothingGrid) renderClothingContainers(clothingGrid, xmlDoc);
        })
        .catch(error => console.error('Standorte konnten nicht geladen werden:', error));
}

/** Wertstoffhoefe mit Anschrift und Oeffnungszeitentabelle. */
function renderRecyclingCenters(grid, xmlDoc) {
    getLocations(xmlDoc, 'wertstoffhoefe').forEach(location => {
        const hoursRows = Array.from(location.getElementsByTagName('day'))
            .map(day => `<tr><td>${textOf(day, 'label')}</td><td>${decodeMarkup(textOf(day, 'time'))}</td></tr>`)
            .join('');

        const note = decodeMarkup(textOf(location, 'note'));

        const article = document.createElement('article');
        article.className = 'location-card';
        article.innerHTML = `
            <h3><i class="fas fa-map-pin"></i> ${decodeMarkup(textOf(location, 'name'))}</h3>
            <p><strong>${decodeMarkup(textOf(location, 'address'))}</strong></p>
            <div class="opening-hours">
                <strong>${textOf(location, 'openingHoursLabel')}</strong>
                <table>${hoursRows}</table>
            </div>
            ${note ? `<p class="location-note">${note}</p>` : ''}
        `;
        grid.appendChild(article);
    });
}

function renderGreenWaste(grid, xmlDoc) {
    getLocations(xmlDoc, 'gruenabfall').forEach(location => {
        const article = document.createElement('article');
        article.className = 'location-card';
        article.innerHTML = `
            <h3>${textOf(location, 'name')}</h3>
            <p>${textOf(location, 'address')}</p>
            <div class="opening-hours">${textOf(location, 'openingHours')}</div>
        `;
        grid.appendChild(article);
    });
}

function renderCompostPlant(grid, xmlDoc) {
    getLocations(xmlDoc, 'kompostwerk').forEach(location => {
        const article = document.createElement('article');
        article.className = 'location-card';
        article.innerHTML = `
            <h3>${textOf(location, 'name')}</h3>
            <p>${textOf(location, 'description')}</p>
        `;
        grid.appendChild(article);
    });
}

/** Glascontainer: je Ortsteil ein aufklappbarer Abschnitt. */
function renderGlassContainers(list, xmlDoc) {
    const section = xmlDoc.getElementsByTagName('altglas')[0];
    if (!section) return;

    const info = section.querySelector('info');
    if (info) {
        const paragraph = document.createElement('p');
        paragraph.textContent = info.textContent;
        list.appendChild(paragraph);
    }

    Array.from(section.getElementsByTagName('area')).forEach(area => {
        const details = document.createElement('details');
        details.innerHTML = `<summary>${textOf(area, 'name')}</summary>`;

        const spots = document.createElement('ul');
        spots.className = 'location-list';
        Array.from(area.getElementsByTagName('loc')).forEach(spot => {
            const entry = document.createElement('li');
            entry.textContent = spot.textContent;
            spots.appendChild(entry);
        });

        details.appendChild(spots);
        list.appendChild(details);
    });
}

function renderClothingContainers(grid, xmlDoc) {
    const section = xmlDoc.getElementsByTagName('kleider')[0];
    if (!section) return;

    const info = section.querySelector('info');
    if (info) {
        const paragraph = document.createElement('p');
        paragraph.className = 'kleider-info';
        paragraph.textContent = info.textContent;
        grid.appendChild(paragraph);
    }

    Array.from(section.getElementsByTagName('location')).forEach(location => {
        const article = document.createElement('article');
        article.className = 'location-card';
        article.innerHTML = `
            <h3>${textOf(location, 'title')}</h3>
            <p>${textOf(location, 'text')}</p>
        `;
        grid.appendChild(article);
    });
}

/** Alle <location> einer Standortgruppe. */
function getLocations(xmlDoc, groupTag) {
    const group = xmlDoc.getElementsByTagName(groupTag)[0];
    return group ? Array.from(group.getElementsByTagName('location')) : [];
}

/* ------------------------------------------------------------------
   Infos (infos.html)
   ------------------------------------------------------------------ */

function loadInfos() {
    const abcContainer = document.getElementById('abc-list-container');
    const leafletList = document.getElementById('merkblaetter-list');
    const reportsGrid = document.getElementById('bilanzen-grid');

    if (!abcContainer && !leafletList && !reportsGrid) return;

    fetchXML('data/infos.xml')
        .then(xmlDoc => {
            if (leafletList) renderLeaflets(leafletList, xmlDoc);
            if (abcContainer) setupWasteAbc(abcContainer, xmlDoc);
            if (reportsGrid) renderReports(reportsGrid, xmlDoc);
        })
        .catch(error => console.error('Infos konnten nicht geladen werden:', error));
}

function renderLeaflets(list, xmlDoc) {
    xmlDoc.querySelectorAll('merkblaetter item').forEach(item => {
        const entry = document.createElement('li');
        entry.innerHTML = `<a href="${textOf(item, 'link')}" target="_blank">
            <i class="${textOf(item, 'icon')}"></i> ${textOf(item, 'text')}</a>`;
        list.appendChild(entry);
    });
}

/**
 * Das Abfall-ABC: alphabetische Liste mit Suchfeld und A-Z-Filter.
 * Die Suche verzeiht Tippfehler, sobald der Begriff lang genug ist.
 */
function setupWasteAbc(container, xmlDoc) {
    const entries = Array.from(xmlDoc.querySelectorAll('abc item')).map(item => ({
        name: textOf(item, 'name'),
        disposal: textOf(item, 'disposal'),
        type: textOf(item, 'type')
    }));

    const render = (items) => {
        container.innerHTML = '';

        if (items.length === 0) {
            container.innerHTML = '<p>Keine Einträge.</p>';
            return;
        }

        [...items].sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
            const details = document.createElement('details');
            details.className = 'abc-item';
            details.innerHTML = `
                <summary>${item.name}</summary>
                <div class="abc-content">
                    <p>Entsorgung: <strong>${item.disposal}</strong></p>
                    <span class="disposal-tag tonne-${item.type}">${item.disposal}</span>
                </div>
            `;
            container.appendChild(details);
        });
    };

    render(entries);
    openEntryFromGlobalSearch(container);

    const searchField = document.querySelector('.abc-search');
    if (searchField) {
        searchField.addEventListener('input', function () {
            render(filterAbcEntries(entries, this.value.toLowerCase()));
        });
    }

    setupAzFilter(entries, render, searchField);
}

/** Sucht im Abfall-ABC, bei laengeren Begriffen auch unscharf. */
function filterAbcEntries(entries, term) {
    if (term.length < ABC_FUZZY_MIN_LENGTH) {
        return entries.filter(entry => entry.name.toLowerCase().includes(term));
    }

    const threshold = term.length > 5 ? 2 : 1;

    return entries
        .filter(entry => {
            const name = entry.name.toLowerCase();
            if (name.includes(term)) return true;

            // Unscharf nur bei aehnlich langen Namen, sonst passt alles auf alles
            if (Math.abs(name.length - term.length) > 3) return false;
            return calculateLevenshtein(name, term) <= threshold;
        })
        .sort((a, b) => {
            const aStarts = a.name.toLowerCase().startsWith(term);
            const bStarts = b.name.toLowerCase().startsWith(term);
            return Number(bStarts) - Number(aStarts);
        });
}

/** Die Buchstabenleiste; "#" zeigt wieder alle Eintraege. */
function setupAzFilter(entries, render, searchField) {
    const filter = document.getElementById('az-filter');
    if (!filter) return;

    filter.innerHTML = '';

    '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = letter;
        button.className = 'az-btn';

        button.addEventListener('click', function () {
            filter.querySelectorAll('.az-btn').forEach(other => other.classList.remove('active'));
            this.classList.add('active');
            if (searchField) searchField.value = '';

            render(letter === '#'
                ? entries
                : entries.filter(entry => entry.name.toUpperCase().startsWith(letter)));
        });

        filter.appendChild(button);
    });
}

/**
 * Wer ueber die Seitensuche auf einen ABC-Begriff geklickt hat, soll ihn
 * hier aufgeschlagen und kurz hervorgehoben vorfinden.
 */
function openEntryFromGlobalSearch(container) {
    const searchTerm = sessionStorage.getItem('abcSearchTerm');
    if (!searchTerm) return;

    sessionStorage.removeItem('abcSearchTerm');

    const match = [...container.querySelectorAll('.abc-item')].find(item =>
        item.querySelector('summary')?.textContent.toLowerCase() === searchTerm.toLowerCase());
    if (!match) return;

    match.setAttribute('open', '');
    match.classList.add('abc-item-highlight');

    // Erst rollen, wenn der Eintrag aufgeklappt ist, dann die Hervorhebung abklingen lassen
    setTimeout(() => match.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    setTimeout(() => match.classList.remove('abc-item-highlight'), 3000);
}

/** Abfallwirtschaftskonzept und Bilanzen mit ihren Downloads. */
function renderReports(grid, xmlDoc) {
    const section = xmlDoc.querySelector('bilanzen');
    if (!section) return;

    grid.innerHTML = '';

    Array.from(section.getElementsByTagName('box')).forEach(box => {
        const downloads = Array.from(box.querySelectorAll('downloads link'))
            .map(link => `<li><a href="${textOf(link, 'url')}" target="_blank">
                <i class="${textOf(link, 'icon')}"></i> ${textOf(link, 'text')}</a></li>`)
            .join('');

        const article = document.createElement('div');
        article.className = 'info-box-white';
        article.innerHTML = `
            <h3>${textOf(box, 'title')}</h3>
            <p>${textOf(box, 'text')}</p>
            <ul class="download-list">${downloads}</ul>
        `;
        grid.appendChild(article);
    });
}

/** Die Sortierhinweise je Tonne (infos.html). */
function loadSortingHints() {
    const grid = document.getElementById('sortierung-grid');
    if (!grid) return;

    fetchXML('data/infos.xml')
        .then(xmlDoc => {
            const boxes = Array.from(xmlDoc.querySelectorAll('sortierung box'));
            if (boxes.length === 0) {
                grid.innerHTML = '<p>Keine Sortierungshinweise gefunden.</p>';
                return;
            }

            grid.innerHTML = boxes.map(box => {
                const items = Array.from(box.querySelectorAll('items > item'))
                    .map(item => `<li>${item.textContent}</li>`)
                    .join('');

                return `
                    <div class="tonne-box tonne-${textOf(box, 'type')}">
                        <h3><i class="${textOf(box, 'icon')}"></i> ${textOf(box, 'title')}</h3>
                        <ul>${items}</ul>
                    </div>
                `;
            }).join('');
        })
        .catch(error => {
            console.error('Sortierungshinweise konnten nicht geladen werden:', error);
            grid.innerHTML = '<p>Die Sortierungshinweise konnten nicht geladen werden.</p>';
        });
}

/* ------------------------------------------------------------------
   Onlinedienste und Repair-Cafes
   ------------------------------------------------------------------ */

/** Die drei Listen der Onlinedienste; die Listen-Id nennt das XML-Element. */
function loadOnlineServices() {
    const listIds = ['behaelter-list', 'abholung-list', 'sonstiges-list'];
    if (!listIds.some(id => document.getElementById(id))) return;

    fetchXML('data/onlinedienste.xml')
        .then(xmlDoc => {
            listIds.forEach(id => {
                const list = document.getElementById(id);
                const section = xmlDoc.getElementsByTagName(id.replace('-list', ''))[0];
                if (!list || !section) return;

                list.innerHTML = '';

                Array.from(section.getElementsByTagName('item')).forEach(item => {
                    const entry = document.createElement('li');
                    entry.className = 'service-item';
                    entry.innerHTML = `<a href="${textOf(item, 'link')}">
                        <i class="${textOf(item, 'icon')}"></i> ${textOf(item, 'text')}</a>`;
                    list.appendChild(entry);
                });
            });
        })
        .catch(error => console.error('Onlinedienste konnten nicht geladen werden:', error));
}

function loadRepairCafes() {
    const list = document.getElementById('repair-cafes-list');
    if (!list) return;

    fetchXML('data/standorte.xml')
        .then(xmlDoc => {
            const locations = getLocations(xmlDoc, 'repaircafe');

            if (locations.length === 0) {
                list.innerHTML = '<li>Keine Repair-Cafés gefunden.</li>';
                return;
            }

            list.innerHTML = locations.map(location => `
                <li class="repair-item">
                    <h3><i class="fas fa-map-marker-alt"></i> ${textOf(location, 'name').replace('Repair-Café ', '')}</h3>
                    <p><strong>Ort:</strong> ${textOf(location, 'address')}</p>
                    <p><strong>Wann:</strong> ${textOf(location, 'openingHours')}</p>
                </li>
            `).join('');
        })
        .catch(error => {
            console.error('Repair-Cafés konnten nicht geladen werden:', error);
            list.innerHTML = '<li>Die Daten konnten nicht geladen werden.</li>';
        });
}
