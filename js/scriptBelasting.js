'use strict';
let belasting = [0.4, 0.5, 0.6, 0],
  inkomen = document.getElementById('totaalInkomen'),
  caymanRich = document.getElementById('caymanRich'),
  melding = document.getElementById('meldingen'),
  resetBTN = document.getElementById('resetBTN');

function berekenBelasting() {
  let tax = 0,
    totaalBelasting = 0,
    teBelasten = inkomen.value;

  if (teBelasten < 20000) {
    tax = belasting[0];
  } else if (teBelasten >= 20000 && teBelasten <= 50000) {
    tax = belasting[1];
  } else if (teBelasten > 50000 && teBelasten <= 200000) {
    tax = belasting[2];
  } else if (teBelasten > 200000) {
    tax = belasting[3];
  }
  totaalBelasting = teBelasten * tax;
  if (totaalBelasting > 0) {
    melding.classList.remove('hidden');
    resetBTN.classList.remove('hidden');
    melding.innerHTML =
      'Uw totaal belasting is € ' + totaalBelasting.toFixed(2) + '.';
  } else {
    document.body.classList.add('lucky-rain');
    caymanRich.classList.remove('hidden');
    melding.classList.remove('hidden');
    resetBTN.classList.remove('hidden');
    melding.innerHTML = 'U heeft geen belasting te betalen.';
  }
}

function resetAll() {
  resetBTN.classList.add('hidden');
  melding.classList.add('hidden');
  caymanRich.classList.add('hidden');
  document.body.classList.remove('lucky-rain');
  melding.innerHTML = '';
  inkomen.value = '';
}
