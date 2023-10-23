const sortOuterCoords = (outerCoordsArray, circleRadius) => {
    const firstQaurter = []; //upper half of system
    const secondQuarter = []; //upper half of system
    const thirdQuarter = []; //lower half of system
    const fourthQuarter = []; //lower half of system

    for (let x = circleRadius; x >= 0; x--) {
        for (let y = 0; y < circleRadius; y++) {
            outerCoordsArray.forEach((coord) => {
                if (x === coord.x && y === coord.y) {
                    firstQaurter.push(coord);
                }
            });
        }
    }

    for (let x = 0; x > -circleRadius; x--) {
        for (let y = circleRadius; y >= 0; y--) {
            outerCoordsArray.forEach((coord) => {
                if (x === coord.x && y === coord.y) {
                    secondQuarter.push(coord);
                }
            });
        }
    }

    for (let x = -circleRadius; x < circleRadius; x++) {
        for (let y = 0; y >= -circleRadius; y--) {
            outerCoordsArray.forEach((coord) => {
                if (x === coord.x && y === coord.y) {
                    thirdQuarter.push(coord);
                }
            });
        }
    }

    for (let x = 0; x < circleRadius; x++) {
        for (let y = -circleRadius; y >= 0; y++) {
            outerCoordsArray.forEach((coord) => {
                if (x === coord.x && y === coord.y) {
                    fourthQuarter.push(coord);
                }
            });
        }
    }

    return firstQaurter.concat(secondQuarter, thirdQuarter, fourthQuarter).map((coord, coordIndex) => {
        return { ...coord, index: coordIndex };
    }); //index is given for user to be able to easily chose the coords for side water flow
};

module.exports = sortOuterCoords;
