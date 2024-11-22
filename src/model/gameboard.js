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
    const isIndexInBoard = (x, y, maxLength) => {
        return x >= 0 && x < maxLength && y >= 0 && y < maxLength;
    };
    const isIndexVacant = (x, y) => {
        const cell = getCell(x, y);
        return !cell.hasShip();
    }
    const areIndicesValid = (x, y, span, isVertical = true) => {
        let valid = true;
        for (let i = 0; i < span; i++) {
            if (isVertical) {
                valid = valid && isIndexInBoard(x, y + i, length) && isIndexVacant(x, y);
            } else {
                valid = valid && isIndexInBoard(x + i, y, length) && isIndexVacant(x, y);
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
        if (!areIndicesValid(x, y, shipLength, isVertical)) return false;
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
        return true;
    };

    const receiveHit = (x, y) => {
        // return if cell index is invalid or cell already hit
        if (!isIndexInBoard(x, y, length)) return false;
        const cell = getCell(x, y);
        if (cell.isHit()) return;

        cell.hit();
        if (cell.hasShip()) {
            cell.getShip().hit();
        }
        return true;
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
        console.log('=====================');
        board.forEach((row) => {
            let rowString = '';
            row.forEach((cell) => {
                if (cell.hasShip()) {
                    rowString += ' S';
                } else if (cell.isHit()) {
                    rowString += ' X';
                } else {
                    rowString += ' O';
                }
            });
            console.log(rowString);
        });
        console.log('=====================');
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

// todo make placeship ret true or false if wrong