export { renderPlayerOneBoard, renderPlayerTwoBoard };

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
        return 'X';
    } else {
        // cell unhit
        return 'O';
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
    rows.push(topHeader)
    // create left headers
    for (let i = 0; i < length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.dataset.row = i;
        const headerItem = document.createElement('th');
        headerItem.textContent = i;
        tableRow.appendChild(headerItem)
        rows.push(tableRow);
    }
    return rows;
};

const renderBoard = (boardElement, board) => {
    const headers = createHeaders(board.length);
    headers.forEach((header) => boardElement.appendChild(header));
    board.forEach((row, rowIndex) => {
        const tableRow = boardElement.querySelector(`tr[data-row="${rowIndex}"]`);
        row.forEach((cell, colIndex) => {
            const td = createTableData(getPlayerBoardToken(cell), colIndex, rowIndex);
            tableRow.appendChild(td);
        })
    })
}

const renderPlayerOneBoard = (board) => {
    const holder = document.querySelector('#challenger-board');
    renderBoard(holder, board);
};

const renderPlayerTwoBoard = (board) => {
    const holder = document.querySelector('#rival-board');
    renderBoard(holder, board);
}