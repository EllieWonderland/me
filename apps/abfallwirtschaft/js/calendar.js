/**
 * Calendar.js
 * Implements the waste collection calendar logic.
 * Parses 'kalender.xml' and provides location-based filtering for collection dates.
 * Dependencies: utils.js (fetchXML)
 */

document.addEventListener("DOMContentLoaded", function () {
    try {
        const calGemeinde = document.getElementById('cal-gemeinde');
        const calBezirk = document.getElementById('cal-bezirk');
        const btnShowCalendar = document.getElementById('btn-show-calendar');
        const calendarOutput = document.getElementById('calendar-output');
        const calendarGrid = document.getElementById('calendar-grid');

        // Only run if calendar elements exist on the page
        if (!calGemeinde) return;

        // Data store for parsed XML
        let calendarData = {};

        // 1. Fetch and parse XML data
        fetchXML('kalender.xml').then(xmlDoc => {
            const gemeinden = xmlDoc.getElementsByTagName('gemeinde');

            // Iterate through communities (Gemeinden)
            Array.from(gemeinden).forEach(g => {
                const gName = g.getAttribute('name');
                calendarData[gName] = {};

                // Iterate through districts (Bezirke)
                const bezirke = g.getElementsByTagName('bezirk');
                Array.from(bezirke).forEach(b => {
                    const bName = b.getAttribute('name');
                    calendarData[gName][bName] = [];

                    // Parse appointments (Termine)
                    const termine = b.getElementsByTagName('termin');
                    Array.from(termine).forEach(t => {
                        calendarData[gName][bName].push({
                            date: t.getAttribute('date'),
                            type: t.getAttribute('type')
                        });
                    });
                });
            });

            // 2. Setup event listeners (only after data is loaded)

            // Handle community selection
            calGemeinde.addEventListener('change', function () {
                // Reset district select
                calBezirk.innerHTML = '<option value="">-- Bitte wählen --</option>';
                calBezirk.disabled = true;
                btnShowCalendar.disabled = true;
                if (calendarOutput) calendarOutput.classList.add('hidden');

                const gName = this.value;
                if (gName && calendarData[gName]) {
                    // Populate districts based on selected community
                    Object.keys(calendarData[gName]).forEach(bName => {
                        const opt = document.createElement('option');
                        opt.value = bName;
                        opt.textContent = bName;
                        calBezirk.appendChild(opt);
                    });
                    calBezirk.disabled = false;
                }
            });

            // Handle district selection
            calBezirk.addEventListener('change', function () {
                btnShowCalendar.disabled = !this.value;
            });

            // Handle show calendar button click
            btnShowCalendar.addEventListener('click', function () {
                if (calendarOutput) calendarOutput.classList.remove('hidden');
                if (calendarGrid) {
                    calendarGrid.innerHTML = '';

                    const gName = calGemeinde.value;
                    const bName = calBezirk.value;

                    if (!gName || !bName || !calendarData[gName] || !calendarData[gName][bName]) return;

                    const allDates = calendarData[gName][bName];
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    // Filter for future dates, sort, and limit to 8 entries
                    const upcoming = allDates.map(item => {
                        return {
                            ...item,
                            dateObj: new Date(item.date)
                        };
                    })
                        .filter(item => item.dateObj >= today)
                        .sort((a, b) => a.dateObj - b.dateObj)
                        .slice(0, 8);

                    // Wenn der hinterlegte Zeitraum abgelaufen ist, statt einer
                    // Sackgasse die letzten bekannten Termine zeigen und sagen, warum.
                    if (upcoming.length === 0) {
                        const letzte = allDates
                            .map(item => ({ ...item, dateObj: new Date(item.date) }))
                            .sort((a, b) => b.dateObj - a.dateObj)
                            .slice(0, 4)
                            .reverse();
                        if (letzte.length === 0) {
                            calendarGrid.innerHTML = '<p>Für diesen Bezirk liegen keine Termine vor.</p>';
                            return;
                        }
                        calendarGrid.innerHTML =
                            '<p class="cal-hint">Der hinterlegte Abfuhrzeitraum ist abgelaufen. ' +
                            'Hier die zuletzt bekannten Termine:</p>';
                        upcoming.push(...letzte);
                    }

                    // Configuration for waste types (labels, colors, icons)
                    const typeLabels = {
                        'rest': { l: 'Restabfall', c: 'tonne-rest', i: 'fa-trash' },
                        'bio': { l: 'Bioabfall', c: 'tonne-bio', i: 'fa-leaf' },
                        'papier': { l: 'Altpapier', c: 'tonne-papier', i: 'fa-newspaper' },
                        'gelb': { l: 'Gelbe Tonne', c: 'tonne-gelb', i: 'fa-recycle' }
                    };

                    const months = ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'];
                    const days = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];

                    // Render calendar cards
                    upcoming.forEach(item => {
                        const info = typeLabels[item.type] || { l: item.type, c: '', i: 'fa-calendar' };
                        const d = item.dateObj;

                        const dayName = days[d.getDay()];
                        const monthName = months[d.getMonth()];
                        const year = d.getFullYear();
                        const dayNum = d.getDate();

                        const div = document.createElement('div');
                        div.className = 'cal-date-card';
                        div.innerHTML = `
                            <div class="cal-day">
                                <span class="cal-date-full">${dayName}, ${dayNum}. ${monthName} ${year}</span>
                            </div>
                            <div class="cal-info">
                                <span class="cal-badge ${info.c}"><i class="fas ${info.i}"></i> ${info.l}</span>
                            </div>
                        `;
                        calendarGrid.appendChild(div);
                    });

                    // Smooth scroll to results
                    calendarOutput.scrollIntoView({ behavior: 'smooth' });
                }
            });

        }).catch(e => console.error("Error loading kalender.xml:", e));

    } catch (e) {
        console.error("Error in Calendar:", e);
    }
});
