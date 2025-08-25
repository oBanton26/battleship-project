import { Ship } from "./shipLogic";

test ('exists', ()=>{
    expect(new Ship(2)).toBeDefined();
});

test ('takes damages', ()=>{
    const testShip = new Ship(5);
    testShip.hit();
    expect(testShip.damages).toBe(1);   
});

test ('can be sunk', ()=>{
    const length = 2;
    const testShip = new Ship(length);
    const testShip2 = new Ship(3);
    const testShip3 = new Ship(1);
    for (let i=0; i<length; i++) {
        testShip.hit();
        testShip2.hit();
        testShip3.hit();
    };
    expect (testShip.isSunk()).toBe(true);
    expect (testShip2.isSunk()).toBe(false);
    expect (testShip3.isSunk()).toBe(true);
});