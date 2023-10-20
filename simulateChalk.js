const fs = require('fs');

const runIteration = require('./runIteration.js');
const defineCoords = require('./utils/defineCoords.js');
const parseCoordData = require('./utils/parseCoordData');
const getOuterCoords = require('./utils/getOuterCoords.js');
const getUserInput = require('./utils/getUserInput.js');

//user-set simulation constants
const CIRCLE_RADIUS = 10;
const STACK_HEIGHT = 10;
const SHOULD_LOG_DATA = true;
const FILE_NAME = './one_chalk-side-water-10.json';
const TIMES_TO_ITERATE = 200;
const TIMES_TO_LOG = 10;
const SIDE_WATER_FLOW_DECREASE = 1;

const { baseCoords, coords } = defineCoords(
    CIRCLE_RADIUS,
    STACK_HEIGHT,
    SHOULD_LOG_DATA
);

//user set array
const sideWaterCoordsArray = [0, 1, 2, 4, 5, 6, 14, 15, 16, 17, 18, 19, 20];

const outerCoordsArray = getOuterCoords(baseCoords);

console.log(outerCoordsArray);

//after prompted to do so, enter the indexes of the outer coordinates array that you want water to flow through

//initial bottom layer set-up
coords[0].forEach((coord) => {
    coord.weight = 1;
});

//side water simulation to be implemented

const start = Date.now();

const logArray = [];

let sideWaterStack = 0;

for (let i = 0; i < TIMES_TO_ITERATE; i++) {
    if (i % (TIMES_TO_ITERATE / STACK_HEIGHT) === 0) {
        for (let z = sideWaterStack; z >= 0; z--) {
            sideWaterCoordsArray.forEach((indexVal) => {
                const outerCoord = outerCoordsArray[indexVal];
                coords[z].forEach((coord) => {
                    if (coord.x === outerCoord.x && coord.y === outerCoord.y) {
                        coord.weight = 1;
                    }
                });
            });
        }
        sideWaterStack++;
    }

    runIteration(coords, CIRCLE_RADIUS, STACK_HEIGHT);

    if (
        SHOULD_LOG_DATA === true &&
        i % Math.floor(TIMES_TO_ITERATE / TIMES_TO_LOG) === 0
    ) {
        //checks if it is the 'TIMES_TO_LOG'th iteration
        const parsedCoords = parseCoordData(coords);
        logArray.push(parsedCoords);
    }
}

const writeStream = fs.createWriteStream(FILE_NAME);

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
        itertionInterval: TIMES_TO_ITERATE / STACK_HEIGHT,
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
