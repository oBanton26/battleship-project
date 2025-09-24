export function generateRandomShipPlacements() {
    const result = [];
    const previousCoords = [];
    for (let i=0; i<2; i++) {
        const ship = generateOneRandomShip(4, previousCoords)
        result.push(ship)
        for (let coords of ship) {
            addTileAndSurroundingTilesToPreviousCoords(coords, previousCoords)
        };
    }
    for (let i=0; i<3; i++) {
        const ship = generateOneRandomShip(3, previousCoords)
        result.push(ship)
        for (let coords of ship) {
            addTileAndSurroundingTilesToPreviousCoords(coords, previousCoords)
        };
        
    }
    for (let i=0; i<4; i++) {
        const ship = generateOneRandomShip(2, previousCoords)
        result.push(ship)
        for (let coords of ship) {
            addTileAndSurroundingTilesToPreviousCoords(coords, previousCoords)
        };

    }

    return result;
}

export function generateOneRandomShip (length, previousCoords) {
    const randomNumb = Math.floor(Math.random()*99);
    const coords = convertNumberIntoCoords(randomNumb);
    if (isInPreviousCoords(coords, previousCoords)) {
        return generateOneRandomShip(length, previousCoords);
    };
    const result = [];
    result.push(coords);

    const randomDirection = Math.floor(Math.random()*2);
    for (let i=0; i<length-1; i++) {
        const lastCoordsOfResult = result[result.length-1];
        if (randomDirection) {
            
            const nextPos = [];
            nextPos.push(lastCoordsOfResult[0])
            nextPos.push(lastCoordsOfResult[1]+1)
            if (lastCoordsOfResult[1] === 9 || isInPreviousCoords(nextPos, previousCoords)) {
                return generateOneRandomShip(length, previousCoords);
            }
            result.push(nextPos)
        } else {
            
            const nextPos = [];
            nextPos.push(lastCoordsOfResult[0]+1)
            nextPos.push(lastCoordsOfResult[1])
            if (lastCoordsOfResult[0] === 9 || isInPreviousCoords(nextPos, previousCoords)) {
                return generateOneRandomShip(length, previousCoords);
            }
            result.push(nextPos)
        }
    }
    return result;
}

export function convertNumberIntoCoords (numb) {
    return [Math.floor(numb/10), numb%10];
};

function isInPreviousCoords (coords, previousCoords) {
    return previousCoords.some((e)=>{return e[0]===coords[0] && e[1]===coords[1]});
}

export function addTileAndSurroundingTilesToPreviousCoords (coord, previousCoords) {
    previousCoords.push(coord);
    previousCoords.push([coord[0]+1,coord[1]])
    previousCoords.push([coord[0],coord[1]+1])
    previousCoords.push([coord[0]+1,coord[1]+1])
    previousCoords.push([coord[0]-1,coord[1]])
    previousCoords.push([coord[0],coord[1]-1])
    previousCoords.push([coord[0]-1,coord[1]-1])
    previousCoords.push([coord[0]+1,coord[1]-1])
    previousCoords.push([coord[0]-1,coord[1]+1])
}