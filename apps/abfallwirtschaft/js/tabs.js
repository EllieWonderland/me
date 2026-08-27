/**
 * Reiternavigation
 *
 * Die Inhaltsseiten buendeln viel Stoff in Reitern. Damit man einen
 * einzelnen Reiter verlinken kann, haengt der aktive Reiter in der
 * Adresszeile: #abc oeffnet den Reiter "abc", #sperrmuell oeffnet den
 * Reiter, in dem dieser Abschnitt liegt, und springt dorthin.
 *
 * Genutzt von: infos.html, onlinedienste.html, standorte.html,
 * rechner.html, gewerbe.html
 *
 * Abhaengigkeiten: keine
 */

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = [...document.querySelectorAll('.tab-btn')];
    const tabPanels = [...document.querySelectorAll('.tab-content')];
    if (tabButtons.length === 0) return;

    /** Zeigt einen Reiter an und fuehrt den Brotkrumenpfad nach. */
    const activateTab = (tabId) => {
        tabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === tabId));
        tabPanels.forEach(panel => panel.classList.toggle('active', panel.id === tabId));

        const activeButton = tabButtons.find(button => button.dataset.tab === tabId);
        if (activeButton) updateBreadcrumb(activeButton.textContent.trim());
    };

    /**
     * Wertet die Adresszeile aus. Der Anker kann entweder ein Reiter
     * selbst sein oder ein Abschnitt darin - im zweiten Fall wird der
     * umgebende Reiter geoeffnet.
     */
    const handleHash = () => {
        if (!window.location.hash) return;
        const hash = window.location.hash.substring(1);

        // Fall 1: Der Anker ist ein Reiter
        if (tabButtons.some(button => button.dataset.tab === hash)) {
            activateTab(hash);
            // Kurz warten, bis der Reiter sichtbar ist, sonst springt es ins Leere
            setTimeout(() => {
                const tabNav = document.querySelector('.tab-navigation');
                if (tabNav) tabNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
            return;
        }

        // Fall 2: Der Anker liegt in einem Reiter
        const target = document.getElementById(hash);
        if (!target) return;

        const parentPanel = target.closest('.tab-content');
        if (!parentPanel || !parentPanel.id) return;

        activateTab(parentPanel.id);

        // Aufklappbare Abschnitte gleich mit oeffnen
        if (target.tagName === 'DETAILS') target.setAttribute('open', '');

        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            if (!tabId) return;
            activateTab(tabId);
            // Anker mitfuehren, damit der Reiter teilbar und zurueckspringbar bleibt
            history.pushState(null, '', '#' + tabId);
        });
    });

    handleHash();
    window.addEventListener('hashchange', handleHash);

    // Ohne Anker gilt der Reiter, den das HTML als aktiv markiert hat
    if (!window.location.hash) {
        const defaultTab = document.querySelector('.tab-btn.active');
        if (defaultTab) activateTab(defaultTab.dataset.tab);
    }
});

/** Haengt den Namen des offenen Reiters hinten an den Brotkrumenpfad. */
function updateBreadcrumb(tabName) {
    const breadcrumb = document.querySelector('.breadcrumb-header .container');
    if (!breadcrumb) return;

    let wrapper = breadcrumb.querySelector('.breadcrumb-dynamic-wrapper');
    if (!wrapper) {
        wrapper = document.createElement('span');
        wrapper.className = 'breadcrumb-dynamic-wrapper';
        breadcrumb.appendChild(wrapper);
    }

    wrapper.innerHTML = ` / <span class="breadcrumb-dynamic-item">${tabName}</span>`;
}
