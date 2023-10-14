const calculateWeight = require('./calculateWeight');

const setWeight = (currentCoords) => {
    if (!Array.isArray(currentCoords)) throw Error('Coords must be an array');

    const newWeight = calculateWeight(currentCoords);

};

module.exports = setWeight;
