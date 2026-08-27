/**
 * Konfiguration der oeffentlichen Demo auf janafisenko.de.
 *
 * CoasterCheck bringt einen eigenen Node-Server mit: er holt die Wartezeiten von
 * queue-times.com, die Oeffnungszeiten von themeparks.wiki, verschickt Web-Push
 * und sammelt die Bewertungen aller Geraete ein. Auf GitHub Pages laeuft kein
 * Server, und queue-times.com erlaubt keinen direkten Zugriff aus dem Browser
 * (kein CORS-Header) - der Umweg ueber den eigenen Server ist also nicht
 * optional, sondern der Grund, warum es ihn gibt.
 *
 * null bedeutet darum: kein Backend erreichbar. Alles, was ohne Server geht,
 * laeuft weiter - Fahrten loggen, bewerten, Bestenliste, Trophaeen, Export,
 * Offline-Betrieb. Der Rest ist sichtbar deaktiviert statt stillschweigend tot.
 *
 * Mit laufendem Server: '' fuer dieselbe Herkunft oder die Basis-URL des Servers.
 */
window.CC_API_BASE = null;
