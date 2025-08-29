import { shotIsAccurate } from "../logic/gameboardLogic";
import { computersPlay, displayMessage } from "./computersTurn";
import { displayGameboard } from "./displayGameboard";
import { isValidShot } from "./eventListeners";


export function handlePlay(coords, playerObject) {
    if (isValidShot(coords, playerObject)) {
        playerObject.gameboard.receiveAttack(coords);
        displayGameboard(playerObject);

        if (shotIsAccurate(coords, playerObject.gameboard.ships)) {
            displayMessage("You shot an ennemy ship, strike again !")
        } else {
            displayMessage("It's the computer's turn now");
            computersPlay();
        }
    } else {
        displayMessage('Hey you cannot do that, try again')
    }
}