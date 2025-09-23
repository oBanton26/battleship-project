import { generateRandomShipPlacements , generateOneRandomShip, addTileAndSurroundingTilesToPreviousCoords} from "./choosingPlacementsLogic";

test ('return an array', ()=>{
    const shipPlacement = generateRandomShipPlacements();
    expect (shipPlacement).toBeDefined()
    console.log(shipPlacement)
});

test ('filled with array of random but playable coordinates', ()=> {
    const previousCoords = [];
})

test ('generate and add surrounding tiles to previousCoords array', ()=>{
    const previousCoords = [];
    addTileAndSurroundingTilesToPreviousCoords([2,3], previousCoords);
    expect(previousCoords).toHaveLength(9);
    expect(previousCoords).toContainEqual([2,3])
    expect(previousCoords).toContainEqual([2,4])
})