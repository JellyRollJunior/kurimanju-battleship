export { renderPlayerOneBoard };

const createTableData = (text) => {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
};

const getBoardToken = (cell) => {
    if (cell.hasShip()) {
        return 'S';
    } else if (cell.isHit()) {
        return 'X';
    } else {
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
        tableRow.classList.add(`row-${i}`);
        const headerItem = document.createElement('th');
        headerItem.textContent = i;
        tableRow.appendChild(headerItem)
        rows.push(tableRow);
    }
    return rows;
};

const renderPlayerOneBoard = (board) => {
    const holder = document.querySelector('#player-one-board');
    const headers = createHeaders(board.length);
    headers.forEach((header) => holder.appendChild(header));
    board.forEach((row, index) => {
        const tableRow = document.querySelector(`tr.row-${index}`);
        row.forEach((cell) => {
            const td = createTableData(getBoardToken(cell));
            tableRow.appendChild(td);
        })
    })
};
