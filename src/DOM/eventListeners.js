import { displayGameboard } from "./displayGameboard";

export function addActionOnCells (cellEl, playerObject, pos) {
    cellEl.addEventListener('click', ()=>{
        const coords = convertNumberIntoCoords(pos);
        if (isValidShot(coords, playerObject)) {
            playerObject.gameboard.receiveAttack(coords);
        } else {
            console.log('Hey you cannot do that')
        }
        displayGameboard(playerObject);
    })
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