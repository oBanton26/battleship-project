import { Gameboard } from './gameboardLogic'

export class Player {
    constructor (isReal) {
        this.isReal = isReal;
        this.gameboard = new Gameboard();
    }
}