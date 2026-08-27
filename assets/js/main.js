/**
 * janafisenko.de — Verhalten der Startseite
 *
 * Zwei kleine Aufgaben, beide ohne Bibliothek:
 *   1. Farbschema umschalten und die Wahl merken
 *   2. In der linken Navigation den gerade sichtbaren Abschnitt markieren
 *
 * Das anfaengliche Farbschema setzt ein kurzes Skript im <head>, damit die
 * Seite nicht erst hell erscheint und dann umspringt. Faellt diese Datei aus,
 * bleibt die Seite vollstaendig lesbar: nur Umschalter und Markierung fehlen.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_STORAGE_KEY = "theme";

  /** Aktuelles Schema: gesetztes Attribut, sonst die Systemeinstellung. */
  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setupThemeToggle() {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch (error) {
        /* Ohne Speicher (privates Fenster, blockierte Website-Daten)
           gilt die Wahl nur fuer diesen Seitenaufruf. */
      }
    });
  }

  /**
   * Markiert in der Seitenleiste den Abschnitt, der gerade im oberen
   * Drittel des Fensters steht. Der rootMargin blendet oben 10 % und
   * unten 70 % aus, damit immer nur ein Abschnitt als aktuell gilt.
   */
  function setupScrollSpy() {
    if (!("IntersectionObserver" in window)) return;

    var links = Array.prototype.slice.call(document.querySelectorAll(".rail-nav a"));
    var sections = links
      .map(function (link) { return document.querySelector(link.getAttribute("href")); })
      .filter(Boolean);
    if (!sections.length) return;

    var visibleSections = new Set();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });

      // Der erste sichtbare Abschnitt in Dokumentreihenfolge gewinnt.
      var currentSection = sections.filter(function (section) {
        return visibleSections.has(section);
      })[0];

      links.forEach(function (link) {
        var isCurrent = currentSection && link.getAttribute("href") === "#" + currentSection.id;
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-10% 0px -70% 0px", threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  setupThemeToggle();
  setupScrollSpy();
})();
