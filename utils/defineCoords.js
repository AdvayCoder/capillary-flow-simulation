const fs = require('fs');

const defineCoords = (circleRadius, amountStacks, shouldLogData) => {
    if (!Number.isInteger(circleRadius))
        throw Error('Circle Radius must be an intger');
    if (!Number.isInteger(amountStacks))
        throw Error('Amount of Stacks must be an intger');

    const coords = new Array();
    const xyArray = new Array();

    const baseCoords = new Array();

    for (let y = -(circleRadius * circleRadius); y <= circleRadius * circleRadius; y++) {
        for (let x = -(circleRadius * circleRadius); x <= circleRadius * circleRadius; x++) {
            if (x * x + y * y <= circleRadius * circleRadius) {
                if (shouldLogData === true) {
                    baseCoords.push({ x, y });
                }
                xyArray.push({ x, y, weight: 0, newWeight: 0 });
            }
        }
    }

    for (let height = 0; height < amountStacks; height++) {
        //adds stack key for identification later in code
        const markedXYArray = xyArray.map((coord) => {
            return { ...coord, stack: height };
        });

        coords.push(markedXYArray);
    }

    return { baseCoords, coords };
};

module.exports = defineCoords;
