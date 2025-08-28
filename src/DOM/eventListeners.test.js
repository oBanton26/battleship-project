import { Player } from "../logic/playerLogic";
import { convertNumberIntoCoords , isValidShot } from "./eventListeners";

test ('converts number into coords', ()=>{
    expect(convertNumberIntoCoords(3)).toEqual([0,3]);
    expect(convertNumberIntoCoords(20)).toEqual([2,0]);
});

test ('check if it is a valid shot for the player to play', ()=>{
    const playerReal = new Player(true);
    playerReal.gameboard.receiveAttack([1,6]);
    playerReal.gameboard.receiveAttack([6,6]);
    expect(isValidShot([1,6], playerReal)).toBe(false);
    expect(isValidShot([0,0], playerReal)).toBe(true)
})