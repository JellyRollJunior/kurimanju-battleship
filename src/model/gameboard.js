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
    };
    const areIndicesValid = (x, y, span, isVertical = true) => {
        let valid = true;
        for (let i = 0; i < span; i++) {
            if (isVertical) {
                valid =
                    valid &&
                    isIndexInBoard(x, y + i, length) &&
                    isIndexVacant(x, y);
            } else {
                valid =
                    valid &&
                    isIndexInBoard(x + i, y, length) &&
                    isIndexVacant(x, y);
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

    const placeShip = (x, y, shipLength = 1, isVertical = true) => {
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
        const board = getBoard();
        let sunk = true;
        board.forEach((row) => {
            row.forEach((cell) => {
                if (cell.hasShip() && cell.getShip().getHealth() > 0) {
                    sunk = false;
                }
            });
        });
        return sunk;
    };

    const getRandomUnhitCoordinate = () => {
        while (areAllSunk() == false) {
            let x = Math.floor(Math.random() * length);
            let y = Math.floor(Math.random() * length);
            if (!getCell(x, y).isHit()) {
                return [x, y];
            }
        }
        return [1, 1];
    };

    const shipSizes = [1, 1, 2, 2, 2, 3, 3, 4];
    const useRandomShipLayout = () => {
        shipSizes.forEach((size) => {
            while (true) {
                let x = Math.floor(Math.random() * length);
                let y = Math.floor(Math.random() * length);
                let vertical = Math.random() < 0.5;
                if (placeShip(x, y, size, vertical)) break;
            }
        })
    }
    const usePresetShipLayout = () => {
        // Preset layout:
        // =====================
        //  S O O O O O O O O O
        //  S O O O O S S O O O
        //  O O O O O O O O O O
        //  O O O S S S O O O O
        //  O S O O O O O O O O
        //  O S O O S O O O S O
        //  O O O O O O O O S O
        //  O O O S S S O O S O
        //  O S O O O O O O S O
        //  O O O O O O O O O O
        // =====================
        placeShip(1, 8, 1, false);
        placeShip(4, 5, 1, true);
        placeShip(0, 0, 2, true);
        placeShip(5, 1, 2, false);
        placeShip(1, 4, 2, true);
        placeShip(3, 7, 3, false);
        placeShip(3, 3, 3, false);
        placeShip(8, 5, 4, true);
    };

    const prettyPrintBoard = () => {
        console.log('Gameboard:');
        console.log('=====================');
        board.forEach((row) => {
            let rowString = '';
            row.forEach((cell) => {
                if (cell.hasShip()) {
                    if (cell.isHit()) {
                        // cell hit and has ship
                        rowString += ' Ꞩ';
                    } else {
                        // cell has a ship
                        rowString += ' S';
                    }
                } else if (cell.isHit()) {
                    // cell hit and vacant
                    rowString += ' X';
                } else {
                    // cell unhit
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
        getRandomUnhitCoordinate,
        useRandomShipLayout,
        usePresetShipLayout,
        prettyPrintBoard,
    };
};

const board = gameboard();
board.placeShip(0, 0, 1, true);
board.placeShip(0, 1, 1, true);
board.receiveHit(0, 0);
board.areAllSunk();
