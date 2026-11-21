// Coefficients copied from the uploaded Colab notebook output.
const SLOPE = 15403.291242428066;
const INTERCEPT = -17630.388274696583;
const MIN_BED = 1;
const MAX_BED = 6;

const bedroomInput = document.getElementById('bedrooms');
const rentResult = document.getElementById('rentResult');
const formulaText = document.getElementById('formulaText');

function predictRent() {
  const bed = Number(bedroomInput.value);
  if (!Number.isInteger(bed) || bed < MIN_BED || bed > MAX_BED) {
    alert('Please enter a whole number of bedrooms from 1 to 6.');
    bedroomInput.focus();
    return;
  }
  const prediction = SLOPE * bed + INTERCEPT;
  rentResult.textContent = '৳' + Math.round(prediction).toLocaleString('en-BD');
  formulaText.textContent = `For ${bed} bedroom${bed === 1 ? '' : 's'} · estimated monthly rent`;
}
document.getElementById('predictBtn').addEventListener('click', predictRent);
document.getElementById('minus').addEventListener('click', () => {
  bedroomInput.value = Math.max(MIN_BED, Number(bedroomInput.value || 1) - 1);
  predictRent();
});
document.getElementById('plus').addEventListener('click', () => {
  bedroomInput.value = Math.min(MAX_BED, Number(bedroomInput.value || 1) + 1);
  predictRent();
});
bedroomInput.addEventListener('keydown', e => { if (e.key === 'Enter') predictRent(); });

const labels = [1,2,3,4,5,6];
const estimates = labels.map(bed => SLOPE * bed + INTERCEPT);
if (window.Chart) {
  new Chart(document.getElementById('rentChart'), {
    type: 'line',
    data: {
      labels: labels.map(n => `${n} bedroom${n === 1 ? '' : 's'}`),
      datasets: [{
        label: 'Estimated monthly rent (BDT)',
        data: estimates,
        borderWidth: 3,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: true } },
      scales: {
        y: { beginAtZero: false, title: { display: true, text: 'Rent (BDT)' } },
        x: { title: { display: true, text: 'Number of bedrooms' } }
      }
    }
  });
}
predictRent();