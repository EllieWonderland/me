/**
 * Navigation.js - Mobile menu and active link handling
 * Manages the responsive navigation menu and highlights the current page.
 * Dependencies: None
 */

document.addEventListener("DOMContentLoaded", function () {
    try {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const dropdowns = document.querySelectorAll('.has-dropdown, .has-mega-dropdown');

        // Mobile menu toggle
        if (menuToggle) {
            menuToggle.addEventListener('click', function () {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
            });
        }

        // Mobile dropdown handling
        // On mobile, clicking a parent link toggles the submenu instead of navigating
        dropdowns.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (link) {
                link.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });

        // Set active navigation link
        // Highlights the menu item corresponding to the current page
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Check for exact match or default index.html match
            if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } catch (e) {
        console.error("Error in Mobile Menu:", e);
    }
});
