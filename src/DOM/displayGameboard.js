import { addActionOnCells } from "./eventListeners";

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
}


function displayMissedShots (gameboard, arrayCells) {
    const allMissedShots = gameboard.missedShots;
    const convertedMissedShots = allMissedShots.map(convertCoordsIntoNumber);
    for (let coordNumb of convertedMissedShots) {
        arrayCells[coordNumb].classList.toggle('missed');
    };
};

function displayGoodShots (gameboard, arrayCells) {
    const allGoodShots = gameboard.goodShots;
    const convertedGoodShots = allGoodShots.map(convertCoordsIntoNumber);
    for (let coordNumb of convertedGoodShots) {
        arrayCells[coordNumb].classList.toggle('hit');
    };
};

function displayShips (gameboard, arrayCells) {
    const allCoordsOfShips = gameboard.allCoords();
    const convertedAllCoords= allCoordsOfShips.map(convertCoordsIntoNumber);
    for (let coordNumb of convertedAllCoords) {
        arrayCells[coordNumb].classList.toggle('occupied');
    };
}

function convertCoordsIntoNumber (coord) {
    return coord[0]*10 + coord[1];
};

function resetGameboard (gameboardDOMEl, playerObject) {
    gameboardDOMEl.textContent = '';
    for (let i=0; i<100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        addActionOnCells(cell, playerObject);
        gameboardDOMEl.appendChild(cell);
    }
}