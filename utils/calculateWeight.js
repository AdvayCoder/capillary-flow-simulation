const calculateWeight = (currentCoords) => {
    if (!Array.isArray(currentCoords)) throw Error('Weights must be an array');
    //calculates diffusion
    //mainWeight is the weight of the main coordinate
    const mainWeight = currentCoords[0].weight;
    const weights = currentCoords.slice(0).map((coord) => coord.weight);
    let weightSum = 0;

    weights.forEach((weight) => {
        weightSum += (weight - mainWeight) / 2;
    });

    return mainWeight + weightSum / 6; //gets average of all diffusion + main weight
};

module.exports = calculateWeight;
