/**
 * Navigation auf schmalen Bildschirmen
 *
 * Klappmenue und aufklappbare Untermenues. Welcher Menuepunkt als
 * aktuell markiert wird, entscheidet components.js - dort entsteht die
 * Navigation, und eine zweite Stelle wuerde die Markierung nur wieder
 * ueberschreiben.
 *
 * Abhaengigkeiten: keine
 */

const MOBILE_BREAKPOINT = 768;

document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
    setupMobileDropdowns();
});

/** Das Menuesymbol aus drei Strichen oeffnet und schliesst das Hauptmenue. */
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', function () {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        navMenu.classList.toggle('active');
    });
}

/**
 * Auf schmalen Bildschirmen gibt es kein Ueberfahren mit der Maus. Ein
 * Tippen auf den Oberpunkt klappt darum das Untermenue auf, statt der
 * Verlinkung zu folgen.
 */
function setupMobileDropdowns() {
    document.querySelectorAll('.has-dropdown, .has-mega-dropdown').forEach(item => {
        const link = item.querySelector('.nav-link');
        if (!link) return;

        link.addEventListener('click', function (event) {
            if (window.innerWidth > MOBILE_BREAKPOINT) return;
            event.preventDefault();
            item.classList.toggle('active');
        });
    });
}
