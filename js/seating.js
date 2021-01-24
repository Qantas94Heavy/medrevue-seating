'use strict';

let container = document.getElementsByTagName('main')[0];

function createSVGElement(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}

let root = createSVGElement('svg');
// How big it actually is
root.setAttribute('width', 600);
root.setAttribute('height', 400);
// How big are the internal units of measurement
root.setAttribute('viewBox', '0 0 300 200');

// STALLS
for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
        let circle = createSVGElement('circle');
        circle.setAttribute('cx', 10 + j * 5);
        circle.setAttribute('cy', 10 + i * 10 + j * 2);
        circle.setAttribute('r', 2);
        circle.setAttribute('fill', 'green');
        root.appendChild(circle);
    }
}

for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
        let circle = createSVGElement('circle');
        circle.setAttribute('cx', 10 + 11 * 5 + j * 6);
        circle.setAttribute('cy', 10 + i * 10 + 10 * 2);
        circle.setAttribute('r', 2);
        circle.setAttribute('fill', 'green');
        root.appendChild(circle);
    }
}

for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
        let circle = createSVGElement('circle');
        circle.setAttribute('cx', 10 + 12 * 5 + 10 * 6 + j * 5);
        circle.setAttribute('cy', 10 + i * 10 + (9 - j) * 2);
        circle.setAttribute('r', 2);
        circle.setAttribute('fill', 'green');
        root.appendChild(circle);
    }
}

root.addEventListener('mouseover', e => {
    if (e.target === root) return false;
    console.log(e.target);
    e.target.setAttribute('fill', 'red');
});


// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
container.appendChild(root);

// Theatre
// SeatLine
// SeatGroup
// Seat
