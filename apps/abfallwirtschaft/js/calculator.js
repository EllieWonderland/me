/**
 * Gebuehrenrechner (rechner.html)
 *
 * Stellt aus Grundgebuehr und beliebig vielen Behaeltern die jaehrliche
 * Gebuehr zusammen. Die Preise stehen in data/rechner.xml, gestaffelt nach
 * Abfallart, Behaeltergroesse und Abfuhrrhythmus - drei voneinander
 * abhaengige Auswahlfelder, die nacheinander freigeschaltet werden.
 *
 * Abhaengigkeiten: utils.js (fetchXML)
 */

document.addEventListener('DOMContentLoaded', function () {
    // Der Rechner steckt nur auf rechner.html
    if (!document.getElementById('gebuehrenrechner')) return;

    const typeSelect = document.getElementById('select-type');
    const volumeSelect = document.getElementById('select-volume');
    const rhythmSelect = document.getElementById('select-rhythm');
    const volumeGroup = document.getElementById('group-volume');
    const rhythmGroup = document.getElementById('group-rhythm');
    const addButton = document.getElementById('btn-add-bin');
    const tableBody = document.getElementById('fee-table-body');
    const totalCell = document.getElementById('total-sum');

    let priceTable = {};
    let baseFee = 0;
    let selectedBins = [];

    fetchXML('data/rechner.xml')
        .then(xmlDoc => {
            const statute = xmlDoc.querySelector('gebuehrensatzung');

            baseFee = parseFloat(statute.querySelector('grundgebuehr').getAttribute('wert'));
            const baseFeeCell = document.querySelector('#row-base-fee .price-cell');
            if (baseFeeCell) baseFeeCell.textContent = formatEuro(baseFee);
            updateTotal();

            priceTable = parsePrices(statute);

            // Die Abfallarten stehen erst nach dem Laden zur Wahl
            Object.entries(priceTable).forEach(([key, type]) => {
                typeSelect.appendChild(createOption(key, type.label));
            });
        })
        .catch(error => console.error('Gebuehrensatzung konnte nicht geladen werden:', error));

    // Schritt 1: Abfallart gewaehlt -> Behaeltergroessen anbieten
    typeSelect.addEventListener('change', function () {
        resetSelect(volumeSelect);
        resetSelect(rhythmSelect);
        volumeGroup.classList.add('hidden');
        rhythmGroup.classList.add('hidden');
        addButton.disabled = true;

        const sizes = priceTable[this.value]?.sizes;
        if (!sizes) return;

        Object.entries(sizes).forEach(([key, size]) => {
            volumeSelect.appendChild(createOption(key, size.label));
        });

        volumeSelect.disabled = false;
        volumeGroup.classList.remove('hidden');
        volumeGroup.classList.add('fade-in');
    });

    // Schritt 2: Groesse gewaehlt -> Abfuhrrhythmen mit Preis anbieten
    volumeSelect.addEventListener('change', function () {
        resetSelect(rhythmSelect);
        rhythmGroup.classList.add('hidden');
        addButton.disabled = true;

        const rhythms = priceTable[typeSelect.value]?.sizes[this.value]?.rhythms;
        if (!rhythms) return;

        Object.entries(rhythms).forEach(([key, rhythm]) => {
            const option = createOption(key, `${rhythm.label} (${formatEuro(rhythm.price)})`);
            option.dataset.price = rhythm.price;
            rhythmSelect.appendChild(option);
        });

        rhythmSelect.disabled = false;
        rhythmGroup.classList.remove('hidden');
        rhythmGroup.classList.add('fade-in');
    });

    // Schritt 3: Rhythmus gewaehlt -> Behaelter darf hinzugefuegt werden
    rhythmSelect.addEventListener('change', function () {
        addButton.disabled = this.value === '';
    });

    addButton.addEventListener('click', function () {
        const rhythmOption = rhythmSelect.options[rhythmSelect.selectedIndex];

        selectedBins.push({
            id: Date.now(),
            typeLabel: typeSelect.options[typeSelect.selectedIndex].text,
            volumeLabel: volumeSelect.options[volumeSelect.selectedIndex].text,
            // Der Preis steht in Klammern hinter der Beschriftung und wuerde
            // in der Tabelle sonst doppelt auftauchen
            rhythmLabel: rhythmOption.text.split('(')[0].trim(),
            price: parseFloat(rhythmOption.dataset.price)
        });

        renderTable();

        // Auswahl zuruecksetzen, damit gleich der naechste Behaelter folgen kann
        typeSelect.value = '';
        resetSelect(volumeSelect);
        resetSelect(rhythmSelect);
        volumeGroup.classList.add('hidden');
        rhythmGroup.classList.add('hidden');
        addButton.disabled = true;
    });

    // Die Loeschen-Schaltflaechen entstehen erst mit den Zeilen, darum haengt
    // der Zuhoerer an der Tabelle statt an jeder einzelnen Schaltflaeche
    tableBody.addEventListener('click', function (event) {
        const removeButton = event.target.closest('.remove-btn');
        if (!removeButton) return;

        const id = Number(removeButton.dataset.binId);
        selectedBins = selectedBins.filter(bin => bin.id !== id);
        renderTable();
    });

    /**
     * Liest die Preisstaffel als
     * { Abfallart: { sizes: { Volumen: { rhythms: { Rhythmus } } } } }.
     */
    function parsePrices(statute) {
        const table = {};

        Array.from(statute.getElementsByTagName('gebuehren')).forEach(feeGroup => {
            const sizes = {};

            Array.from(feeGroup.getElementsByTagName('tonne')).forEach(bin => {
                const rhythms = {};

                Array.from(bin.getElementsByTagName('rhythmus')).forEach(rhythm => {
                    rhythms[rhythm.getAttribute('name')] = {
                        label: rhythm.getAttribute('label'),
                        price: parseFloat(rhythm.getAttribute('preis'))
                    };
                });

                sizes[bin.getAttribute('volumen')] = { label: bin.getAttribute('label'), rhythms };
            });

            table[feeGroup.getAttribute('typ')] = { label: feeGroup.getAttribute('label'), sizes };
        });

        return table;
    }

    /** Zeichnet die gewaehlten Behaelter neu; die Grundgebuehr bleibt stehen. */
    function renderTable() {
        tableBody.querySelectorAll('.dynamic-row').forEach(row => row.remove());

        selectedBins.forEach(bin => {
            const row = document.createElement('tr');
            row.className = 'dynamic-row';
            row.innerHTML = `
                <td>${bin.typeLabel}</td>
                <td>${bin.volumeLabel}, ${bin.rhythmLabel}</td>
                <td class="price-cell">${formatEuro(bin.price)}</td>
                <td class="action-cell">
                    <button class="remove-btn" type="button" data-bin-id="${bin.id}"
                            aria-label="Behälter entfernen">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        updateTotal();
    }

    function updateTotal() {
        const sum = selectedBins.reduce((total, bin) => total + bin.price, baseFee);
        totalCell.textContent = formatEuro(sum);
    }
});

/** Setzt ein Auswahlfeld auf den Ausgangszustand zurueck und sperrt es. */
function resetSelect(select) {
    select.innerHTML = '<option value="">-- Bitte wählen --</option>';
    select.disabled = true;
}

function createOption(value, label) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    return option;
}

/** 12.5 wird zu "12,50 €". */
function formatEuro(value) {
    return value.toFixed(2).replace('.', ',') + ' €';
}
