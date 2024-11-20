import { ship } from './ship.js';
export { gameboard };

const cell = () => {
    let hitStatus = false;
    const isHit = () => hitStatus;
    const hit = () => (hitStatus = true);

    let ship = null;
    const getShip = () => ship;
    const setShip = (battleship) => (ship = battleship);
    const hasShip = () => (ship == null ? false : true);

    return { isHit, hit, hasShip, setShip, getShip };
};

const gameboard = () => {
    const length = 10;
    const isIndexValid = (x, y, maxLength) => {
        return x >= 0 && x < maxLength && y >= 0 && y < maxLength;
    };
    const areIndicesValid = (x, y, span, isVertical = true) => {
        let valid = true;
        for (let i = 0; i < span; i++) {
            if (isVertical) {
                valid = valid && isIndexValid(x, y + i, length);
            } else {
                valid = valid && isIndexValid(x + i, y, length);
            }
        }
        return valid;
    };

    const createBoard = (length) => {
        const newBoard = [];
        for (let i = 0; i < length; i++) {
            const row = [];
            for (let j = 0; j < length; j++) {
                row.push(cell());
            }
            newBoard.push(row);
        }
        return newBoard;
    };
    let board = createBoard(length);
    const getBoard = () => board;
    const getCell = (x, y) => board[y][x];

    const placeShip = (x, y, shipLength, isVertical = true) => {
        if (!areIndicesValid(x, y, shipLength, isVertical)) return;
        const newShip = ship(shipLength);
        for (let i = 0; i < shipLength; i++) {
            if (isVertical) {
                const cell = getCell(x, y + i);
                cell.setShip(newShip);
            } else {
                const cell = getCell(x + i, y);
                cell.setShip(newShip);
            }
        }
    };

    const receiveHit = (x, y) => {
        // return if cell index is invalid or cell already hit
        if (!isIndexValid(x, y, length)) return;
        const cell = getCell(x, y);
        if (cell.isHit()) return;

        cell.hit();
        if (cell.hasShip()) {
            cell.getShip().hit();
        }
    };

    const areAllSunk = () => {
        let sunk = false;
        const board = getBoard();
        board.forEach((row) => {
            row.forEach((cell) => {
                if (cell.hasShip()) {
                    sunk = sunk || cell.getShip().getHealth() <= 0;
                }
            });
        });
        return sunk;
    };

    const prettyPrintBoard = () => {
        console.log('Gameboard:');
        console.log('=================');
        board.forEach((row) => {
            let rowString = '';
            row.forEach((cell) => {
                if (cell.hasShip()) {
                    rowString += ' S';
                } else if (cell.isHit()) {
                    rowString += ' X';
                } else {
                    rowString += ' o';
                }
            });
            console.log(rowString);
        });
    };

    return {
        length,
        getBoard,
        getCell,
        placeShip,
        receiveHit,
        areAllSunk,
        prettyPrintBoard,
    };
};
