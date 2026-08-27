/**
 * Tabs.js - Generic Tab Navigation System
 * Handles tab switching, URL hash integration and breadcrumb updates.
 * Used on: infos.html, onlinedienste.html, standorte.html, rechner.html
 * Dependencies: None
 */

document.addEventListener("DOMContentLoaded", function () {
    try {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabBtns.length === 0) return;

        // Core activation function
        const activateTab = (tabId) => {
            // Update UI Button states
            tabBtns.forEach(b => {
                b.classList.toggle('active', b.dataset.tab === tabId);
            });
            // Show/Hide Content Areas
            tabContents.forEach(c => {
                c.classList.toggle('active', c.id === tabId);
            });

            // Dynamic breadcrumb update
            const activeBtn = [...tabBtns].find(b => b.dataset.tab === tabId);
            if (activeBtn) {
                const tabName = activeBtn.textContent.trim();
                const breadcrumbContainer = document.querySelector('.breadcrumb-header .container');

                if (breadcrumbContainer) {
                    let wrapper = breadcrumbContainer.querySelector('.breadcrumb-dynamic-wrapper');
                    if (!wrapper) {
                        wrapper = document.createElement('span');
                        wrapper.className = 'breadcrumb-dynamic-wrapper';
                        breadcrumbContainer.appendChild(wrapper);
                    }
                    wrapper.innerHTML = ` / <span class="breadcrumb-dynamic-item">${tabName}</span>`;
                }
            }
        };

        // Handle URL hash (deep linking)
        const handleHash = () => {
            if (!window.location.hash) return;
            const hash = window.location.hash.substring(1);

            // 1. Direct tab match (#abc)
            const matchingTabBtn = [...tabBtns].find(b => b.dataset.tab === hash);
            if (matchingTabBtn) {
                activateTab(hash);
                // Scroll to navigation bar
                setTimeout(() => {
                    const tabNav = document.querySelector('.tab-navigation');
                    if (tabNav) tabNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
                return;
            }

            // 2. Element match inside a tab (#some-id)
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                const parentTab = targetElement.closest('.tab-content');
                if (parentTab && parentTab.id) {
                    activateTab(parentTab.id); // Open parent tab

                    if (targetElement.tagName === 'DETAILS') {
                        targetElement.setAttribute('open', ''); // Auto-expand if details
                    }

                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        };

        // Event listeners for tab buttons
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                if (tabId) {
                    activateTab(tabId);
                    // Update URL hash without scroll jump
                    history.pushState(null, null, '#' + tabId);
                }
            });
        });

        // Initialize state
        handleHash();

        // Default: If no hash, activate tab marked as active in HTML
        if (!window.location.hash) {
            const defaultActiveTab = document.querySelector('.tab-btn.active');
            if (defaultActiveTab) activateTab(defaultActiveTab.dataset.tab);
        }

        // Listen for internal navigation
        window.addEventListener('hashchange', handleHash);

        // Intercept clicks on links to same page to trigger handleHash
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href*="#"]');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const [linkPage, linkHash] = href.split('#');

            if ((linkPage === currentPage || linkPage === '') && linkHash) {
                // Let hashchange event handle it, just define new hash
            }
        });

    } catch (e) {
        console.error("Error in Tabs:", e);
    }
});
