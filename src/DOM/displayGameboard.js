export function displayHiddenGameboard (gameboardObject, playerGameboardClass) {
    const gameboardDOMEl = document.querySelector(`.${playerGameboardClass}`);
    clearGameboard(gameboardDOMEl);
    const arrayCells = Array.from(gameboardDOMEl.querySelectorAll('.cell'));
    
    displayMissedShots(gameboardObject, arrayCells);
    
    displayGoodShots(gameboardObject, arrayCells);
}

export function displayGameboard (gameboardObject, playerGameboardClass) {
    const gameboardDOMEl = document.querySelector(`.${playerGameboardClass}`);
    clearGameboard(gameboardDOMEl);
    const arrayCells = Array.from(gameboardDOMEl.querySelectorAll('.cell'));
    
    displayShips(gameboardObject, arrayCells);

    displayMissedShots(gameboardObject, arrayCells);
    
    displayGoodShots(gameboardObject, arrayCells);
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

function clearGameboard (gameboardDOMEl) {
    gameboardDOMEl.textContent = '';
    for (let i=0; i<100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameboardDOMEl.appendChild(cell);
    }
}

