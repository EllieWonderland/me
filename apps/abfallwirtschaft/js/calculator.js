/**
 * Calculator.js - Fee calculator for rechner.html
 * Allows users to calculate their estimated waste fees based on bin types and sizes.
 * Loads fee structure from 'rechner.xml' dynamically.
 * Dependencies: utils.js (fetchXML)
 */

document.addEventListener("DOMContentLoaded", function () {
    try {
        const calcContainer = document.getElementById('gebuehrenrechner');
        if (!calcContainer) return;

        // UI References
        const calcType = document.getElementById('select-type');
        const calcVolume = document.getElementById('select-volume');
        const calcRhythm = document.getElementById('select-rhythm');
        const groupVolume = document.getElementById('group-volume');
        const groupRhythm = document.getElementById('group-rhythm');
        const btnAddBin = document.getElementById('btn-add-bin');
        const feeTableBody = document.getElementById('fee-table-body');
        const totalSumEl = document.getElementById('total-sum');

        // State variables
        let pricesData = {};
        let currentTotal = 0;
        let baseFee = 0;
        let selectedBins = [];

        // 1. Load fee structure from XML
        fetchXML('rechner.xml').then(xmlDoc => {
            const satzung = xmlDoc.querySelector('gebuehrensatzung');

            // Get base fee (Grundgebühr)
            baseFee = parseFloat(satzung.querySelector('grundgebuehr').getAttribute('wert'));

            // Display base fee
            const baseRowPrice = document.querySelector('#row-base-fee .price-cell');
            if (baseRowPrice) baseRowPrice.textContent = baseFee.toFixed(2).replace('.', ',') + " €";
            currentTotal = baseFee;
            updateTotal();

            // Store fee options (Hierarchical: Type -> Tonne -> Rhythm)
            Array.from(satzung.getElementsByTagName('gebuehren')).forEach(geb => {
                const typeKey = geb.getAttribute('typ');
                const typeLabel = geb.getAttribute('label');

                const opt = document.createElement('option');
                opt.value = typeKey;
                opt.textContent = typeLabel;
                calcType.appendChild(opt);

                pricesData[typeKey] = {
                    label: typeLabel,
                    sizes: {}
                };

                Array.from(geb.getElementsByTagName('tonne')).forEach(tonne => {
                    const volKey = tonne.getAttribute('volumen');
                    const volLabel = tonne.getAttribute('label');

                    pricesData[typeKey].sizes[volKey] = {
                        label: volLabel,
                        rhythms: {}
                    };

                    Array.from(tonne.getElementsByTagName('rhythmus')).forEach(rhythm => {
                        const rKey = rhythm.getAttribute('name');
                        const rLabel = rhythm.getAttribute('label');
                        const rPrice = parseFloat(rhythm.getAttribute('preis'));

                        pricesData[typeKey].sizes[volKey].rhythms[rKey] = {
                            label: rLabel,
                            price: rPrice
                        };
                    });
                });
            });
        }).catch(e => console.error("Error loading preise.xml:", e));

        // 2. Cascading dropdowns logic

        // Step 1: User selects type -> Load volumes
        calcType.addEventListener('change', function () {
            resetSelect(calcVolume);
            resetSelect(calcRhythm);
            groupVolume.classList.add('hidden');
            groupRhythm.classList.add('hidden');
            btnAddBin.disabled = true;

            const type = this.value;
            if (!type || !pricesData[type]) return;

            const sizes = pricesData[type].sizes;
            for (const [key, val] of Object.entries(sizes)) {
                const opt = document.createElement('option');
                opt.value = key;
                opt.textContent = val.label;
                calcVolume.appendChild(opt);
            }

            calcVolume.disabled = false;
            groupVolume.classList.remove('hidden');
            groupVolume.classList.add('fade-in');
        });

        // Step 2: User selects volume -> Load rhythms
        calcVolume.addEventListener('change', function () {
            resetSelect(calcRhythm);
            groupRhythm.classList.add('hidden');
            btnAddBin.disabled = true;

            const type = calcType.value;
            const size = this.value;

            if (!type || !size || !pricesData[type]?.sizes[size]) return;

            const rhythms = pricesData[type].sizes[size].rhythms;
            for (const [key, val] of Object.entries(rhythms)) {
                const opt = document.createElement('option');
                opt.value = key;
                opt.textContent = `${val.label} (${formatEuro(val.price)})`;
                opt.dataset.price = val.price;
                calcRhythm.appendChild(opt);
            }

            calcRhythm.disabled = false;
            groupRhythm.classList.remove('hidden');
            groupRhythm.classList.add('fade-in');
        });

        // Step 3: User selects rhythm -> Enable add button
        calcRhythm.addEventListener('change', function () {
            btnAddBin.disabled = this.value === "";
        });

        // 3. Add bin and calculations
        btnAddBin.addEventListener('click', function () {
            const typeOpt = calcType.options[calcType.selectedIndex];
            const volOpt = calcVolume.options[calcVolume.selectedIndex];
            const rhyOpt = calcRhythm.options[calcRhythm.selectedIndex];

            const newItem = {
                id: Date.now(),
                typeLabel: typeOpt.text,
                volLabel: volOpt.text,
                rhythmLabel: rhyOpt.text.split('(')[0].trim(),
                price: parseFloat(rhyOpt.dataset.price)
            };

            selectedBins.push(newItem);
            renderTable();

            // Reset selection for next input
            calcType.value = "";
            resetSelect(calcVolume);
            resetSelect(calcRhythm);
            groupVolume.classList.add('hidden');
            groupRhythm.classList.add('hidden');
            btnAddBin.disabled = true;
        });

        // Helper functions

        function resetSelect(sel) {
            sel.innerHTML = '<option value="">-- Bitte wählen --</option>';
            sel.disabled = true;
        }

        function formatEuro(val) {
            return val.toFixed(2).replace('.', ',') + ' €';
        }

        // Re-render the user's selected list
        function renderTable() {
            const rows = feeTableBody.querySelectorAll('.dynamic-row');
            rows.forEach(r => r.remove());

            selectedBins.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'dynamic-row';
                tr.innerHTML = `
                    <td>${item.typeLabel}</td>
                    <td>${item.volLabel}, ${item.rhythmLabel}</td>
                    <td class="price-cell">${formatEuro(item.price)}</td>
                    <td style="text-align:right;">
                        <button class="remove-btn" onclick="removeBin(${item.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;
                feeTableBody.appendChild(tr);
            });
            updateTotal();
        }

        function updateTotal() {
            let sum = baseFee;
            selectedBins.forEach(b => sum += b.price);
            totalSumEl.textContent = formatEuro(sum);
        }

        // Expose remove function globally for onclick attribute
        window.removeBin = function (id) {
            selectedBins = selectedBins.filter(item => item.id !== id);
            renderTable();
        };

    } catch (e) {
        console.error("Error in Calculator:", e);
    }
});
