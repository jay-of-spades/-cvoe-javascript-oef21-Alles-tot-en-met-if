'use strict';
let superman = document.getElementById('superman'),
  batman = document.getElementById('batman'),
  spiderman = document.getElementById('spiderman'),
  bw = document.getElementById('bw'),
  sepia = document.getElementById('sepia'),
  normal = document.getElementById('normal');

function show(clickedImage) {
  removeHidden();
  if (clickedImage.id === 'superman') {
    console.log('superman');
    superman.classList.remove('thumbnail');
    superman.classList.add('full-size');
    batman.classList.add('hidden');
    spiderman.classList.add('hidden');
  } else if (clickedImage.id === 'batman') {
    console.log('batman');
    batman.classList.remove('thumbnail');
    batman.classList.add('full-size');
    superman.classList.add('hidden');
    spiderman.classList.add('hidden');
  } else if (clickedImage.id === 'spiderman') {
    console.log('spiderman');
    spiderman.classList.remove('thumbnail');
    spiderman.classList.add('full-size');
    superman.classList.add('hidden');
    batman.classList.add('hidden');
  }
}

function filtering(filter) {
  if (filter.id === 'bw') {
    console.log('bw');
    superman.classList.add('bw');
    batman.classList.add('bw');
    spiderman.classList.add('bw');
  } else if (filter.id === 'sepia') {
    console.log('sepia');
    superman.classList.add('sepia');
    batman.classList.add('sepia');
    spiderman.classList.add('sepia');
  } else if (filter.id === 'normal') {
    console.log('normal');
    superman.classList.remove('bw');
    superman.classList.remove('sepia');
    batman.classList.remove('bw');
    batman.classList.remove('sepia');
    spiderman.classList.remove('bw');
    spiderman.classList.remove('sepia');
  }
}

function removeHidden() {
  bw.classList.remove('hidden');
  sepia.classList.remove('hidden');
  normal.classList.remove('hidden');
  resetBTN.classList.remove('hidden');
}

function resetAll() {
  superman.classList.remove('full-size');
  superman.classList.add('thumbnail');
  superman.classList.remove('bw');
  superman.classList.remove('sepia');
  batman.classList.remove('full-size');
  batman.classList.add('thumbnail');
  batman.classList.remove('bw');
  batman.classList.remove('sepia');
  spiderman.classList.remove('full-size');
  spiderman.classList.add('thumbnail');
  spiderman.classList.remove('bw');
  spiderman.classList.remove('sepia');
  superman.classList.remove('hidden');
  batman.classList.remove('hidden');
  spiderman.classList.remove('hidden');
  bw.classList.add('hidden');
  sepia.classList.add('hidden');
  normal.classList.add('hidden');
  resetBTN.classList.add('hidden');
}
