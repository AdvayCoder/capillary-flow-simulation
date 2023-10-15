const parseCoordData = (coords) => {
    const parsedCoords = [];
    coords.forEach(stack => {
        const parsedStack = stack.filter(coord => coord.weight !== 0);
        parsedCoords.push(parsedStack)
    });
    return parsedCoords;
}

module.exports = parseCoordData;