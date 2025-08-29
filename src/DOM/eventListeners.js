import { handlePlay } from "./playLogic";

export function addPlayabilityOnCells (cellEl, playerObject, pos) {
    if (!playerObject.isReal) {
        cellEl.addEventListener('click', ()=>{
            const coords = convertNumberIntoCoords(pos);
            handlePlay(coords, playerObject);
        })
    }
};

export function convertNumberIntoCoords (numb) {
    return [Math.floor(numb/10), numb%10];
};

export function isValidShot (coords, playerObject) {
    const arrayOfMissedShots = playerObject.gameboard.missedShots;
    const isInMissedShots = arrayOfMissedShots.some((e)=>{return e[0]===coords[0] && e[1]===coords[1]});

    const arrayOfGoodShots = playerObject.gameboard.goodShots;
    const isInGoodShots = arrayOfGoodShots.some((e)=>{return e[0]===coords[0] && e[1]===coords[1]});
    
    return !isInMissedShots && !isInGoodShots;
}