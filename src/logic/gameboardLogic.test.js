import { Gameboard , shotIsAccurate} from "./gameboardLogic";

const testGameboard = new Gameboard();
const coordsFirstShip = [[0,0],[0,1]];
testGameboard.addShip(coordsFirstShip);
testGameboard.addShip([[2,4],[3,4]]);

test ('can place ships', ()=>{
    expect (testGameboard.ships[0].coords).toBe(coordsFirstShip);
});

test ('receives attacks', ()=>{
    testGameboard.receiveAttack([0,1])
    testGameboard.receiveAttack([3,4]);
    expect(testGameboard.ships[0].ship.damages).toBe(1);
    expect(testGameboard.ships[1].ship.damages).toBe(1);
});

test ('keeps track of missed shot', ()=>{
    testGameboard.receiveAttack([6,6]);
    expect(testGameboard.missedShots).toContainEqual([6,6]);
})

test ('isAccurate function works', ()=>{
    expect(shotIsAccurate([0,1],testGameboard.ships)).toBeTruthy();
    expect(shotIsAccurate([1,1],testGameboard.ships)).toBeFalsy();
});

test ('reports false if not all ships are sunk', ()=>{
    expect(testGameboard.hasAllShipsDestroyed()).toBe(false);
}) 

test ('reports true if all ships are sunk', ()=>{
    testGameboard.receiveAttack([0,1]);
    testGameboard.receiveAttack([2,4]);
    testGameboard.receiveAttack([3,4]);
    expect(testGameboard.hasAllShipsDestroyed()).toBe(true);
});

test ('returns an array of all the coords of its ships', ()=>{
    expect(testGameboard.allCoords()).toEqual([[0,0],[0,1],[2,4],[3,4]]);
});

test ('keeps track of good shots', ()=>{
    expect(testGameboard.goodShots).toContainEqual([0,1],[3,4]);
}) 