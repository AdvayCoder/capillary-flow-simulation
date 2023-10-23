const sortOuterCoords = (outerCoordsArray, circleRadius) => {
    const upperArray = []; //upper half of system
    const lowerArray = []; //lower half of system

    for (let x = circleRadius; x > -circleRadius; x--) {
        for (let y = 0; y <= circleRadius; y++) {
            outerCoordsArray.forEach((coord) => {
                if (x === coord.x && y === coord.y) {
                    upperArray.push(coord);
                }
            });
        }
    }

    for (let x = -circleRadius; x < circleRadius; x++) {
        for (let y = 0; y >= -circleRadius; y--) {
            outerCoordsArray.forEach((coord) => {
                if (x === coord.x && y === coord.y) {
                    lowerArray.push(coord);
                }
            });
        }
    }

    return upperArray.concat(lowerArray).map((coord, coordIndex) => {
        return { ...coord, index: coordIndex };
    }); //index is given for user to be able to easily chose the coords for side water flow
};

module.exports = sortOuterCoords;
