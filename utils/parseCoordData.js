const parseCoordData = (coords) => {
    const parsedCoords = [];
    coords.forEach(stack => {
        const parsedStack1 = stack.filter(coord => coord.weight !== 0);
        const parsedStack = parsedStack1.map(coord => {return {x: coord.x, y: coord.y, weight: Math.round((coord.weight + Number.EPSILON) * 100) / 100}})
        parsedCoords.push(parsedStack)
    });
    
    return parsedCoords;
}

module.exports = parseCoordData;