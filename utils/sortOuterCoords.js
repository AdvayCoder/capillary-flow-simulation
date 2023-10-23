const sortOuterCoords = (outerCoordsArray, circleRadius) => {
    const upperArray = [];
    const lowerArray = [];

    //for coords not inlcuded in overall check
    outerCoordsArray.forEach((coord) => {
        if (coord.x === circleRadius && coord.y === 0) {
            upperArray.push(coord); //right-most coord
        } else if (coord.x === -circleRadius && coord.y === 0) {
            lowerArray.push(coord); //left-most coord
        }
    });

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
