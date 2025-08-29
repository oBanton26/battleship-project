import { player } from "..";
import { shotIsAccurate } from "../logic/gameboardLogic";
import { displayGameboard } from "./displayGameboard";
import { convertNumberIntoCoords, isValidShot } from "./eventListeners";

export function displayMessage (message) {
    console.log(message);
};

export function computersPlay () {
    const randomNumb = Math.floor(Math.random()*99);
    const coords = convertNumberIntoCoords(randomNumb);
    if (isValidShot(coords, player)) {
        setTimeout(()=>{
            player.gameboard.receiveAttack(coords);
            displayGameboard(player);
            displayMessage("The computer played");
            if (shotIsAccurate(coords, player.gameboard.ships)) {
                displayMessage("The computer shot one of your ship, he gets to strike again !");
                computersPlay();
            } else {
                displayMessage("It's your turn now");
            }
        }, 1000);

    } else {
        computersPlay();
    }
}