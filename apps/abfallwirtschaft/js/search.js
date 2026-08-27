/**
 * Search.js - Global site search functionality
 * Aggregates data from multiple XML sources (infos, news, onlinedienste) and static pages.
 * Implements a fuzzy search using Levenshtein distance.
 * Dependencies: utils.js (calculateLevenshtein, fetchXML)
 */

document.addEventListener("DOMContentLoaded", function () {
    try {
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
        const searchResultsContainer = document.getElementById('global-search-results');

        // Central search index array to hold all searchable items
        let searchIndex = [];

        // Static pages index (manual definition for pages without XML source)
        const staticPages = [
            { title: "Abfallkalender", url: "kalender.html", type: "Service" },
            { title: "Sperrmüll anmelden", url: "onlinedienste.html#sperrmuell", type: "Dienstleistung" },
            { title: "Wertstoffhöfe Öffnungszeiten", url: "standorte.html#wertstoffhof", type: "Standort" },
            { title: "Abfall-ABC", url: "infos.html#abc", type: "Info" },
            { title: "Gebührenrechner", url: "rechner.html", type: "Tool" },
            { title: "Glascontainer Standorte", url: "standorte.html#altglascontainer", type: "Standort" },
            { title: "Grünabfall Sammelstellen", url: "standorte.html#sammelstellen", type: "Standort" },
            { title: "Tonne bestellen", url: "onlinedienste.html#behaelter", type: "Dienstleistung" },
            { title: "Repair-Cafés", url: "infos.html#repair", type: "Info" },
            { title: "Verschenkmarkt", url: "infos.html#verschenkmarkt", type: "Info" },
            { title: "Rechtliches & Impressum", url: "legal.html", type: "Info" },
            { title: "Kontakt", url: "kontakt.html", type: "Info" },
            { title: "Kompostwerk", url: "standorte.html#kompostwerk", type: "Standort" }
        ];

        // Initialize search: fetch and index all XML data
        const initSearch = async () => {
            // Start with static pages
            searchIndex = [...staticPages];

            // Fetch and parse infos.xml (ABC, Reports, Downloads)
            try {
                const xmlDoc = await fetchXML('infos.xml');

                // Index 'Abfall-ABC' items
                const abcSection = xmlDoc.querySelector('abc');
                if (abcSection) {
                    const items = abcSection.getElementsByTagName('item');
                    Array.from(items).forEach(item => {
                        const itemName = item.getElementsByTagName('name')[0]?.textContent || "";
                        const itemDest = item.getElementsByTagName('disposal')[0]?.textContent || "";

                        if (itemName) {
                            searchIndex.push({
                                title: itemName + " (Abfall-ABC)",
                                url: "infos.html#abc",
                                type: "Abfall-ABC",
                                meta: itemDest
                            });
                        }
                    });
                }

                // Index leaflets (merkblaetter)
                const merkSection = xmlDoc.querySelector('merkblaetter');
                if (merkSection) {
                    const items = merkSection.getElementsByTagName('item');
                    Array.from(items).forEach(item => {
                        const itemText = item.querySelector('text')?.textContent || "";
                        const itemLink = item.querySelector('link')?.textContent || "";

                        if (itemText) {
                            searchIndex.push({
                                title: itemText,
                                url: itemLink,
                                type: "Merkblatt"
                            });
                        }
                    });
                }

                // Index reports (bilanzen)
                const bilanzenSection = xmlDoc.querySelector('bilanzen');
                if (bilanzenSection) {
                    const boxes = bilanzenSection.getElementsByTagName('box');
                    Array.from(boxes).forEach(box => {
                        const downloads = box.querySelector('downloads');
                        if (downloads) {
                            const links = downloads.getElementsByTagName('link');
                            Array.from(links).forEach(link => {
                                const linkText = link.querySelector('text')?.textContent || "";
                                const linkUrl = link.querySelector('url')?.textContent || "";
                                if (linkText && linkUrl) {
                                    searchIndex.push({
                                        title: linkText,
                                        url: linkUrl,
                                        type: "Download"
                                    });
                                }
                            });
                        }
                    });
                }

                // Index sorting instructions
                const sortierungSection = xmlDoc.querySelector('sortierung');
                if (sortierungSection) {
                    const boxes = sortierungSection.getElementsByTagName('box');
                    Array.from(boxes).forEach(box => {
                        const boxTitle = box.querySelector('title')?.textContent || "";
                        if (boxTitle) {
                            searchIndex.push({
                                title: boxTitle + " – Sortierungshinweise",
                                url: "infos.html#sortierung",
                                type: "Info"
                            });
                        }
                    });
                }

            } catch (err) {
                console.warn("Global Search: Could not load infos.xml data.", err);
            }

            // Fetch onlinedienste.xml for service forms
            try {
                const xmlDoc = await fetchXML('onlinedienste.xml');

                const sections = [
                    { name: 'behaelter', url: 'onlinedienste.html#behaelter' },
                    { name: 'abholung', url: 'onlinedienste.html#abholung' },
                    { name: 'sonstiges', url: 'onlinedienste.html#sonstiges' }
                ];

                sections.forEach(section => {
                    const sectionEl = xmlDoc.querySelector(section.name);
                    if (sectionEl) {
                        Array.from(sectionEl.getElementsByTagName('item')).forEach(item => {
                            const itemText = item.querySelector('text')?.textContent || "";
                            const itemId = item.querySelector('id')?.textContent || "";
                            if (itemText) {
                                searchIndex.push({
                                    title: itemText,
                                    url: itemId ? `onlinedienste.html#${itemId}` : section.url,
                                    type: "Onlinedienst"
                                });
                            }
                        });
                    }
                });

            } catch (err) {
                console.warn("Global Search: Could not load onlinedienste.xml data.", err);
            }

            // Fetch news.xml for articles
            try {
                const xmlDoc = await fetchXML('news.xml');

                const newsItems = xmlDoc.getElementsByTagName('news');
                Array.from(newsItems).forEach(item => {
                    const title = item.querySelector('title')?.textContent || "";
                    const link = item.querySelector('link')?.textContent || "news.html";
                    if (title) {
                        searchIndex.push({
                            title: title,
                            url: link,
                            type: "Aktuelles"
                        });
                    }
                });

            } catch (err) {
                console.warn("Global Search: Could not load news.xml data.", err);
            }
        };

        // Initialize search on load
        if (searchInput) initSearch();

        // Search input handler implementation
        if (searchInput && searchResultsContainer) {
            searchInput.addEventListener('input', function () {
                const query = this.value.toLowerCase().trim();
                searchResultsContainer.innerHTML = '';

                // Minimum 2 characters required
                if (query.length < 2) {
                    searchResultsContainer.classList.remove('active');
                    return;
                }

                // Filter logic: exact match OR fuzzy match
                const results = searchIndex.filter(item => {
                    const title = item.title.toLowerCase();

                    // Direct match (includes)
                    if (title.includes(query)) return true;

                    // Fuzzy match (Levenshtein)
                    const threshold = query.length > 4 ? 2 : 1; // Allow more typos for longer words
                    const dist = calculateLevenshtein(title, query);

                    // Allow match if distance is low AND lengths are somewhat similar
                    return dist <= threshold && Math.abs(title.length - query.length) < 5;
                });

                // Sorting: exact startsWith matches first
                results.sort((a, b) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    const aStarts = titleA.startsWith(query);
                    const bStarts = titleB.startsWith(query);
                    if (aStarts && !bStarts) return -1;
                    if (!aStarts && bStarts) return 1;
                    return 0;
                });

                // Limit results to top 8
                const topResults = results.slice(0, 8);

                if (topResults.length > 0) {
                    topResults.forEach(item => {
                        const div = document.createElement('a');
                        div.href = item.url;
                        div.className = 'search-result-item';

                        // Icon handling
                        let icon = 'fa-chevron-right';
                        if (item.type === 'Abfall-ABC') icon = 'fa-recycle';
                        if (item.type === 'Service') icon = 'fa-calendar-alt';
                        if (item.type === 'Standort') icon = 'fa-map-marker-alt';
                        if (item.type === 'Tool') icon = 'fa-calculator';

                        div.innerHTML = `
                            <span class="search-result-title">${item.title}</span>
                            <div class="search-result-meta">
                                <span class="search-result-type">${item.type}</span>
                                <i class="fas ${icon}"></i>
                            </div>
                        `;
                        // Wrapper intent: If it's an ABC item, store the term in SessionStorage
                        // so infos.html can auto-open the correct tab/item.
                        if (item.type === 'Abfall-ABC') {
                            div.addEventListener('click', () => {
                                sessionStorage.setItem('abcSearchTerm', item.title.replace(" (Abfall-ABC)", ""));
                            });
                        }

                        searchResultsContainer.appendChild(div);
                    });
                    searchResultsContainer.classList.add('active');
                } else {
                    searchResultsContainer.classList.remove('active');
                }
            });

            // UI: Close search results when clicking outside
            document.addEventListener('click', function (e) {
                if (!searchInput.contains(e.target) && !searchResultsContainer.contains(e.target)) {
                    searchResultsContainer.classList.remove('active');
                }
            });
        }

    } catch (e) {
        console.error("Error in Global Search:", e);
    }
});
