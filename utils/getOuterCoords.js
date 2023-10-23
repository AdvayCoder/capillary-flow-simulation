const getOuterCoords = (baseCoordsArray) => {
    const adjacentCountArray = [];
    const outerCoordsArray = baseCoordsArray.filter((coord) => {
        let adjacentCount = 0;
        let hasAboveCoord = false;
        let hasBelowCoord = false;
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
            adjacentCountArray.push({adjacentCount, hasAboveCoord, hasBelowCoord});
            return true;
        } else {
            return false;
        }
    });

    return outerCoordsArray;
};

module.exports = getOuterCoords;
