const calculateWeight = require('./calculateWeight');

const setWeight = (coords, currentCoord, index, currentCoords) => {
    if (!Array.isArray(currentCoords)) throw Error('Coords must be an array');

    const newWeight = calculateWeight(currentCoords);

    coords[currentCoord.stack][index].newWeight = newWeight;
};

module.exports = setWeight;
