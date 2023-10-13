const defineCoords = (circleRadius, amountStacks) => {
    const coords = new Array();
    const xyArray = new Array();

    for (let y = -circleRadius; y <= circleRadius; y++) {
        for (let x = -circleRadius; x <= circleRadius; x++) {
            if (x * x + y * y <= circleRadius) {
                xyArray.push({ x, y, weight: 0 });
            }
        }
    }

    for (let height = 1; height <= amountStacks; height++) {
        coords.push(xyArray);
    }

    console.log(coords);
    console.log(coords.length);
};

module.exports = defineCoords;
