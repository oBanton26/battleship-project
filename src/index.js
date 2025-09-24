import "./styles.css";
import { Player } from './logic/playerLogic'
import { displayGameboard } from "./DOM/displayGameboard";
import { generateRandomShipPlacements } from "./logic/choosingPlacementsLogic";

// Game
export const player = new Player(true);
const computer = new Player(false);

const randomPlacementForPlayer = generateRandomShipPlacements();
const randomPlacementForComputer = generateRandomShipPlacements();

for (let shipCoords of randomPlacementForPlayer) {
    player.gameboard.addShip(shipCoords);
}
for (let shipCoords of randomPlacementForComputer) {
    computer.gameboard.addShip(shipCoords);
}

displayGameboard(player);
displayGameboard(computer);