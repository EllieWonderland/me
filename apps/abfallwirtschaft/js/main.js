/**
 * Main.js
 * Handles global behaviors like smooth scrolling, scroll-to-top button, and lazy loading.
 * Dependencies: None
 */

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    // Account for fixed header height
                    const headerHeight = document.querySelector('.site-header').offsetHeight || 130;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL hash without causing a jump
                    history.pushState(null, null, href);
                }
            }
        });
    });
});

// Scroll to top button
document.addEventListener("DOMContentLoaded", function () {
    // Inject button dynamically
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scroll-top-btn";
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(scrollTopBtn);

    // Toggle visibility based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    // Scroll action
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Lazy loading fallback
// Uses native lazy loading if supported, otherwise loads lazysizes library
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
} else {
    // Dynamically load lazysizes if native lazy loading is not supported
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// FontAwesome configuration
window.FontAwesomeConfig = {
    searchPseudoElements: true
};
