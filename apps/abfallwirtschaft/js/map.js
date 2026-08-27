/**
 * Standortkarte (karte.html)
 *
 * Zeigt Wertstoffhoefe, Sammelstellen, Container und Repair-Cafes aus
 * data/standorte.xml auf einer Leaflet-Karte, mit Filter nach Art und
 * einer Schaltflaeche fuer den eigenen Standort.
 *
 * Die XML-Daten sind je Art unterschiedlich aufgebaut - gewachsen aus
 * verschiedenen Quellen. Darum liest jede Art ihre eigene kleine
 * Funktion, statt alles durch eine gemeinsame zu zwingen.
 *
 * Abhaengigkeiten: utils.js (fetchXML), Leaflet (L)
 */

// Mitte des Landkreises Oldenburg
const MAP_CENTER = [52.97, 8.40];
const MAP_ZOOM = 10;

// Farbe, Symbol und Beschriftung je Standortart
const LOCATION_CATEGORIES = {
    wertstoffhof: { color: '#4CAF50', icon: 'fa-recycle',     label: 'Wertstoffhof' },
    gruenabfall:  { color: '#558B2F', icon: 'fa-leaf',        label: 'Grünabfall-Sammelstelle' },
    kompostwerk:  { color: '#795548', icon: 'fa-industry',    label: 'Kompostwerk' },
    altglas:      { color: '#42A5F5', icon: 'fa-wine-bottle', label: 'Glascontainer' },
    kleider:      { color: '#7B1FA2', icon: 'fa-tshirt',      label: 'Kleidercontainer' },
    repaircafe:   { color: '#FFC107', icon: 'fa-tools',       label: 'Repair-Café' }
};

const LOCATE_BUTTON_LABEL = '<i class="fas fa-location-crosshairs"></i> <span>Mein Standort</span>';

document.addEventListener('DOMContentLoaded', function () {
    // Ohne Kartenbereich oder ohne Leaflet gibt es nichts zu tun
    if (!document.getElementById('map') || typeof L === 'undefined') return;

    const map = L.map('map').setView(MAP_CENTER, MAP_ZOOM);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    const markers = [];

    fetchXML('data/standorte.xml')
        .then(xmlDoc => {
            addSimpleLocations(map, markers, xmlDoc, 'wertstoffhoefe', 'wertstoffhof');
            addSimpleLocations(map, markers, xmlDoc, 'gruenabfall', 'gruenabfall');
            addSimpleLocations(map, markers, xmlDoc, 'kompostwerk', 'kompostwerk');
            addSimpleLocations(map, markers, xmlDoc, 'repaircafe', 'repaircafe');
            addGlassContainers(map, markers, xmlDoc);
            addClothingContainers(map, markers, xmlDoc);
        })
        .catch(error => console.error('Standorte konnten nicht geladen werden:', error));

    setupCategoryFilter(map, markers);
    setupGeolocation(map);
});

/* ------------------------------------------------------------------
   Standorte einlesen
   ------------------------------------------------------------------ */

/**
 * Liest die Arten mit einfachem Aufbau: <gruppe><location><lat>/<lng>.
 *
 * @param {L.Map} map
 * @param {Array} markers     Sammlung aller Markierungen, fuer den Filter
 * @param {Document} xmlDoc
 * @param {string} groupTag   Name des umschliessenden XML-Elements
 * @param {string} category   Schluessel in LOCATION_CATEGORIES
 */
function addSimpleLocations(map, markers, xmlDoc, groupTag, category) {
    const group = xmlDoc.getElementsByTagName(groupTag)[0];
    if (!group) return;

    Array.from(group.getElementsByTagName('location')).forEach(location => {
        const lat = parseFloat(location.querySelector('lat')?.textContent);
        const lng = parseFloat(location.querySelector('lng')?.textContent);
        if (!lat || !lng) return;

        const name = cleanText(location.querySelector('name')?.textContent || 'Standort');
        const address = cleanText(location.querySelector('address')?.textContent || location.textContent);

        // Wertstoffhoefe fuehren ihre Zeiten als Liste einzelner Tage
        const hours = category === 'wertstoffhof'
            ? readOpeningDays(location)
            : location.querySelector('openingHours')?.textContent || '';

        addMarker(map, markers, [lat, lng], category, name, address, hours);
    });
}

/** Glascontainer stehen als <loc lat lng> innerhalb eines Ortsteils. */
function addGlassContainers(map, markers, xmlDoc) {
    const group = xmlDoc.getElementsByTagName('altglas')[0];
    if (!group) return;

    const info = group.querySelector('info')?.textContent || '';

    Array.from(group.getElementsByTagName('loc')).forEach(spot => {
        const lat = parseFloat(spot.getAttribute('lat'));
        const lng = parseFloat(spot.getAttribute('lng'));
        if (!lat || !lng) return;

        const area = spot.parentNode.querySelector('name')?.textContent || '';
        addMarker(map, markers, [lat, lng], 'altglas', spot.textContent, area, info);
    });
}

/** Kleidercontainer stehen als <spot lat lng>, der Ort steht im <title>. */
function addClothingContainers(map, markers, xmlDoc) {
    const group = xmlDoc.getElementsByTagName('kleider')[0];
    if (!group) return;

    Array.from(group.getElementsByTagName('spot')).forEach(spot => {
        const lat = parseFloat(spot.getAttribute('lat'));
        const lng = parseFloat(spot.getAttribute('lng'));
        if (!lat || !lng) return;

        const title = spot.parentNode.querySelector('title')?.textContent || '';
        addMarker(map, markers, [lat, lng], 'kleider', spot.textContent, title, '');
    });
}

/** Fasst die Oeffnungstage eines Wertstoffhofs zu einem Textblock zusammen. */
function readOpeningDays(location) {
    return Array.from(location.getElementsByTagName('day'))
        .map(day => `${day.querySelector('label')?.textContent} ${day.querySelector('time')?.textContent}`)
        .join('<br>');
}

/** Entfernt Reste doppelter Kodierung aus den gewachsenen XML-Daten. */
function cleanText(text) {
    return (text || '').replace(/&lt;br&gt;/g, ', ').replace(/&amp;/g, '&').trim();
}

/* ------------------------------------------------------------------
   Markierungen
   ------------------------------------------------------------------ */

/** Setzt eine Markierung auf die Karte und merkt sie fuer den Filter vor. */
function addMarker(map, markers, position, category, name, address, hours) {
    const marker = L.marker(position, { icon: createMarkerIcon(category) })
        .bindPopup(createPopupContent(name, category, address, hours));

    marker.category = category;
    marker.addTo(map);
    markers.push(marker);
}

/** Baut das farbige Symbol einer Markierung. */
function createMarkerIcon(category) {
    const config = LOCATION_CATEGORIES[category] || LOCATION_CATEGORIES.wertstoffhof;

    return L.divIcon({
        className: 'custom-map-marker',
        html: `<div class="custom-marker ${category}" style="background:${config.color}"><i class="fas ${config.icon}"></i></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
}

/** Baut den Inhalt des Sprechblasenfensters einer Markierung. */
function createPopupContent(name, category, address, hours) {
    const config = LOCATION_CATEGORIES[category] || {};
    let html = `<div class="map-popup">
        <span class="map-popup-category ${category}">${config.label || category}</span>
        <h3>${name}</h3>`;

    if (address) {
        html += `<p class="popup-address"><i class="fas fa-map-marker-alt"></i> ${address}</p>`;
    }

    if (hours) {
        html += `<div class="popup-hours"><strong><i class="fas fa-clock"></i> Öffnungszeiten:</strong> ${hours}</div>`;
    }

    return html + '</div>';
}

/* ------------------------------------------------------------------
   Bedienung
   ------------------------------------------------------------------ */

/** Die Schaltflaechen ueber der Karte blenden einzelne Arten aus. */
function setupCategoryFilter(map, markers) {
    const filterButtons = document.querySelectorAll('.map-filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(other => other.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;
            markers.forEach(marker => {
                if (category === 'all' || marker.category === category) marker.addTo(map);
                else map.removeLayer(marker);
            });
        });
    });
}

/**
 * Zeigt den eigenen Standort. Der Browser fragt dabei um Erlaubnis; wird
 * sie verweigert, bleibt die Karte wie sie ist und sagt Bescheid.
 */
function setupGeolocation(map) {
    const locateButton = document.getElementById('locate-me-btn');
    if (!locateButton) return;

    let userMarker = null;

    const resetButton = () => {
        locateButton.disabled = false;
        locateButton.innerHTML = LOCATE_BUTTON_LABEL;
    };

    locateButton.addEventListener('click', function () {
        if (!navigator.geolocation) {
            alert('Standortbestimmung wird von Ihrem Browser nicht unterstützt.');
            return;
        }

        locateButton.disabled = true;
        locateButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Suche...</span>';

        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                // Nur eine eigene Markierung, sonst sammeln sie sich an
                if (userMarker) map.removeLayer(userMarker);

                userMarker = L.marker([latitude, longitude], {
                    icon: L.divIcon({
                        className: 'user-location-icon',
                        html: '<div class="user-location-marker"></div>',
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    })
                })
                    .bindPopup('<div class="map-popup"><h3><i class="fas fa-location-crosshairs"></i> Ihr Standort</h3></div>')
                    .addTo(map);

                map.flyTo([latitude, longitude], 13);
                resetButton();
            },
            () => {
                alert('Standort konnte nicht ermittelt werden.');
                resetButton();
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    });
}
