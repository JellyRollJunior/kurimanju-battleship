import { ship } from './ship.js';
export { gameboard };

const cell = () => {
    let hitStatus = false;
    const isHit = () => hitStatus;
    const hit = () => hitStatus = true;

    let ship = null;
    const getShip = () => ship;
    const setShip = (battleship) => (ship = battleship);
    const hasShip = () => (ship == null ? false : true);

    return { isHit, hit, hasShip, setShip, getShip };
};

const gameboard = () => {
    const length = 10;
    const isIndexValid = (x, y, length) => {
        return x >= 0 && x <= length - 1 && y >= 0 && y <= length - 1;
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

    const placeShip = (x, y, shipLength) => {
        if (isIndexValid(x, y, length)) {
            const cell = board[y][x];
            const newShip = ship(shipLength);
            cell.setShip(newShip);
        }
    };

    const receiveHit = (x, y) => {
        if (!isIndexValid(x, y, length)) return;
        const cell = board[y][x];
        cell.hit();
    };

    return { length, getBoard, placeShip, receiveHit };
};
