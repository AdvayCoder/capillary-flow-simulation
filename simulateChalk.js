const fs = require('fs');

const runIteration = require('./runIteration.js');
const defineCoords = require('./utils/defineCoords.js');

const CIRCLE_RADIUS = 50;
const STACK_HEIGHT = 50;
const SHOULD_LOG_DATA = true;
const FILE_NAME = './one_chalk.json';

const coords = defineCoords(CIRCLE_RADIUS, STACK_HEIGHT);

if (SHOULD_LOG_DATA === true) {
    const data = {
        circleRadius: CIRCLE_RADIUS,
        stackHeight: STACK_HEIGHT,
        coordsDefinition: coords,
        coordsData: [],
    };

    fs.writeFileSync(FILE_NAME, JSON.stringify(data), 'utf8', (err) => {
        if (err) throw Error('Error writing to file');
    });
}

//initial bottom layer set-up
coords[1].forEach((coord) => {
    coord.weight = 1;
});

//side water simulation to be implemented

let start = Date.now();
//one iteration
for (let i = 0; i < 100; i++) {
    runIteration(
        coords,
        CIRCLE_RADIUS,
        STACK_HEIGHT,
        SHOULD_LOG_DATA,
        FILE_NAME
    );
}

let end = Date.now();

//logs how long the program took to run in seconds
const elapsed = end - start;
console.log(elapsed / 1000);
