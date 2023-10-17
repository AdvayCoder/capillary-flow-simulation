const fs = require('fs');

const runIteration = require('./runIteration.js');
const defineCoords = require('./utils/defineCoords.js');
const logData = require('./utils/logData');
const parseCoordData = require('./utils/parseCoordData');

const CIRCLE_RADIUS = 50;
const STACK_HEIGHT = 20;
const SHOULD_LOG_DATA = true;
const FILE_NAME = './one_chalk.json';
const TIMES_TO_ITERATE = 200;
const TIMES_TO_LOG = 10;

const { baseCoords, coords } = defineCoords(
    CIRCLE_RADIUS,
    STACK_HEIGHT,
    SHOULD_LOG_DATA
);

//initial bottom layer set-up
coords[0].forEach((coord) => {
    coord.weight = 1;
});

//side water simulation to be implemented

const start = Date.now();

const logArray = [];

for (let i = 0; i < TIMES_TO_ITERATE; i++) {
    runIteration(coords, CIRCLE_RADIUS, STACK_HEIGHT);

    if (
        SHOULD_LOG_DATA === true &&
        i % Math.floor(TIMES_TO_ITERATE / TIMES_TO_LOG) === 0
    ) {
        //checks if it is the 'TIMES_TO_LOG'th iteration
        const parsedCoords = parseCoordData(coords);
        logArray.push(parsedCoords)
    }
}

console.log('log array', logArray)

const writeStream = fs.createWriteStream(FILE_NAME);
const readStream = fs.createReadStream(FILE_NAME);

fs.open(FILE_NAME, 'w', (err) => {
    if (err) throw Error('Error creating file');
});

writeStream.write('');

if (SHOULD_LOG_DATA === true) {
    console.log('data logged');
    const data = {
        circleRadius: CIRCLE_RADIUS,
        stackHeight: STACK_HEIGHT,
        iterations: TIMES_TO_ITERATE,
        coordsDefinition: baseCoords,
        coordsData: logArray,
    };

    writeStream.write(JSON.stringify(data), 'utf8', (err) => {
        if (err) throw Error('Error writing to file');
    });
}

const end = Date.now();

//logs how long the program took to run in seconds
const elapsed = end - start;
console.log(`${elapsed / 1000} sec`);
