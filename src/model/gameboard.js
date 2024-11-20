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
            newBoard.push(Array(length).fill(cell()));
        }
        return newBoard;
    };
    let board = createBoard(length);
    const getBoard = () => board;

    const placeShip = (x, y, shipLength, isVertical = true) => {
        if (!areIndicesValid(x, y, shipLength, isVertical)) return;
        const newShip = ship(shipLength);
        for (let i = 0; i < shipLength; i++) {
            if (isVertical) {
                const cell = board[y + i][x];
                cell.setShip(newShip);
            } else {
                const cell = board[y][x + i];
                cell.setShip(newShip);
            }
        }
    };

    const receiveHit = (x, y) => {
        if (!isIndexValid(x, y, length)) return;
        const cell = board[y][x];
        cell.hit();
    };

    return { length, getBoard, placeShip, receiveHit };
};
