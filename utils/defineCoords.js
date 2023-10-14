const defineCoords = (circleRadius, amountStacks) => {
    if (!Number.isInteger(circleRadius))
        throw Error('Circle Radius must be an intger');
    if (!Number.isInteger(amountStacks))
        throw Error('Amount of Stacks must be an intger');

    const coords = new Array();
    const xyArray = new Array();

    for (let y = -circleRadius; y <= circleRadius; y++) {
        for (let x = -circleRadius; x <= circleRadius; x++) {
            if (x * x + y * y <= circleRadius) {
                xyArray.push({ x, y, weight: 0, newWeight: 0 });
            }
        }
    }


    for (let height = 0; height <= amountStacks; height++) {
        //adds stack key for identification later in code
        const stackedXYArray = xyArray.map((coord) => {
            return { ...coord, stack: height };
        });

        coords.push(stackedXYArray);
        
    }

    return coords;
};

module.exports = defineCoords;
