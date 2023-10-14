const runIteration = require('./runIteration.js');
const defineCoords = require('./utils/defineCoords.js');

const CIRCLE_RADIUS = 100;
const STACK_HEIGHT = 100;

const coords = defineCoords(CIRCLE_RADIUS, STACK_HEIGHT);

//initial bottom layer set-up
coords[0].forEach((coord) => {
    coord.weight = 1;
});

//side water simulation to be implemented

//one iteration
runIteration(coords, CIRCLE_RADIUS, STACK_HEIGHT);
