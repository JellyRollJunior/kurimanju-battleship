export {
    renderChallengerBoard,
    renderRivalBoard,
    renderCheatingRivalBoard,
    displayPlayerTurn,
    displayWinner,
    disableBoardClick,
    enableBoardClick,
    disableClickRegistering,
    enableClickRegistering,
};

const createTableData = (text, x, y) => {
    const td = document.createElement('td');
    td.textContent = text;
    td.dataset.row = y;
    td.dataset.column = x;
    return td;
};

const getPlayerBoardToken = (cell) => {
    if (cell.hasShip()) {
        if (cell.isHit()) {
            // cell hit and has ship
            return 'Ꞩ';
        }
        // cell has a ship
        return 'S';
    } else if (cell.isHit()) {
        // cell hit and vacant
        return '·';
    } else {
        // cell unhit
        return '';
    }
};

const getPlayerTokenStyling = (cell) => {
    if (cell.hasShip()) {
        if (cell.isHit()) {
            // cell hit and has ship
            return 'hit';
        }
        // cell has a ship
        return 'ship';
    } else if (cell.isHit()) {
        // cell hit and vacant
        return 'miss';
    } else {
        // cell unhit
        return 'unhit';
    }
};

const getRivalBoardToken = (cell) => {
    if (cell.hasShip()) {
        if (cell.isHit()) {
            // cell hit and has ship
            return 'Ꞩ';
        }
        // cell has a ship (but hide from player)
        return '';
    } else if (cell.isHit()) {
        // cell hit and vacant
        return '·';
    } else {
        // cell unhit
        return '';
    }
};

const getRivalTokenStyling = (cell) => {
    if (cell.hasShip()) {
        if (cell.isHit()) {
            // cell hit and has ship
            return 'hit';
        }
        // cell has a ship (but hide from player)
        return 'unhit';
    } else if (cell.isHit()) {
        // cell hit and vacant
        return 'miss';
    } else {
        // cell unhit
        return 'unhit';
    }
};

const createHeaders = (length) => {
    const rows = [];
    // create top headers
    const topHeader = document.createElement('tr');
    topHeader.appendChild(document.createElement('th'));
    for (let i = 0; i < length; i++) {
        const headerItem = document.createElement('th');
        headerItem.textContent = i;
        topHeader.appendChild(headerItem);
    }
    rows.push(topHeader);
    // create left headers
    for (let i = 0; i < length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.dataset.row = i;
        const headerItem = document.createElement('th');
        headerItem.textContent = i;
        tableRow.appendChild(headerItem);
        rows.push(tableRow);
    }
    return rows;
};

const renderBoard = (
    boardElement,
    board,
    tokenFunction,
    tokenStylingFunction,
    lastMoveX,
    lastMoveY
) => {
    const headers = createHeaders(board.length);
    headers.forEach((header) => boardElement.appendChild(header));
    board.forEach((row, rowIndex) => {
        const tableRow = boardElement.querySelector(
            `tr[data-row="${rowIndex}"]`
        );
        row.forEach((cell, colIndex) => {
            const td = createTableData(tokenFunction(cell), colIndex, rowIndex);
            td.classList.add(tokenStylingFunction(cell));
            if (colIndex == lastMoveX && rowIndex == lastMoveY) {
                td.classList.add('highlight');
            }
            tableRow.appendChild(td);
        });
    });
};

const rivalBoard = document.querySelector('#rival-board');

const renderChallengerBoard = (board, lastMoveX, lastMoveY) => {
    const holder = document.querySelector('#challenger-board');
    holder.textContent = '';
    renderBoard(
        holder,
        board,
        getPlayerBoardToken,
        getPlayerTokenStyling,
        lastMoveX,
        lastMoveY
    );
};

const renderRivalBoard = (board, lastMoveX, lastMoveY) => {
    rivalBoard.textContent = '';
    renderBoard(
        rivalBoard,
        board,
        getRivalBoardToken,
        getRivalTokenStyling,
        lastMoveX,
        lastMoveY
    );
};

const renderCheatingRivalBoard = (board, lastMoveX, lastMoveY) => {
    rivalBoard.textContent = '';
    renderBoard(
        rivalBoard,
        board,
        getPlayerBoardToken,
        getPlayerTokenStyling,
        lastMoveX,
        lastMoveY
    );
};

const setGameStateDisplayText = (message) => {
    const gameStateDisplay = document.querySelector('.game-state-display');
    gameStateDisplay.textContent = message;
};

const displayPlayerTurn = (player) => {
    let message =
        player.name == 'Kurimanju senpai'
            ? `The goat ${player.name}'s turn!`
            : `${player.name}'s turn!`;
    setGameStateDisplayText(message);
};

const displayWinner = (player) => {
    let message =
        player.name == 'Kurimanju senpai'
            ? `My glorious king ${player.name} is the Winner!`
            : `${player.name} is the Winner!`;
    setGameStateDisplayText(message);
};

const disableBoardClick = () => {
    rivalBoard.style.pointerEvents = 'none';
};

const enableBoardClick = () => {
    rivalBoard.style.pointerEvents = 'auto';
};

const randomizeButton = document.querySelector('#randomize');
const restartButton = document.querySelector('#restart');

const disableClickRegistering = () => {
    disableBoardClick();
    randomizeButton.style.pointerEvents = 'none';
    restartButton.style.pointerEvents = 'none';
};

const enableClickRegistering = () => {
    enableBoardClick();
    randomizeButton.style.pointerEvents = 'auto';
    restartButton.style.pointerEvents = 'auto';
};
