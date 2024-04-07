const getCoords = require('./utils/getCoords');
const setWeight = require('./utils/setWeight');

const runIteration = (coords, circleRadius, heightConst) => {
    //! experimental code
    coords[0].forEach((coord, index) => {
        coords[0][index].weight = 1
    })

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
};

module.exports = runIteration;
