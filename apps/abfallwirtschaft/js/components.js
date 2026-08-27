/**
 * Components.js
 * Manages the global header and footer injection for all pages.
 * Dependencies: None
 */

/**
 * Loads the header content into the placeholder.
 * Injects the full HTML structure including Logo and Navigation.
 * Calls highlightActiveMenuItem() to set the correct active state.
 */
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    // Inject header HTML
    headerPlaceholder.innerHTML = `
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo-wrapper">
                    <picture>
                        <source srcset="img/Logo_Abfallwirtschaft.webp" type="image/webp">
                        <source srcset="img/Logo_Abfallwirtschaft-small.png" media="(max-width: 768px)">
                        <img src="img/Logo_Abfallwirtschaft.png" alt="Logo Abfallwirtschaft" class="logo">
                    </picture>
                    <div class="logo-text">
                        <span class="logo-title">Abfallwirtschaft</span>
                        <span class="logo-subtitle">Landkreis Oldenburg</span>
                    </div>
                </a>

                <nav class="main-nav">
                    <!-- Mobile Menu Toggle Button -->
                    <button class="mobile-menu-toggle" aria-expanded="false">
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        <span class="sr-only">Menü öffnen</span>
                    </button>

                    <ul class="nav-menu">
                        <!-- Navigation Item: Standorte (Mega Dropdown) -->
                        <li class="nav-item has-mega-dropdown">
                            <a href="karte.html" class="nav-link">
                                <i class="fas fa-map-marked-alt"></i>
                                <span>Standorte</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <div class="mega-dropdown">
                                <div class="mega-dropdown-inner">
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-map"></i> Karte</h4>
                                        <ul>
                                            <li><a href="karte.html">Interaktive Standortkarte</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-recycle"></i> Entsorgungsanlagen</h4>
                                        <ul>
                                            <li><a href="standorte.html#wertstoffhof">Wertstoffhöfe</a></li>
                                            <li><a href="standorte.html#sammelstellen">Grünabfall</a></li>
                                            <li><a href="standorte.html#kompostwerk">Kompostwerk</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-box"></i> Container</h4>
                                        <ul>
                                            <li><a href="standorte.html#altglascontainer">Glascontainer</a></li>
                                            <li><a href="standorte.html#kleidercontainer">Kleidercontainer</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Navigation Item: Onlinedienste (Mega Dropdown) -->
                        <li class="nav-item has-mega-dropdown">
                            <a href="onlinedienste.html" class="nav-link">
                                <i class="fas fa-laptop"></i>
                                <span>Onlinedienste</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <div class="mega-dropdown">
                                <div class="mega-dropdown-inner">
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-trash"></i> Behälter</h4>
                                        <ul>
                                            <li><a href="onlinedienste.html#tonne-bestellen">Tonne bestellen</a></li>
                                            <li><a href="onlinedienste.html#tonne-umtauschen">Tonne umtauschen</a></li>
                                            <li><a href="onlinedienste.html#eigentuemerwechsel">Eigentümerwechsel</a></li>
                                            <li><a href="onlinedienste.html#gemeinsame-nutzung">Gemeinsame Nutzung</a></li>
                                            <li><a href="onlinedienste.html#biotonne-befreiung">Biotonne Befreiung</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-truck"></i> Abholung</h4>
                                        <ul>
                                            <li><a href="onlinedienste.html#sperrmuell">Sperrmüll anmelden</a></li>
                                            <li><a href="onlinedienste.html#elektrogeraete">Haushaltsgroßgeräte</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-file-alt"></i> Sonstiges</h4>
                                        <ul>
                                            <li><a href="onlinedienste.html#sepa-mandat">SEPA-Mandat</a></li>
                                            <li><a href="onlinedienste.html#muellkippe">Unerlaubte Abfallentsorgung</a></li>
                                            <li><a href="onlinedienste.html#saubere-landschaft">Aktion Saubere Landschaft</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Navigation Item: Infos (Mega Dropdown) -->
                        <li class="nav-item has-mega-dropdown">
                            <a href="infos.html" class="nav-link">
                                <i class="fas fa-info-circle"></i>
                                <span>Infos</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <div class="mega-dropdown">
                                <div class="mega-dropdown-inner">
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-book"></i> Beratung</h4>
                                        <ul>
                                            <li><a href="infos.html#abc">Abfall-ABC</a></li>
                                            <li><a href="infos.html#kalender">Abfallkalender</a></li>
                                            <li><a href="infos.html#sortierung">Richtig Sortieren</a></li>
                                            <li><a href="infos.html#downloads">Merkblätter</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-tools"></i> Projekte</h4>
                                        <ul>
                                            <li><a href="infos.html#repair">Repair-Cafés</a></li>
                                            <li><a href="infos.html#verschenkmarkt">Verschenkmarkt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Navigation Item: Gebühren (Mega Dropdown) -->
                        <li class="nav-item has-mega-dropdown">
                            <a href="rechner.html" class="nav-link">
                                <i class="fas fa-euro-sign"></i>
                                <span>Gebühren</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <div class="mega-dropdown">
                                <div class="mega-dropdown-inner">
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-calculator"></i> Rechner</h4>
                                        <ul>
                                            <li><a href="rechner.html#rechner">Gebührenrechner</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-list-alt"></i> Übersicht</h4>
                                        <ul>
                                            <li><a href="rechner.html#behaeltergebuehren">Behältergebühren</a></li>
                                            <li><a href="rechner.html#wertstoffhof-gebuehren">Wertstoffhöfe</a></li>
                                            <li><a href="rechner.html#umschlagstation-gebuehren">Umschlagstation</a></li>
                                            <li><a href="rechner.html#gruenabfall-gebuehren">Grünabfall-Sammelstellen</a></li>
                                            <li><a href="rechner.html#kostenfreie-leistungen">Kostenfreie Leistungen</a></li>
                                            <li><a href="rechner.html#gebuehren-download">Gebührensatzung</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-section">
                                        <h4><i class="fas fa-chart-bar"></i> Berichte</h4>
                                        <ul>
                                            <li><a href="rechner.html#bilanzen">Konzepte & Bilanzen</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Navigation Item: Gewerbe (Standard Dropdown) -->
                        <li class="nav-item has-dropdown">
                            <a href="gewerbe.html" class="nav-link">
                                <i class="fas fa-industry"></i>
                                <span>Gewerblich</span>
                                <i class="fas fa-chevron-down dropdown-icon"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="gewerbe.html#anzeige-krwg"><i class="fas fa-clipboard-list"></i> Anzeige §18 KrWG</a></li>
                                <li><a href="gewerbe.html#restabfallbehaelter"><i class="fas fa-trash-alt"></i> Restabfallbehälter</a></li>
                                <li><a href="gewerbe.html#downloads-gewerbe"><i class="fas fa-file-alt"></i> Merkblätter</a></li>
                            </ul>
                        </li>

                        <!-- Navigation Item: Kontakt -->
                        <li class="nav-item">
                            <a href="kontakt.html" class="nav-link nav-link-cta">
                                <i class="fas fa-headset"></i>
                                <span>Kontakt</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    `;

    // Initialize navigation logic
    highlightActiveMenuItem();

    // Check if mobile menu init function exists (from navigation.js) and run it
    if (window.initMobileMenu) {
        window.initMobileMenu();
    }
}

/**
 * Loads the footer content into the placeholder.
 * Adds dynamic year for copyright.
 */
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const year = new Date().getFullYear();

    footerPlaceholder.innerHTML = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <p>&copy; ${year} Jana Fisenko</p>
                    <p>Amt für Bodenschutz und Abfallwirtschaft | Delmenhorster Str. 6 | 27793 Wildeshausen</p>
                </div>
                <!-- Legal Menu -->
                <nav class="legal-menu" aria-label="Rechtliches">
                    <ul>
                        <li><a href="legal.html#impressum">Impressum</a></li>
                        <li><a href="legal.html#datenschutz">Datenschutz</a></li>
                        <li><a href="legal.html#barrierefreiheit">Barrierefreiheit</a></li>
                        <li><a href="#" id="acc-trigger">Darstellung anpassen</a></li>
                        <li><a href="sitemap.html">Sitemap</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    `;
}

/**
 * Highlights the active menu item based on the current URL.
 * Matches current filename to navigation links or categories.
 */
function highlightActiveMenuItem() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    // Determine active category key from filename
    let activeKey = '';
    if (page === 'index.html' || page === '') activeKey = 'index';
    else if (page === 'karte.html' || page === 'standorte.html') activeKey = 'standorte';
    else if (page === 'onlinedienste.html') activeKey = 'onlinedienste';
    else if (page === 'infos.html') activeKey = 'infos';
    else if (page === 'rechner.html') activeKey = 'gebuehren';
    else if (page === 'gewerbe.html') activeKey = 'gewerbe';
    else if (page === 'kontakt.html') activeKey = 'kontakt';

    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        // Exact filename match
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
        }
        // Category match (e.g., maintain highlight on subpages)
        else if (activeKey === 'standorte' && (href === 'karte.html' || href === 'standorte.html')) {
            if (href.includes(activeKey) || href.includes('karte')) link.classList.add('active');
        }
    });

    // Ensure top-level menu items are highlighted for dropdowns
    const navMap = {
        'standorte': 'karte.html',
        'onlinedienste': 'onlinedienste.html',
        'infos': 'infos.html',
        'gebuehren': 'rechner.html',
        'gewerbe': 'gewerbe.html',
        'kontakt': 'kontakt.html'
    };

    if (activeKey && navMap[activeKey]) {
        const topLink = document.querySelector(`.nav-link[href="${navMap[activeKey]}"]`);
        if (topLink) topLink.classList.add('active');
    } else if (activeKey === 'standorte') {
        const topLink = document.querySelector(`.nav-link[href="karte.html"]`);
        if (topLink) topLink.classList.add('active');
    }
}

// Global initialization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
