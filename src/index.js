import "./styles.css";
import { Player } from './logic/playerLogic'
import { displayGameboard, displayHiddenGameboard } from "./DOM/displayGameboard";

// Game
const playerReal = new Player(true);
const playerComputer = new Player(false);

playerReal.gameboard.addShip([[0,0],[0,1]]);
playerReal.gameboard.addShip([[6,6],[7,6],[8,6]]);
playerComputer.gameboard.addShip([[3,1],[3,2]]);
playerComputer.gameboard.addShip([[5,5],[4,5],[3,5]]);
playerReal.gameboard.receiveAttack([1,6]);
playerReal.gameboard.receiveAttack([6,6]);
playerComputer.gameboard.receiveAttack([4,7]);
playerComputer.gameboard.receiveAttack([8,3]);
playerComputer.gameboard.receiveAttack([3,1]);

displayGameboard(playerReal);
displayGameboard(playerComputer);