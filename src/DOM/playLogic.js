import { shotIsAccurate } from "../logic/gameboardLogic";
import { computersPlay, displayComputerTurnMessage } from "./computersTurn";
import { displayGameboard } from "./displayGameboard";
import { isValidShot } from "./eventListeners";


export function handlePlay(coords, playerObject) {
    if (isValidShot(coords, playerObject)) {
        playerObject.gameboard.receiveAttack(coords);
        displayGameboard(playerObject);

        if (shotIsAccurate(coords, playerObject.gameboard.ships)) {
            console.log("You shot an ennemy ship, strike again !");
        } else {
            displayComputerTurnMessage();
            computersPlay();
        }
    } else {
        console.log('Hey you cannot do that, try again')
    }
}