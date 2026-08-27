/**
 * Map.js
 * Visualizes various locations (recycling centers, glass containers, etc.) on a map.
 * Uses 'standorte.xml' as data source.
 * Dependencies: utils.js (fetchXML), Leaflet library (L)
 */

document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById('map');
    // Ensure map container and Leaflet library exist
    if (!mapContainer || typeof L === 'undefined') return;

    try {
        // Initialize map centered on Landkreis Oldenburg
        const map = L.map('map').setView([52.97, 8.40], 10);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // State for managing markers
        let allMarkers = [];
        let userMarker = null;
        let activeCategory = 'all';

        // Configuration for different location types (Colors, Icons)
        const categoryConfig = {
            wertstoffhof: { color: '#4CAF50', icon: 'fa-recycle', label: 'Wertstoffhof' },
            gruenabfall: { color: '#558B2F', icon: 'fa-leaf', label: 'Grünabfall-Sammelstelle' },
            kompostwerk: { color: '#795548', icon: 'fa-industry', label: 'Kompostwerk' },
            altglas: { color: '#42A5F5', icon: 'fa-wine-bottle', label: 'Glascontainer' },
            kleider: { color: '#7B1FA2', icon: 'fa-tshirt', label: 'Kleidercontainer' },
            repaircafe: { color: '#FFC107', icon: 'fa-tools', label: 'Repair-Café' }
        };

        // Create custom Leaflet DivIcon with FontAwesome
        function createMarkerIcon(category) {
            const config = categoryConfig[category] || categoryConfig.wertstoffhof;
            return L.divIcon({
                className: 'custom-map-marker',
                html: `<div class="custom-marker ${category}" style="background:${config.color}"><i class="fas ${config.icon}"></i></div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });
        }

        // Generate info popup HTML
        function createPopupContent(name, category, address, hours) {
            const config = categoryConfig[category] || {};
            let html = `<div class="map-popup">
                <span class="map-popup-category ${category}">${config.label || category}</span>
                <h3>${name}</h3>`;

            if (address) {
                html += `<p class="popup-address"><i class="fas fa-map-marker-alt"></i> ${address}</p>`;
            }

            if (hours) {
                html += `<div class="popup-hours"><strong><i class="fas fa-clock"></i> Öffnungszeiten:</strong> ${hours}</div>`;
            }

            html += '</div>';
            return html;
        }

        // Load and parse locations from XML
        function loadLocations() {
            fetchXML('standorte.xml').then(xmlDoc => {

                // Helper to parse location nodes and add markers
                const parseAndAdd = (nodes, category, nameSelector, addressSelector, hoursSelector) => {
                    Array.from(nodes).forEach(loc => {
                        const lat = parseFloat(loc.querySelector('lat')?.textContent);
                        const lng = parseFloat(loc.querySelector('lng')?.textContent);
                        if (!lat || !lng) return; // Skip invalid coordinates

                        let name = loc.querySelector('name')?.textContent || 'Standort';
                        // Handle specific selectors if passed, otherwise default logic
                        if (category === 'kleider') name = loc.parentNode.querySelector('title')?.textContent || 'Kleidercontainer';

                        // Basic cleanup
                        name = name.replace(/&amp;/g, '&');

                        let address = loc.querySelector('address')?.textContent || loc.textContent || '';
                        address = address.replace(/&lt;br&gt;/g, ', ').replace(/&amp;/g, '&');

                        let hours = loc.querySelector('openingHours')?.textContent || '';

                        // Specific parsing for complex types
                        if (category === 'wertstoffhof') {
                            hours = '';
                            Array.from(loc.getElementsByTagName('day')).forEach(d => {
                                const label = d.querySelector('label')?.textContent;
                                const time = d.querySelector('time')?.textContent;
                                hours += `${label} ${time}<br>`;
                            });
                        }

                        const marker = L.marker([lat, lng], { icon: createMarkerIcon(category) })
                            .bindPopup(createPopupContent(name, category, address, hours));

                        marker.category = category;
                        allMarkers.push(marker);
                        marker.addTo(map);
                    });
                };

                // Wertstoffhöfe
                const wh = xmlDoc.getElementsByTagName('wertstoffhoefe')[0];
                if (wh) parseAndAdd(wh.getElementsByTagName('location'), 'wertstoffhof');

                // Grünabfall
                const ga = xmlDoc.getElementsByTagName('gruenabfall')[0];
                if (ga) parseAndAdd(ga.getElementsByTagName('location'), 'gruenabfall');

                // Kompostwerk
                const kw = xmlDoc.getElementsByTagName('kompostwerk')[0];
                if (kw) parseAndAdd(kw.getElementsByTagName('location'), 'kompostwerk');

                // Altglas (Nested structure: area -> loc)
                const ag = xmlDoc.getElementsByTagName('altglas')[0];
                if (ag) {
                    const info = ag.querySelector('info')?.textContent || '';
                    Array.from(ag.getElementsByTagName('loc')).forEach(loc => {
                        const lat = parseFloat(loc.getAttribute('lat'));
                        const lng = parseFloat(loc.getAttribute('lng'));
                        if (lat && lng) {
                            const marker = L.marker([lat, lng], { icon: createMarkerIcon('altglas') })
                                .bindPopup(createPopupContent(loc.textContent, 'altglas', loc.parentNode.querySelector('name')?.textContent, info));
                            marker.category = 'altglas';
                            allMarkers.push(marker);
                            marker.addTo(map);
                        }
                    });
                }

                // Kleider (Nested structure: location -> spot)
                const kl = xmlDoc.getElementsByTagName('kleider')[0];
                if (kl) {
                    Array.from(kl.getElementsByTagName('spot')).forEach(spot => {
                        const lat = parseFloat(spot.getAttribute('lat'));
                        const lng = parseFloat(spot.getAttribute('lng'));
                        if (lat && lng) {
                            const title = spot.parentNode.querySelector('title')?.textContent;
                            const marker = L.marker([lat, lng], { icon: createMarkerIcon('kleider') })
                                .bindPopup(createPopupContent(spot.textContent, 'kleider', title, ''));
                            marker.category = 'kleider';
                            allMarkers.push(marker);
                            marker.addTo(map);
                        }
                    });
                }

                // Repair-Cafés
                const rc = xmlDoc.getElementsByTagName('repaircafe')[0];
                if (rc) parseAndAdd(rc.getElementsByTagName('location'), 'repaircafe');

            }).catch(e => console.error("Error loading locations for map:", e));
        }

        // Filter logic
        function filterMarkers(category) {
            activeCategory = category;
            allMarkers.forEach(marker => {
                if (category === 'all' || marker.category === category) {
                    marker.addTo(map);
                } else {
                    map.removeLayer(marker);
                }
            });
        }

        // Bind custom filter buttons
        const filterBtns = document.querySelectorAll('.map-filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterMarkers(this.getAttribute('data-category'));
            });
        });

        // Geolocation
        const locateBtn = document.getElementById('locate-me-btn');
        if (locateBtn) {
            locateBtn.addEventListener('click', function () {
                if (!navigator.geolocation) {
                    alert('Geolokalisierung wird von Ihrem Browser nicht unterstützt.');
                    return;
                }

                this.disabled = true;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Suche...</span>';

                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;

                        // Clean up old marker
                        if (userMarker) map.removeLayer(userMarker);

                        // Define user icon
                        const userIcon = L.divIcon({
                            className: 'user-location-icon',
                            html: '<div class="user-location-marker"></div>',
                            iconSize: [20, 20],
                            iconAnchor: [10, 10]
                        });

                        userMarker = L.marker([lat, lng], { icon: userIcon })
                            .bindPopup('<div class="map-popup"><h3><i class="fas fa-location-crosshairs"></i> Ihr Standort</h3></div>')
                            .addTo(map);

                        map.flyTo([lat, lng], 13);
                        locateBtn.disabled = false;
                        locateBtn.innerHTML = '<i class="fas fa-location-crosshairs"></i> <span>Mein Standort</span>';
                    },
                    function (error) {
                        alert('Standort konnte nicht ermittelt werden.');
                        locateBtn.disabled = false;
                        locateBtn.innerHTML = '<i class="fas fa-location-crosshairs"></i> <span>Mein Standort</span>';
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            });
        }

        loadLocations();

    } catch (e) {
        console.error("Error initializing map:", e);
    }
});
