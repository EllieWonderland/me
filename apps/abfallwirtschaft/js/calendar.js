/**
 * Abfallkalender
 *
 * Zeigt die naechsten Abfuhrtermine fuer eine Gemeinde und einen Bezirk.
 * Die Termine stehen in data/kalender.xml und reichen bis Ende 2027; laeuft
 * dieser Zeitraum ab, zeigt der Kalender die zuletzt bekannten Termine mit
 * einem Hinweis statt einer leeren Seite.
 *
 * Abhaengigkeiten: utils.js (fetchXML)
 */

// Beschriftung, Farbklasse und Symbol je Abfallart
const WASTE_TYPES = {
    rest:   { label: 'Restabfall',  className: 'tonne-rest',   icon: 'fa-trash' },
    bio:    { label: 'Bioabfall',   className: 'tonne-bio',    icon: 'fa-leaf' },
    papier: { label: 'Altpapier',   className: 'tonne-papier', icon: 'fa-newspaper' },
    gelb:   { label: 'Gelbe Tonne', className: 'tonne-gelb',   icon: 'fa-recycle' }
};

const MONTH_NAMES = ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'];
const DAY_NAMES = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];

// So viele kommende Termine zeigt der Kalender auf einmal
const UPCOMING_LIMIT = 8;

document.addEventListener('DOMContentLoaded', function () {
    const municipalitySelect = document.getElementById('cal-gemeinde');
    const districtSelect = document.getElementById('cal-bezirk');
    const showButton = document.getElementById('btn-show-calendar');
    const output = document.getElementById('calendar-output');
    const grid = document.getElementById('calendar-grid');

    // Der Kalender steckt nicht auf jeder Seite
    if (!municipalitySelect) return;

    fetchXML('data/kalender.xml')
        .then(xmlDoc => {
            const calendarData = parseCalendar(xmlDoc);

            // Die Bedienung erst verdrahten, wenn die Daten da sind
            municipalitySelect.addEventListener('change', function () {
                fillDistricts(districtSelect, calendarData[this.value]);
                showButton.disabled = true;
                if (output) output.classList.add('hidden');
            });

            districtSelect.addEventListener('change', function () {
                showButton.disabled = !this.value;
            });

            showButton.addEventListener('click', function () {
                const dates = calendarData[municipalitySelect.value]?.[districtSelect.value];
                if (!dates || !grid || !output) return;

                output.classList.remove('hidden');
                renderDates(grid, dates);
                output.scrollIntoView({ behavior: 'smooth' });
            });
        })
        .catch(error => console.error('Abfallkalender konnte nicht geladen werden:', error));
});

/**
 * Liest kalender.xml in die Form { Gemeinde: { Bezirk: [Termin, ...] } }.
 *
 * @param {Document} xmlDoc Das geparste Dokument
 * @returns {Object} Termine nach Gemeinde und Bezirk
 */
function parseCalendar(xmlDoc) {
    const calendarData = {};

    Array.from(xmlDoc.getElementsByTagName('gemeinde')).forEach(municipality => {
        const districts = {};

        Array.from(municipality.getElementsByTagName('bezirk')).forEach(district => {
            districts[district.getAttribute('name')] =
                Array.from(district.getElementsByTagName('termin')).map(entry => ({
                    date: new Date(entry.getAttribute('date')),
                    type: entry.getAttribute('type')
                }));
        });

        calendarData[municipality.getAttribute('name')] = districts;
    });

    return calendarData;
}

/** Fuellt die Bezirksauswahl passend zur gewaehlten Gemeinde. */
function fillDistricts(districtSelect, districts) {
    districtSelect.innerHTML = '<option value="">-- Bitte wählen --</option>';
    districtSelect.disabled = true;
    if (!districts) return;

    Object.keys(districts).forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        districtSelect.appendChild(option);
    });

    districtSelect.disabled = false;
}

/** Zeigt die naechsten Termine, ersatzweise die zuletzt bekannten. */
function renderDates(grid, dates) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    grid.innerHTML = '';

    let shown = dates
        .filter(entry => entry.date >= today)
        .sort((a, b) => a.date - b.date)
        .slice(0, UPCOMING_LIMIT);

    if (shown.length === 0) {
        // Der hinterlegte Zeitraum ist abgelaufen: statt einer Sackgasse die
        // letzten bekannten Termine zeigen und sagen, warum.
        shown = [...dates].sort((a, b) => b.date - a.date).slice(0, 4).reverse();

        if (shown.length === 0) {
            grid.innerHTML = '<p>Für diesen Bezirk liegen keine Termine vor.</p>';
            return;
        }

        grid.innerHTML =
            '<p class="cal-hint">Der hinterlegte Abfuhrzeitraum ist abgelaufen. ' +
            'Hier die zuletzt bekannten Termine:</p>';
    }

    shown.forEach(entry => grid.appendChild(createDateCard(entry)));
}

/** Baut die Kachel fuer einen einzelnen Abfuhrtermin. */
function createDateCard(entry) {
    const type = WASTE_TYPES[entry.type] || { label: entry.type, className: '', icon: 'fa-calendar' };
    const date = entry.date;

    const card = document.createElement('div');
    card.className = 'cal-date-card';
    card.innerHTML = `
        <div class="cal-day">
            <span class="cal-date-full">${DAY_NAMES[date.getDay()]}, ${date.getDate()}. ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}</span>
        </div>
        <div class="cal-info">
            <span class="cal-badge ${type.className}"><i class="fas ${type.icon}"></i> ${type.label}</span>
        </div>
    `;

    return card;
}
