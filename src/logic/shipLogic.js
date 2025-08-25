export class Ship {
    constructor (size) {
        this.size = size;
        this.damages = 0;
        this.sunk = false;
    };

    hit () {
        this.damages++;
    };

    isSunk () {
        if (this.damages >= this.size) {
            this.sunk = true;
        }
        return this.sunk;
    }
}