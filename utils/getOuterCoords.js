const getOuterCoords = (baseCoordsArray) => {
    const adjacentCountArray = [];
    const outerCoordsArray1 = baseCoordsArray.filter((coord) => {
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

        checkArray.forEach((checkCoord, checkIndex) => {
            baseCoordsArray.forEach((coord) => {
                if (coord.x === checkCoord.x && coord.y === checkCoord.y) {
                    if(checkIndex === 3) {
                        hasBelowCoord === true;
                    } else if(checkIndex === 4) {
                        hasAboveCoord = true;
                    }
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

    const outerCoordsArray = outerCoordsArray1.map((coord, index) => {
        let flow = null;
        if (coord.x > 0 && coord.y > 0) {
            //quadrant 1
            if (adjacentCountArray[index] === 2) {
                flow = 2; //left-down
            }

            if(adjacentCountArray[index] === 3 && hasAboveCoord) {
                flow = 1; //left
            } else {
                flow = 3; //down
            }
        }

        if (coord.x < 0 && coord.y > 0) {
            //quadrant 2
            if (adjacentCountArray[index] === 2) {
                flow = 4; //right-down
            }

            if(adjacentCountArray[index] === 3 && hasAboveCoord) {
                flow = 5; //right
            } else {
                flow = 3;
            }
        }

        if (coord.x < 0 && coord.y < 0) {
            //quadrant 3
            if (adjacentCountArray[index] === 2) {
                flow = 6; //right-down
            }

            if(adjacentCountArray[index] === 3 && hasBelowCoord) {
                flow = 4; //right
            } else {
                flow = 7;
            }
        }

        if (coord.x > 0 && coord.y < 0) {
            //quadrant 4
            if (adjacentCountArray[index] === 2) {
                flow = 8; //right-down
            }

            if(adjacentCountArray[index] === 3 && hasBelowCoord) {
                flow = 1; //left
            } else {
                flow = 7;
            }
        }

        if(coord.x === 0 && coord.y > 0){
            flow = 3;//down
        }

        if(coord.x === 0 && coord.y < 0){
            flow = 7;//up
        }

        if(coord.x > 0 && coord.y === 0){
            flow = 1;//left
        }

        if(coord.x < 0 && coord.y === 0){
            flow = 5;//left
        }

        return { ...coord, index, flow };
    });

    return outerCoordsArray;
};

module.exports = getOuterCoords;
