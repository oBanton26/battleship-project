import { displayGameboard } from "./displayGameboard";

export function addActionOnCells (cellEl, playerObject) {
    cellEl.addEventListener('click', ()=>{
        playerObject.gameboard.receiveAttack([3,3]);
        displayGameboard(playerObject);
    })
}