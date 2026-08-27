/**
 * Seitenweites Verhalten
 *
 * Zwei Kleinigkeiten, die auf jeder Seite gebraucht werden: weiches
 * Springen zu Ankern und die Schaltflaeche zurueck nach oben.
 *
 * Abhaengigkeiten: keine
 */

document.addEventListener('DOMContentLoaded', function () {
    setupAnchorScrolling();
    setupScrollTopButton();
});

/**
 * Sprungmarken weich anfahren. Der Versatz um die Kopfzeilenhoehe ist
 * noetig, weil die Kopfzeile fest steht und das Ziel sonst darunter
 * verschwindet.
 */
function setupAnchorScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();

            const header = document.querySelector('.site-header');
            const headerHeight = header ? header.offsetHeight : 130;

            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });

            // Adresszeile mitfuehren, ohne dass der Browser zusaetzlich springt
            history.pushState(null, '', href);
        });
    });
}

/** Blendet ab 300 Pixel Scrolltiefe eine Schaltflaeche nach oben ein. */
function setupScrollTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Nach oben scrollen');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function () {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
