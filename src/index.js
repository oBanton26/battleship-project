import "./styles.css";
import { Player } from './logic/playerLogic'
import { displayGameboard } from "./DOM/displayGameboard";

// Game
const playerReal = new Player(true);
const playerComputer = new Player(false);

playerReal.gameboard.addShip([[0,0],[0,1]]);
playerReal.gameboard.addShip([[6,6],[7,6],[8,6]]);
playerComputer.gameboard.addShip([[9,9],[8,9]]);
playerComputer.gameboard.addShip([[5,5],[4,5],[3,5]]);

displayGameboard(playerReal.gameboard, 'player-gameboard');
displayGameboard(playerComputer.gameboard, 'computer-gameboard');