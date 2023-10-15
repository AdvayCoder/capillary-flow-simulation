const getCoords = require('./utils/getCoords');
const logData = require('./utils/logData');
const parseCoordData = require('./utils/parseCoordData');
const setWeight = require('./utils/setWeight');

const runIteration = (
    coords,
    circleRadius,
    heightConst,
    shouldLogData,
    fileName
) => {
    if (shouldLogData === true) {
        //checks that fileName is a string and is not empty
        if (typeof fileName != 'string' || !fileName)
            throw Error('Provide a valid file name.');
    }

    coords.forEach((stack) => {
        stack.forEach((currentCoord, index) => {
            const currentCoords = getCoords(coords, currentCoord, heightConst);
            setWeight(coords, currentCoord, index, currentCoords);
        });
    });

    coords.forEach((stack, stackIndex) => {
        stack.forEach((currentCoord, index) => {
            coords[stackIndex][index].weight = currentCoord.newWeight;
            coords[stackIndex][index].newWeight = 0;
        });
    });

    if (shouldLogData === true) {
        const parsedCoords = parseCoordData(coords);
        logData(fileName, parsedCoords);
    }
};

module.exports = runIteration;
