/**
 * Utils.js - Shared utility functions
 * Provides helper functions for data fetching, math, and UI generation.
 * Dependencies: None
 */

/**
 * Calculate Levenshtein distance between two strings.
 * Determines how many edits (insertions, deletions, substitutions) are needed 
 * to turn string A into string B. Used for fuzzy search matching.
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {number} Edit distance between strings
 */
function calculateLevenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // deletion
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // substitution
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

/**
 * Fetch XML content.
 * @param {string} url - The URL to fetch
 * @returns {Promise<Document>} - Resolves with parsed XML Document
 */
function fetchXML(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(str => new DOMParser().parseFromString(str, "text/xml"))
        .catch(err => {
            throw new Error(`Network error or file not found: ${err.message}`);
        });
}

/**
 * Create a news card element from XML item data.
 * Helper function to generate DOM structure for news articles.
 * @param {Element} item - XML news item element
 * @returns {HTMLElement} Wrapped news card anchor element
 */
function createNewsCard(item) {
    const link = item.querySelector('link')?.textContent || '#';
    const wrapper = document.createElement('a');
    wrapper.href = link;
    wrapper.className = 'news-card-link';
    wrapper.style.textDecoration = 'none';
    wrapper.style.color = 'inherit';

    const article = document.createElement('article');
    article.className = 'news-card';

    const badge = item.querySelector('badge')?.textContent;
    const badgeClass = item.querySelector('badgeClass')?.textContent;
    let badgeHTML = badge ? `<span class="news-badge ${badgeClass || ''}">${badge}</span>` : '';

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
