import "./styles.css";
import { Player } from './logic/playerLogic'
import { displayGameboard } from "./DOM/displayGameboard";

// Game
export const player = new Player(true);
const computer = new Player(false);

player.gameboard.addShip([[0,0],[0,1]]);
player.gameboard.addShip([[6,6],[7,6],[8,6]]);
computer.gameboard.addShip([[3,1],[3,2]]);
computer.gameboard.addShip([[5,5],[4,5],[3,5]]);

displayGameboard(player);
displayGameboard(computer);