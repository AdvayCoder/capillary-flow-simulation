const runIteration = require('./runIteration.js');
const defineCoords = require('./utils/defineCoords.js');

const CIRCLE_RADIUS = 100;
const STACK_HEIGHT = 100;

const coords = defineCoords(CIRCLE_RADIUS, STACK_HEIGHT);

//initial bottom layer set-up
coords[1].forEach((coord) => {
    coord.weight = 1;
});

//side water simulation to be implemented

let start = Date.now();
//one iteration
for (let i = 0; i < 100; i++) {
    runIteration(coords, CIRCLE_RADIUS, STACK_HEIGHT);
}

let end = Date.now();

const elapsed = end - start;
console.log(elapsed/1000);
console.log(start)
console.log(end)
