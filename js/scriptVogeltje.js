'use strict';
let melding = document.getElementById('meldingen'),
  resetBTN = document.getElementById('resetBTN');

function vogelVertaler(clickedButton) {
  let en,
    nl,
    ro,
    vogeltjes = clickedButton.value,
    birds = ['magpie', 'finch', 'sparrow'],
    vogels = ['ekster', 'vink', 'merel'],
    pasari = ['poiana', 'cinteza', 'mierla'];
  switch (vogeltjes) {
    case 'magpie':
      en = birds[0];
      nl = vogels[0];
      ro = pasari[0];
      break;
    case 'finch':
      en = birds[1];
      nl = vogels[1];
      ro = pasari[1];
      break;
    case 'sparrow':
      en = birds[2];
      nl = vogels[2];
      ro = pasari[2];
      break;
  }
  melding.classList.remove('hidden');
  resetBTN.classList.remove('hidden');
  melding.innerHTML =
    'Een ' +
    nl +
    ' noemt men in het Engels een ' +
    en +
    ' en in het Roemeens een ' +
    ro +
    '.';
}
function resetAll() {
  resetBTN.classList.add('hidden');
  melding.classList.add('hidden');
  melding.innerHTML = '';
}
