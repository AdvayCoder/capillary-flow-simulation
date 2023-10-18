const getOuterCoords = (baseCoordsArray) => {
    const outerCoordsArray1 = baseCoordsArray.filter((coord) => {
        let adjacentCount = 0;
        const coordX = coord.x;
        const coordY = coord.y;
        const checkArray = [
            { x: coordX - 1, y: coordY },
            { x: coordX + 1, y: coordY },
            { x: coordX, y: coordY - 1 },
            { x: coordX, y: coordY + 1 },
        ];

        checkArray.forEach((checkCoord) => {
            baseCoordsArray.forEach((coord) => {
                if (coord.x === checkCoord.x && coord.y === checkCoord.y) {
                    adjacentCount++;
                }
            });
        });

        if (adjacentCount < 4) {
            return true;
        } else {
            return false;
        }
    });

    const outerCoordsArray = outerCoordsArray1.map((coord, index) => {
        return {...coord, index}
    })

    return outerCoordsArray;
};

module.exports = getOuterCoords;