# Projektstruktur

Dieses Repository ist die Website **janafisenko.de**. Sie wird über GitHub
Pages ausgeliefert, es gibt keinen Build-Schritt: was hier liegt, ist genau
das, was im Browser ankommt.

## Überblick

```
index.html              Die Startseite. Reines HTML, ohne Inline-Stile und -Skripte.
CNAME                   Die eigene Domain für GitHub Pages.

assets/                 Alles, was die Startseite lädt
  css/style.css         Die vollständige Stilvorlage, in 14 nummerierte Abschnitte gegliedert
  js/main.js            Farbschema-Umschalter und Markierung des sichtbaren Abschnitts
  fonts/                Bricolage Grotesque, IBM Plex Sans und IBM Plex Mono als .woff2
  img/                  Porträt und Messefoto
  img/projects/         Screenshots und Symbole der vorgestellten Projekte
  media/                Video zu "Contrasts of Pripyat" samt Standbild

apps/                   Die drei verlinkten Unterseiten
  abfallwirtschaft/     Studienentwurf 3MD2 (siehe unten)
  coastercheck/         Kopie der eigenen PWA, ohne Backend
  henhouse/             Gebaute Fassung des Spiels "Five Nights at Henhouse's"

dokumentation/          Diese Dokumentation
```

## Die Startseite

`index.html` enthält nur noch Auszeichnung. Stilvorlage und Skript liegen
daneben in `assets/`, die Schriften als eigene Dateien in `assets/fonts/`.
Zuvor steckte alles in einer einzigen 208 KB großen Datei, davon rund 142 KB
base64-kodierte Schriften in fünf Zeilen à 30.000 Zeichen.

Ein kurzes Skript im `<head>` setzt das gespeicherte Farbschema, bevor die
Seite zum ersten Mal aufgebaut wird — sonst erschiene sie kurz hell und
spränge dann auf dunkel. Alles Weitere erledigt `assets/js/main.js`, das mit
`defer` geladen wird.

## apps/abfallwirtschaft

Studienentwurf für den Webauftritt der Abfallwirtschaft Landkreis Oldenburg.
Zwölf Seiten, natives JavaScript, Daten in XML. **Dieser Ordner ist der
maßgebliche Stand** — es gibt kein Quellprojekt daneben.

```
*.html                  Die zwölf Seiten
css/style.css           Eine Stilvorlage für alle Seiten
data/*.xml              Inhalte: Termine, Standorte, Infos, Meldungen, Preise
downloads/*.pdf         Merkblätter und Bilanzen
img/                    Logo, Favicon und das Video zum Verschenkmarkt
js/                     Ein Skript je Aufgabe
```

Die Skripte in `js/` werden auf jeder Seite in derselben Reihenfolge
eingebunden. Die ersten drei braucht jede Seite, der Rest kommt nach Bedarf:

| Datei              | Aufgabe                                                     |
| ------------------ | ----------------------------------------------------------- |
| `components.js`    | Kopf- und Fußzeile, Markierung des aktuellen Menüpunkts      |
| `utils.js`         | XML laden, unscharf vergleichen, Nachrichtenkachel bauen     |
| `navigation.js`    | Klappmenü auf schmalen Bildschirmen                          |
| `main.js`          | Weiches Springen zu Ankern, Schaltfläche nach oben           |
| `accessibility.js` | Hoher Kontrast und größere Schrift, dauerhaft gespeichert    |
| `data-loaders.js`  | Füllt die Seiten aus den XML-Daten                           |
| `tabs.js`          | Reiternavigation samt verlinkbaren Ankern                    |
| `search.js`        | Seitensuche über alle XML-Quellen (nur `index.html`)         |
| `calendar.js`      | Abfallkalender nach Gemeinde und Bezirk                      |
| `calculator.js`    | Gebührenrechner                                              |
| `map.js`           | Standortkarte mit Leaflet                                    |
| `forms.js`         | Kontaktformular und die dreizehn Online-Anträge              |

`components.js` steht bewusst an erster Stelle: Kopf- und Fußzeile entstehen
erst zur Laufzeit, und alles, was daran hängt — Klappmenü, Auslöser für
"Darstellung anpassen" —, setzt sie voraus.

**Wichtig:** Die Formulare verschicken nichts. Der Entwurf ist öffentlich
erreichbar, aber keine Seite des Landkreises; Anträge gehören zur zuständigen
Behörde und nicht in ein privates Postfach. Statt zu senden, zeigen die
Formulare die Eingaben als Bestätigung.

Der Abfallkalender in `data/kalender.xml` reicht bis Ende 2027. Läuft der
Zeitraum ab, zeigt `js/calendar.js` die zuletzt bekannten Termine mit einem
Hinweis — dann sollten die Daten fortgeschrieben werden.

## apps/coastercheck und apps/henhouse

Beide Ordner sind **Kopien fremder Projektstände**, keine eigenständigen
Quellen:

- `coastercheck/` stammt aus dem eigenen CoasterCheck-Repository und läuft
  hier ohne Backend. Wartezeiten, Öffnungszeiten und Push brauchen den
  Node-Server des Projekts, den es auf GitHub Pages nicht gibt. Die
  betroffenen Funktionen sind sichtbar deaktiviert statt stillschweigend tot;
  `src/js/config.js` setzt dafür `window.CC_API_BASE = null`.
- `henhouse/` ist eine gebaute Fassung mit minifizierten Bündeln unter
  `assets/` und Fremdbibliotheken unter `vendor/`.

Wer diese Ordner aktualisiert, kopiert den neuen Stand hinein und wendet die
Anpassungen für den Unterordner-Betrieb erneut an: relative Pfade statt
absoluter, angepasster Service-Worker-Bereich und der Rückweg ins Portfolio.
Änderungen an den Quelldateien dieser beiden Ordner gehen beim nächsten
Kopieren verloren.

## Nach Änderungen prüfen

Es gibt keine Testsuite. Vor dem Veröffentlichen lohnt sich der lokale
Durchgang:

```
python -m http.server 8000
```

Dann `http://localhost:8000/` öffnen und die Startseite sowie alle drei
Unterseiten auf 404er und Konsolenfehler durchsehen. Die Fehler, die dabei
erfahrungsgemäß auftauchen, sind absolute Pfade, die im Wurzelverzeichnis
funktionieren und im Unterordner nicht.
