'use strict';
let USDnaarEuro = 0.95,
  melding = document.getElementById('meldingen'),
  resetBTN = document.getElementById('resetBTN');
const bitWaarde = document.getElementById('bitWaarde');
const aantalBitcoins = document.getElementById('aantalBitcoins');

function omzetNaarEuro() {
  let totaalEuro = aantalBitcoins.value * bitWaarde.value * USDnaarEuro;
  melding.classList.remove('hidden');
  resetBTN.classList.remove('hidden');
  melding.innerHTML =
    aantalBitcoins.value + ' bitcoins is € ' + totaalEuro.toFixed(2) + '.';
}

function resetAll() {
  resetBTN.classList.add('hidden');
  melding.classList.add('hidden');
  melding.innerHTML = '';
  aantalBitcoins.value = '';
  bitWaarde.value = '';
}
