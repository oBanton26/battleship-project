import { displayGameboard } from "./displayGameboard";

export function addActionOnCells (cellEl, playerObject, pos) {

    cellEl.addEventListener('click', ()=>{
        playerObject.gameboard.receiveAttack([3,3]);
        displayGameboard(playerObject);
    })
};

export function convertNumberIntoCoords (numb) {
    return [Math.floor(numb/10), numb%10];
}