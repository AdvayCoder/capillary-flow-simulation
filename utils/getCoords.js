const getCoords = (coords, currentCoord, heightConst) => {
    //gets adjacent coords
    //coords is the entire set of coordinates

    const adjacentCoords = new Array();

    //console.log(coords)
    const coordX = currentCoord.x;
    const coordY = currentCoord.y;
    const stackHeight = currentCoord.stack;
    
   // console.log(coordX, coordY, stackHeight)

    const checkArray = [
        { x: coordX - 1, y: coordY },
        { x: coordX + 1, y: coordY },
        { x: coordX, y: coordY - 1 },
        { x: coordX, y: coordY + 1 },
    ];

    checkArray.forEach((checkCoord) => {
        coords[stackHeight].forEach((coord) => {
            if (coord.x === checkCoord.x && coord.y === checkCoord.y) {
                adjacentCoords.push(coord);
            }
        });
    });

    if (stackHeight > 0 && stackHeight < (heightConst - 1)) {
        //in middle
        coords[stackHeight + 1].forEach((coord) => {
            if (coord.x === coordX && coord.y === coordY) {
                adjacentCoords.push(coord);
            }
        });

        coords[stackHeight - 1].forEach((coord) => {
            if (coord.x === coordX && coord.y === coordY) {
                adjacentCoords.push(coord);
            }
        });
    } else if (stackHeight === (heightConst - 1)) {
        //top layer
        coords[stackHeight - 1].forEach((coord) => {
            if (coord.x === coordX && coord.y === coordY) {
                adjacentCoords.push(coord);
            }
        });
    } else if (stackHeight === 0) {
        //bottom layer
        coords[stackHeight + 1].forEach((coord) => {
            if (coord.x === coordX && coord.y === coordY) {
                adjacentCoords.push(coord);
            }
        });
    }

    return adjacentCoords;
};

module.exports = getCoords;
