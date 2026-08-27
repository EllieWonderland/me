/**
 * Data-loaders.js
 * Handles fetching and rendering of specific content sections (News, Services, Locations, Infos).
 * Dependencies: utils.js (fetchXML, createNewsCard, calculateLevenshtein)
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. News loader
    // Load latest news for homepage or full archive for news page
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        fetchXML('news.xml').then(xmlDoc => {
            // Homepage: Show only first 3 items
            const newsItems = Array.from(xmlDoc.getElementsByTagName('news')).slice(0, 3);
            newsItems.forEach(item => newsGrid.appendChild(createNewsCard(item)));
        }).catch(e => console.error("News loading error:", e));
    }

    const newsArchiveGrid = document.getElementById('news-archive-grid');
    if (newsArchiveGrid) {
        fetchXML('news.xml').then(xmlDoc => {
            // News Page: Show all items
            newsArchiveGrid.innerHTML = '';
            Array.from(xmlDoc.getElementsByTagName('news')).forEach(item => {
                newsArchiveGrid.appendChild(createNewsCard(item));
            });
        }).catch(e => console.error("News archive loading error:", e));
    }

    // 2. Services loader (Startpage)
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        fetchXML('services.xml').then(xmlDoc => {
            Array.from(xmlDoc.getElementsByTagName('service')).forEach(service => {
                const article = document.createElement('article');
                article.className = 'service-card';
                article.innerHTML = `
                    <div class="card-icon"><i class="${service.querySelector('icon').textContent}"></i></div>
                    <h3>${service.querySelector('title').textContent}</h3>
                    <p>${service.querySelector('text').textContent}</p>
                    <a href="${service.querySelector('link').textContent}" class="card-link">
                        ${service.querySelector('linkText').textContent} <i class="fas fa-arrow-right"></i>
                    </a>
                `;
                servicesGrid.appendChild(article);
            });
        }).catch(e => console.error("XML Services Error:", e));
    }

    // 3. Locations loader (standorte.html)
    // Loads multiple location types: Recycling Centers, Green Waste, Glass, etc.
    const locationsGrid = document.getElementById('locations-grid');
    const gruenGrid = document.getElementById('gruen-grid');
    const kompostGrid = document.getElementById('kompost-grid');
    const altglasList = document.getElementById('altglas-list');
    const kleiderGrid = document.getElementById('kleider-grid');

    if (locationsGrid || gruenGrid || kompostGrid || altglasList || kleiderGrid) {
        fetchXML('standorte.xml').then(xmlDoc => {

            // A. Recycling Centers (Wertstoffhöfe)
            if (locationsGrid) {
                Array.from(xmlDoc.getElementsByTagName('wertstoffhoefe')[0]?.getElementsByTagName('location') || []).forEach(loc => {
                    const article = document.createElement('article');
                    article.className = 'location-card';

                    // Construct opening hours table
                    let hoursRows = '';
                    Array.from(loc.getElementsByTagName('day')).forEach(d => {
                        const label = d.querySelector('label').textContent;
                        const time = d.querySelector('time').textContent.replace(/&lt;br&gt;/g, '<br>').replace(/&amp;/g, '&');
                        hoursRows += `<tr><td>${label}</td><td>${time}</td></tr>`;
                    });

                    // Decode HTML entities in address
                    const addressRaw = loc.querySelector('address').textContent;
                    const address = addressRaw.replace(/&lt;br&gt;/g, '<br>').replace(/&amp;/g, '&');

                    // Check for optional note
                    const noteEl = loc.querySelector('note');
                    const note = noteEl ? noteEl.textContent.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\/em&gt;/g, '</em>').replace(/&amp;/g, '&') : '';

                    article.innerHTML = `
                        <h3><i class="fas fa-map-pin"></i> ${loc.querySelector('name').textContent.replace(/&amp;/g, '&')}</h3>
                        <p><strong>${address}</strong></p>
                        <div class="opening-hours">
                            <strong>${loc.querySelector('openingHoursLabel').textContent}</strong>
                            <table>${hoursRows}</table>
                        </div>
                        ${note ? `<p class="location-note">${note}</p>` : ''}
                    `;
                    locationsGrid.appendChild(article);
                });
            }
            // B. Green waste (Grünabfall)
            if (gruenGrid) {
                Array.from(xmlDoc.getElementsByTagName('gruenabfall')[0]?.getElementsByTagName('location') || []).forEach(loc => {
                    const article = document.createElement('article');
                    article.className = 'location-card';
                    article.innerHTML = `
                        <h3>${loc.querySelector('name').textContent}</h3>
                        <p>${loc.querySelector('address').textContent}</p>
                        <div class="opening-hours">${loc.querySelector('openingHours').textContent}</div>
                    `;
                    gruenGrid.appendChild(article);
                });
            }
            // C. Composting plant (Kompostwerk)
            if (kompostGrid) {
                Array.from(xmlDoc.getElementsByTagName('kompostwerk')[0]?.getElementsByTagName('location') || []).forEach(loc => {
                    const article = document.createElement('article');
                    article.className = 'location-card';
                    article.innerHTML = `<h3>${loc.querySelector('name').textContent}</h3><p>${loc.querySelector('description').textContent}</p>`;
                    kompostGrid.appendChild(article);
                });
            }
            // D. Glass containers (Altglas)
            if (altglasList) {
                const altglas = xmlDoc.getElementsByTagName('altglas')[0];
                if (altglas) {
                    const info = altglas.querySelector('info');
                    if (info) altglasList.appendChild(Object.assign(document.createElement('p'), { textContent: info.textContent }));

                    // Create detail/summary list for cities
                    Array.from(altglas.getElementsByTagName('area')).forEach(area => {
                        const details = document.createElement('details');
                        details.innerHTML = `<summary>${area.querySelector('name').textContent}</summary>`;
                        const ul = document.createElement('ul');
                        ul.className = 'location-list';
                        Array.from(area.getElementsByTagName('loc')).forEach(l => {
                            const li = document.createElement('li');
                            li.textContent = l.textContent;
                            ul.appendChild(li);
                        });
                        details.appendChild(ul);
                        altglasList.appendChild(details);
                    });
                }
            }
            // E. Clothing containers (Altkleider)
            if (kleiderGrid) {
                const kleider = xmlDoc.getElementsByTagName('kleider')[0];
                if (kleider) {
                    const info = kleider.querySelector('info');
                    if (info) {
                        const infoP = document.createElement('p');
                        infoP.className = 'kleider-info';
                        infoP.textContent = info.textContent;
                        kleiderGrid.appendChild(infoP);
                    }
                    Array.from(kleider.getElementsByTagName('location') || []).forEach(loc => {
                        const article = document.createElement('article');
                        article.className = 'location-card';
                        article.innerHTML = `<h3>${loc.querySelector('title').textContent}</h3><p>${loc.querySelector('text').textContent}</p>`;
                        kleiderGrid.appendChild(article);
                    });
                }
            }

        }).catch(e => console.error("XML Locations Error:", e));
    }

    // 4. Infos & Abfall-ABC loader
    // Handles Abfall-ABC list with search, Leaflets, and Report-Downloads
    const abcContainer = document.getElementById('abc-list-container');
    const merkList = document.getElementById('merkblaetter-list');
    const bilanzenGrid = document.getElementById('bilanzen-grid');

    if (abcContainer || merkList || bilanzenGrid) {
        fetchXML('infos.xml').then(xmlDoc => {
            // A. Leaflets (Merkblätter)
            if (merkList) {
                Array.from(xmlDoc.getElementsByTagName('merkblaetter')[0]?.getElementsByTagName('item') || []).forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${item.querySelector('link').textContent}" target="_blank"><i class="${item.querySelector('icon').textContent}"></i> ${item.querySelector('text').textContent}</a>`;
                    merkList.appendChild(li);
                });
            }

            // B. Abfall-ABC logic
            if (abcContainer) {
                const abcItems = Array.from(xmlDoc.getElementsByTagName('abc')[0]?.getElementsByTagName('item') || []).map(item => ({
                    name: item.querySelector('name').textContent,
                    disposal: item.querySelector('disposal').textContent,
                    type: item.querySelector('type').textContent
                }));

                // Render function for Abfall-ABC list
                const renderABC = (items) => {
                    abcContainer.innerHTML = '';
                    if (items.length === 0) {
                        abcContainer.innerHTML = '<p>Keine Einträge.</p>';
                        return;
                    }
                    items.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
                        const det = document.createElement('details');
                        det.className = 'abc-item';
                        det.innerHTML = `<summary>${item.name}</summary><div class="abc-content"><p>Entsorgung: <strong>${item.disposal}</strong></p><span class="disposal-tag tonne-${item.type}">${item.disposal}</span></div>`;
                        abcContainer.appendChild(det);
                    });
                };

                // Initial render
                renderABC(abcItems);

                // Auto-open item from global search (SessionStorage)
                const searchTermFromGlobal = sessionStorage.getItem('abcSearchTerm');
                if (searchTermFromGlobal) {
                    sessionStorage.removeItem('abcSearchTerm'); // Clean up

                    const allItems = abcContainer.querySelectorAll('.abc-item');
                    let foundItem = null;

                    allItems.forEach(item => {
                        const summary = item.querySelector('summary');
                        if (summary && summary.textContent.toLowerCase() === searchTermFromGlobal.toLowerCase()) {
                            foundItem = item;
                        }
                    });

                    if (foundItem) {
                        foundItem.setAttribute('open', '');
                        foundItem.classList.add('abc-item-highlight');
                        setTimeout(() => {
                            foundItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 300);
                        setTimeout(() => {
                            foundItem.classList.remove('abc-item-highlight');
                        }, 3000);
                    }
                }

                // Abfall-ABC local search & filter
                const abcSearch = document.querySelector('.abc-search');
                const azFilter = document.getElementById('az-filter');

                if (abcSearch) {
                    abcSearch.addEventListener('input', function () {
                        const term = this.value.toLowerCase();

                        if (term.length < 3) {
                            renderABC(abcItems.filter(i => i.name.toLowerCase().includes(term)));
                            return;
                        }

                        // Fuzzy filter logic
                        const results = abcItems.filter(item => {
                            const name = item.name.toLowerCase();
                            if (name.includes(term)) return true; // match

                            const dist = calculateLevenshtein(name, term);
                            const threshold = term.length > 5 ? 2 : 1;
                            return dist <= threshold && Math.abs(name.length - term.length) <= 3;
                        });

                        // Sort best matches to top
                        results.sort((a, b) => {
                            const nameA = a.name.toLowerCase();
                            const nameB = b.name.toLowerCase();
                            const aStarts = nameA.startsWith(term);
                            const bStarts = nameB.startsWith(term);

                            if (aStarts && !bStarts) return -1;
                            if (!aStarts && bStarts) return 1;
                            return 0;
                        });

                        renderABC(results);
                    });
                }

                // A-Z filter generation
                if (azFilter) {
                    azFilter.innerHTML = '';
                    "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(char => {
                        const btn = document.createElement('button');
                        btn.innerText = char;
                        btn.className = 'az-btn';
                        btn.addEventListener('click', function () {
                            document.querySelectorAll('.az-btn').forEach(b => b.classList.remove('active'));
                            this.classList.add('active');
                            if (abcSearch) abcSearch.value = '';

                            if (char === '#') renderABC(abcItems);
                            else renderABC(abcItems.filter(i => i.name.toUpperCase().startsWith(char)));
                        });
                        azFilter.appendChild(btn);
                    });
                }
            }

            // C. Reports (Bilanzen)
            if (bilanzenGrid) {
                const blz = xmlDoc.querySelector('bilanzen');
                if (blz) {
                    bilanzenGrid.innerHTML = '';
                    Array.from(blz.getElementsByTagName('box')).forEach(box => {
                        const div = document.createElement('div');
                        div.className = 'info-box-white';

                        let linksHTML = '';
                        Array.from(box.querySelector('downloads').getElementsByTagName('link')).forEach(l => {
                            linksHTML += `<li><a href="${l.querySelector('url').textContent}" target="_blank"><i class="${l.querySelector('icon').textContent}"></i> ${l.querySelector('text').textContent}</a></li>`;
                        });

                        div.innerHTML = `
                        <h3>${box.querySelector('title').textContent}</h3>
                            <p>${box.querySelector('text').textContent}</p>
                            <ul class="download-list">${linksHTML}</ul>
                    `;
                        bilanzenGrid.appendChild(div);
                    });
                }
            }

        }).catch(e => console.error("XML Infos Error:", e));
    }

    // 5. Gewerbe loader
    const gewerbeGrid = document.getElementById('gewerbe-grid');
    if (gewerbeGrid) {
        fetchXML('gewerbe.xml').then(xmlDoc => {
            gewerbeGrid.innerHTML = '';
            Array.from(xmlDoc.getElementsByTagName('entry')).forEach(entry => {
                const article = document.createElement('article');
                article.className = 'service-card bg-white';
                let linksHTML = '';
                Array.from(entry.getElementsByTagName('link')).forEach(l => {
                    linksHTML += `<li><a href="${l.querySelector('url').textContent}"><i class="${l.querySelector('icon').textContent}"></i> ${l.querySelector('text').textContent}</a></li>`;
                });
                article.innerHTML = `<h3><i class="${entry.querySelector('icon').textContent}"></i> ${entry.querySelector('title').textContent}</h3><p>${entry.querySelector('text').textContent}</p><ul>${linksHTML}</ul>`;
                gewerbeGrid.appendChild(article);
            });
        }).catch(e => console.error("XML Gewerbe Error:", e));
    }

    // 6. Online Dienste loader
    const olListIds = ['behaelter-list', 'abholung-list', 'sonstiges-list'];
    if (olListIds.some(id => document.getElementById(id))) {
        fetchXML('onlinedienste.xml').then(xmlDoc => {
            olListIds.forEach(id => {
                const list = document.getElementById(id);
                // Map list id to xml tag name: container-list -> container
                const tagName = id.replace('-list', '');
                const container = xmlDoc.getElementsByTagName(tagName)[0];
                if (list && container) {
                    list.innerHTML = '';
                    Array.from(container.getElementsByTagName('item')).forEach(item => {
                        const li = document.createElement('li');
                        li.className = 'service-item';
                        const link = item.querySelector('link').textContent;
                        li.innerHTML = `<a href="${link}"><i class="${item.querySelector('icon').textContent}"></i> ${item.querySelector('text').textContent}</a>`;
                        list.appendChild(li);
                    });
                }
            });
        }).catch(e => console.error("XML Onlinedienste Error:", e));
    }
});

// Repair Cafés loader (Standalone)
document.addEventListener("DOMContentLoaded", function () {
    const repairList = document.getElementById('repair-cafes-list');
    if (!repairList) return;

    fetchXML('standorte.xml').then(xmlDoc => {
        const repaircafeSection = xmlDoc.querySelector('repaircafe');
        if (!repaircafeSection) {
            repairList.innerHTML = '<li>Keine Daten gefunden.</li>';
            return;
        }

        const locations = repaircafeSection.querySelectorAll('location');
        let html = '';

        locations.forEach(loc => {
            const name = loc.querySelector('name')?.textContent || '';
            const address = loc.querySelector('address')?.textContent || '';
            const openingHours = loc.querySelector('openingHours')?.textContent || '';

            html += `
                <li class="repair-item">
                    <h3><i class="fas fa-map-marker-alt"></i> ${name.replace('Repair-Café ', '')}</h3>
                    <p><strong>Ort:</strong> ${address}</p>
                    <p><strong>Wann:</strong> ${openingHours}</p>
                </li>
            `;
        });

        repairList.innerHTML = html || '<li>Keine Repair-Cafés gefunden.</li>';
    }).catch(e => {
        console.error("Error loading repair cafes from standorte.xml:", e);
        repairList.innerHTML = '<li>Fehler beim Laden der Daten.</li>';
    });
});

// Sortierung loader (Standalone)
document.addEventListener("DOMContentLoaded", function () {
    const sortierungGrid = document.getElementById('sortierung-grid');
    if (!sortierungGrid) return;

    fetchXML('infos.xml').then(xmlDoc => {
        const sortierungSection = xmlDoc.querySelector('sortierung');
        if (!sortierungSection) {
            sortierungGrid.innerHTML = '<p>Keine Daten gefunden.</p>';
            return;
        }

        const boxes = sortierungSection.querySelectorAll('box');
        let html = '';

        boxes.forEach(box => {
            const type = box.querySelector('type')?.textContent || '';
            const title = box.querySelector('title')?.textContent || '';
            const icon = box.querySelector('icon')?.textContent || '';
            const items = box.querySelectorAll('items > item');

            let itemsHtml = '';
            items.forEach(item => {
                itemsHtml += `<li>${item.textContent}</li>`;
            });

            html += `
                <div class="tonne-box tonne-${type}">
                    <h3><i class="${icon}"></i> ${title}</h3>
                    <ul>
                        ${itemsHtml}
                    </ul>
                </div>
            `;
        });

        sortierungGrid.innerHTML = html || '<p>Keine Sortierungshinweise gefunden.</p>';
    }).catch(e => {
        console.error("Error loading sortierung from infos.xml:", e);
        sortierungGrid.innerHTML = '<p>Fehler beim Laden der Daten.</p>';
    });
});
