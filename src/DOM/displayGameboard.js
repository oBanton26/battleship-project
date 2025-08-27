export function displayGameboard (gameboardObject, playerGameboardClass) {
    const gameboardDOMRef = document.querySelector(`.${playerGameboardClass}`);
    clearGameboard(gameboardDOMRef);
    const arrayCells = Array.from(gameboardDOMRef.querySelectorAll('.cell'));
    const allCoordsOfShips = gameboardObject.allCoords();
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