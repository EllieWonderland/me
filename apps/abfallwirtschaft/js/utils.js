/**
 * Gemeinsame Hilfsfunktionen
 *
 * Kleine Bausteine, die mehrere Seiten brauchen: XML laden, unscharf
 * vergleichen, eine Nachrichtenkachel bauen. Wird als erste Datei
 * eingebunden, alle anderen Skripte setzen sie voraus.
 *
 * Abhaengigkeiten: keine
 */

/**
 * Levenshtein-Distanz zweier Zeichenketten: die Anzahl der Aenderungen
 * (einfuegen, loeschen, ersetzen), um a in b zu ueberfuehren.
 * Die Suche nutzt das, um Tippfehler zu verzeihen.
 *
 * @param {string} a Erste Zeichenkette
 * @param {string} b Zweite Zeichenkette
 * @returns {number} Abstand zwischen beiden Zeichenketten
 */
function calculateLevenshtein(a, b) {
    const matrix = [];

    // Erste Zeile und Spalte: Abstand zur leeren Zeichenkette
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                // Gleiches Zeichen: keine Aenderung noetig
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // ersetzen
                    matrix[i][j - 1] + 1,     // einfuegen
                    matrix[i - 1][j] + 1      // loeschen
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

/**
 * Laedt eine XML-Datei und gibt sie geparst zurueck.
 *
 * @param {string} url Pfad zur XML-Datei
 * @returns {Promise<Document>} Das geparste Dokument
 */
function fetchXML(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => new DOMParser().parseFromString(text, 'text/xml'))
        .catch(error => {
            throw new Error(`Datei nicht erreichbar (${url}): ${error.message}`);
        });
}

/**
 * Baut aus einem <news>-Eintrag der XML-Daten eine verlinkte Kachel.
 *
 * @param {Element} item Ein <news>-Element aus news.xml
 * @returns {HTMLElement} Der fertige Link mit der Kachel darin
 */
function createNewsCard(item) {
    const wrapper = document.createElement('a');
    wrapper.href = item.querySelector('link')?.textContent || '#';
    wrapper.className = 'news-card-link';

    const article = document.createElement('article');
    article.className = 'news-card';

    // Das Abzeichen ist optional, seine Farbklasse ebenfalls
    const badge = item.querySelector('badge')?.textContent;
    const badgeClass = item.querySelector('badgeClass')?.textContent || '';
    const badgeHTML = badge ? `<span class="news-badge ${badgeClass}">${badge}</span>` : '';

    article.innerHTML = `
        ${badgeHTML}
        <div class="news-content">
            <div class="news-date"><i class="fas fa-calendar"></i> ${item.querySelector('date').textContent}</div>
            <h3>${item.querySelector('title').textContent}</h3>
            <p>${item.querySelector('text').textContent}</p>
            <span class="news-read-more">Mehr erfahren <i class="fas fa-arrow-right"></i></span>
        </div>
    `;

    wrapper.appendChild(article);
    return wrapper;
}
