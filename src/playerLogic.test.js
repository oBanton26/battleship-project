import { Player } from "./playerLogic";

const testPlayer = new Player(true);

test ('has types of player', ()=>{
    expect(testPlayer.isReal).toBe(true);
});

test ('has a gameboard', ()=>{
    expect(testPlayer.gameboard).toBeDefined();
    testPlayer.gameboard.addShip([[0,0], [0,1]]);
    expect(testPlayer.gameboard.hasAllShipsDestroyed()).toBeFalsy()
});