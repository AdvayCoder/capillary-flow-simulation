const getCoords = require('./utils/getCoords');
const setWeight = require('./utils/setWeight');

const runIteration = (coords, circleRadius, heightConst) => {
    coords.forEach((stack) => {
        stack.forEach((currentCoord) => {
            //console.log(currentCoord)
            const currentCoords = getCoords(coords, currentCoord, heightConst);
            //console.log(currentCoords)
            setWeight(currentCoords);
        });
    });

    
};

module.exports = runIteration;
