import { Ship } from "./shipLogic";

export class Gameboard {
    constructor (){
        this.ships = [];
        this.missedShot = [];
    };

    addShip (array) {
        const placedShip = {
            coords: array,
            ship: new Ship(array.length)
        };
        this.ships.push(placedShip);
    };

    receiveAttack(attack) {
        let shipAttacked = shotIsAccurate(attack, this.ships);
        if (shipAttacked) {
            shipAttacked.ship.hit()
        } else {
            this.missedShot.push(attack);
        }
    };

    hasAllShipsDestroyed() {
        const allShipsAreSunk = this.ships.every((el) => {
            return el.ship.isSunk();
        });
        return allShipsAreSunk;
    }
};


export function shotIsAccurate (attack, ships) {
    for (let ship of ships) {
        for (let coord of ship.coords) {
            if (coord[0] == attack[0] && coord[1] == attack[1]) {
                return ship;
            }
        }
    };
    return false;
}