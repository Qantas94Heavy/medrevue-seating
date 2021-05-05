'use strict';

let container = document.getElementById('seatmap');
let seatElem = document.getElementById('seatnum');

function createSVGElement(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}

let root = createSVGElement('svg');
// How big it actually is
//root.setAttribute('width', '200px');
//root.setAttribute('height', '200px');
// How big are the internal units of measurement
root.setAttribute('viewBox', '0 0 200 200');
root.style.display = 'block';
//root.style.width = '100%';
//root.style.margin = 'auto';

let stallsLeft = [{
  start: [10, 10],
  offset: [5, 2],
  row: 'AA',
  col: 1,
  repeat: 10,
  disabled: 1
}, {
  start: [10, 20],
  offset: [5, 2],
  row: 'BB',
  col: 1,
  repeat: 10,
  disabled: 1
}, {
  start: [10, 30],
  offset: [5, 2],
  row: 'CC',
  col: 1,
  repeat: 10,
  disabled: 1
}, {
  start: [10, 40],
  offset: [5, 2],
  row: 'DD',
  col: '1A',
  disabled: 0
}, {
  start: [15, 42],
  offset: [5, 2],
  row: 'DD',
  col: '1B',
  disabled: 0
}, {
  start: [20, 44],
  offset: [5, 2],
  row: 'DD',
  col: '1C',
  disabled: 0
}, {
  start: [25, 46],
  offset: [5, 2],
  row: 'DD',
  col: 1,
  repeat: 6,
  disabled: 0
}, {
  start: [10, 50],
  offset: [5, 2],
  row: 'EE',
  col: 'A',
  repeat: 10,
  disabled: 0
}, {
  start: [0, 56],
  offset: [5 * 5 / 3, 2 * 5 / 3],
  row: 'A',
  col: 1,
  repeat: 3,
  disabled: 0,
  wheelchair: 1
}, {
  start: [25, 66],
  offset: [5, 2],
  row: 'A',
  col: 4,
  repeat: 6,
  disabled: 0
}, {
  start: [55, 78],
  offset: [5, 2],
  row: 'A',
  col: '9A',
  disabled: 0
}, {
  start: [60, 80],
  offset: [5, 2],
  row: 'A',
  col: '9B',
  disabled: 0
}, {
  start: [0, 76],
  offset: [5, 2],
  row: 'C',
  col: 1,
  repeat: 13,
  disabled: 0
}, {
  start: [0, 86],
  offset: [5, 2],
  row: 'D',
  col: 1,
  repeat: 13,
  disabled: 0
}, {
  start: [0, 96],
  offset: [5, 2],
  row: 'E',
  col: 1,
  repeat: 12,
  disabled: 0
}, {
  start: [0, 106],
  offset: [5, 2],
  row: 'F',
  col: 1,
  repeat: 12,
  disabled: 0
}, {
  start: [0, 116],
  offset: [5, 2],
  row: 'G',
  col: 1,
  repeat: 11,
  disabled: 0
}, {
  start: [0, 126],
  offset: [5, 2],
  row: 'H',
  col: 1,
  repeat: 11,
  disabled: 0
}, {
  start: [0, 136],
  offset: [5, 2],
  row: 'I',
  col: 1,
  repeat: 11,
  disabled: 0
}, {
  start: [0, 146],
  offset: [5, 2],
  row: 'J',
  col: 1,
  repeat: 11,
  disabled: 0
}, {
  start: [0, 156],
  offset: [5, 2],
  row: 'K',
  col: '1A',
  disabled: 0
}, {
  start: [5, 158],
  offset: [5, 2],
  row: 'K',
  col: 1,
  repeat: 10,
  disabled: 0
}];

let stallsCentre = [{
  start: [78, 30],
  offset: [6, 0],
  row: 'AA',
  col: 11,
  repeat: 9,
  disabled: 1
}, {
  start: [78, 40],
  offset: [6, 0],
  row: 'BB',
  col: 9,
  repeat: 9,
  disabled: 1
}, {
  start: [78, 50],
  offset: [6, 0],
  row: 'CC',
  col: 11,
  repeat: 9,
  disabled: 1
}, {
  start: [78, 60],
  offset: [6, 0],
  row: 'DD',
  col: 7,
  repeat: 9,
  disabled: 0
}, {
  start: [75, 70],
  offset: [6, 0],
  row: 'EE',
  col: 'K',
  disabled: 0
}, {
  start: [81, 70],
  offset: [6, 0],
  row: 'EE',
  col: 1,
  repeat: 9,
  disabled: 0
}, {
  start: [78, 80],
  offset: [6, 0],
  row: 'A',
  col: 10,
  repeat: 9,
  disabled: 0
}, {
  start: [78, 90],
  offset: [6, 0],
  row: 'B',
  col: 1,
  repeat: 9,
  disabled: 0
}, {
  start: [75, 100],
  offset: [6, 0],
  row: 'C',
  col: 14,
  repeat: 10,
  disabled: 0
}, {
  start: [72, 110],
  offset: [6, 0],
  row: 'D',
  col: 14,
  repeat: 11,
  disabled: 0
}, {
  start: [69, 120],
  offset: [6, 0],
  row: 'E',
  col: 13,
  repeat: 12,
  disabled: 0
}, {
  start: [66, 130],
  offset: [6, 0],
  row: 'F',
  col: 13,
  repeat: 13,
  disabled: 0
}, {
  start: [63, 140],
  offset: [6, 0],
  row: 'G',
  col: 12,
  repeat: 14,
  disabled: 0
}, {
  start: [63, 150],
  offset: [6, 0],
  row: 'H',
  col: 12,
  repeat: 14,
  disabled: 0
}, {
  start: [63, 160],
  offset: [6, 0],
  row: 'I',
  col: 12,
  repeat: 14,
  disabled: 0
}, {
  start: [63, 170],
  offset: [6, 0],
  row: 'J',
  col: 12,
  repeat: 14,
  disabled: 0
}, {
  start: [63, 180],
  offset: [6, 0],
  row: 'K',
  col: 11,
  repeat: 14,
  disabled: 0
}, {
  start: [63, 190],
  offset: [6, 0],
  row: 'K',
  col: 1,
  repeat: 3,
  disabled: 0
}, {
  start: [129, 190],
  offset: [6, 0],
  row: 'L',
  col: 4,
  repeat: 3,
  disabled: 0
}];

let stallsRight = [{
  start: [194, 10],
  offset: [-5, 2],
  row: 'AA',
  col: 30,
  repeat: -10,
  disabled: 1
}, {
  start: [194, 20],
  offset: [-5, 2],
  row: 'BB',
  col: 27,
  repeat: -10,
  disabled: 1
}, {
  start: [189, 32],
  offset: [-5, 2],
  row: 'CC',
  col: 29,
  repeat: -9,
  disabled: 1
}, {
  start: [194, 40],
  offset: [-5, 2],
  row: 'DD',
  col: 26,
  repeat: -11,
  disabled: 0
}, {
  start: [194, 50],
  offset: [-5, 2],
  row: 'EE',
  col: 20,
  repeat: -11,
  disabled: 0
}, {
  start: [199, 58],
  offset: [-5, 2],
  row: 'A',
  col: 28,
  disabled: 0,
  wheelchair: 1
}, {
  start: [189, 62],
  offset: [-5, 2],
  row: 'A',
  col: 27,
  repeat: -9,
  disabled: 0
}, {
  start: [144, 80],
  offset: [5, 2],
  row: 'A',
  col: '19B',
  disabled: 0
}, {
  start: [139, 82],
  offset: [5, 2],
  row: 'A',
  col: '19A',
  disabled: 0
}, {
  start: [204, 76],
  offset: [-5, 2],
  row: 'C',
  col: 36,
  repeat: -13,
  disabled: 0
}, {
  start: [204, 86],
  offset: [-5, 2],
  row: 'D',
  col: 37,
  repeat: -13,
  disabled: 0
}, {
  start: [204, 96],
  offset: [-5, 2],
  row: 'E',
  col: 36,
  repeat: -12,
  disabled: 0
}, {
  start: [204, 106],
  offset: [-5, 2],
  row: 'F',
  col: 37,
  repeat: -12,
  disabled: 0
}, {
  start: [204, 116],
  offset: [-5, 2],
  row: 'G',
  col: 37,
  repeat: -11,
  disabled: 0
}, {
  start: [204, 126],
  offset: [-5, 2],
  row: 'H',
  col: 36,
  repeat: -11,
  disabled: 0
}, {
  start: [204, 136],
  offset: [-5, 2],
  row: 'I',
  col: 36,
  repeat: -11,
  disabled: 0
}, {
  start: [204, 146],
  offset: [-5, 2],
  row: 'J',
  col: 36,
  repeat: -11,
  disabled: 0
}, {
  start: [204, 156],
  offset: [-5, 2],
  row: 'K',
  col: 37,
  repeat: -4,
  disabled: 0
}];


let stalls = [...stallsLeft, ...stallsCentre, ...stallsRight];
// STALLS

for (let group of stalls) {
  const repeat = group.repeat || 1;

  for (let i = 0; i < Math.abs(repeat); ++i) {
    let circle = createSVGElement('circle');
    circle.setAttribute('cx', group.start[0] + i * group.offset[0]);
    circle.setAttribute('cy', group.start[1] + i * group.offset[1]);
    circle.setAttribute('r', 2);
    circle.setAttribute('fill', group.disabled ? 'grey' : 'green');

    let col;
    if (typeof group.col === 'number') {
      col = i * Math.sign(repeat) + group.col;
    } else if (typeof group.col === 'string' && group.col.length === 1) {
      col = String.fromCharCode(group.col.charCodeAt(0) + i * Math.sign(repeat));
    } else {
      col = group.col;
    }

    circle.dataset.seatNumber = group.row + col;

    if (['A19'].includes(circle.dataset.seatNumber)) console.log(circle.getAttribute('cx') + ' ' + circle.getAttribute('cy'));
    circle.dataset.disabled = group.disabled;

    root.appendChild(circle);
  }
}
/*
for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
        let circle = createSVGElement('circle');
        circle.setAttribute('cx', 10 + j * 5);
        circle.setAttribute('cy', 10 + i * 10 + j * 2);
        circle.setAttribute('r', 2);
        circle.setAttribute('fill', 'green');
        circle.dataset.seatNumber = String.fromCharCode(65 + i) + (j + 1);
        root.appendChild(circle);
    }
}

for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
        let circle = createSVGElement('circle');
        circle.setAttribute('cx', 10 + 12 * 5 + j * 6);
        circle.setAttribute('cy', 10 + i * 10 + 10 * 2);
        circle.setAttribute('r', 2);
        circle.setAttribute('fill', 'green');
        circle.dataset.seatNumber = String.fromCharCode(65 + i) + (j + 11);
        root.appendChild(circle);
    }
}


for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
        let circle = createSVGElement('circle');
        circle.setAttribute('cx', 10 + 13 * 5 + 10 * 6 + j * 5);
        circle.setAttribute('cy', 10 + i * 10 + (9 - j) * 2);
        circle.setAttribute('r', 2);
        circle.setAttribute('fill', 'green');
        circle.dataset.seatNumber = String.fromCharCode(65 + i) + (j + 21);
        root.appendChild(circle);
    }
}
*/

root.addEventListener('click', e => {
    if (e.target === root) return false;
    console.log(e.target);
    if (e.target.dataset.disabled) return false;

    seatElem.textContent = e.target.dataset.seatNumber;
    e.target.setAttribute('fill', 'red');
});

// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
container.appendChild(root);

let size = root.getBBox();
root.setAttribute('viewBox', `${size.x} ${size.y} ${size.width} ${size.height}`);

// Theatre
// SeatLine
// SeatGroup
// Seat
