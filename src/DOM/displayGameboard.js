import { displayMessage } from "./computersTurn";
import { addPlayabilityOnCells } from "./eventListeners";

export function displayGameboard (playerObject) {
    const gameboardObject = playerObject.gameboard;
    let gameboardDOMEl;
    if (playerObject.isReal) {
        gameboardDOMEl = document.querySelector('.player-gameboard')
    } else {
        gameboardDOMEl = document.querySelector('.computer-gameboard');
    }
    resetGameboard(gameboardDOMEl, playerObject);
    const arrayCells = Array.from(gameboardDOMEl.querySelectorAll('.cell'));
    
    displayMissedShots(gameboardObject, arrayCells);
    
    displayGoodShots(gameboardObject, arrayCells);
    
    if (playerObject.isReal) {
        displayShips(gameboardObject, arrayCells);
    }

    if (playerObject.gameboard.hasAllShipsDestroyed()) {
        let playerName;
        if (playerObject.isReal) {
            playerName = 'The Computer'
        } else {
            playerName = 'You'
        }
        displayMessage(`${playerName} won !!`)
    }
}


function displayMissedShots (gameboard, arrayCells) {
    const allMissedShots = gameboard.missedShots;
    const convertedMissedShots = allMissedShots.map(convertCoordsIntoNumber);
    for (let coordNumb of convertedMissedShots) {
        arrayCells[coordNumb].classList.toggle('missed');
        arrayCells[coordNumb].classList.toggle('blank');
    };
};

function displayGoodShots (gameboard, arrayCells) {
    const allGoodShots = gameboard.goodShots;
    const convertedGoodShots = allGoodShots.map(convertCoordsIntoNumber);
    for (let coordNumb of convertedGoodShots) {
        arrayCells[coordNumb].classList.toggle('hit');
        arrayCells[coordNumb].classList.toggle('blank');
    };
};

function displayShips (gameboard, arrayCells) {
    const allCoordsOfShips = gameboard.allCoords();
    const convertedAllCoords= allCoordsOfShips.map(convertCoordsIntoNumber);
    for (let coordNumb of convertedAllCoords) {
        arrayCells[coordNumb].classList.toggle('occupied');
        if (!arrayCells[coordNumb].classList.contains('hit')){
            arrayCells[coordNumb].classList.toggle('blank');
        }
    };
}

function convertCoordsIntoNumber (coord) {
    return coord[0]*10 + coord[1];
};

function resetGameboard (gameboardDOMEl, playerObject) {
    gameboardDOMEl.textContent = '';
    for (let i=0; i<100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', "blank");
        addPlayabilityOnCells(cell, playerObject, i);
        gameboardDOMEl.appendChild(cell);
    }
}