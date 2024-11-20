import { ship } from './ship.js'
export { gameboard };

const cell = () => {
    const hitStatus = false;
    const isHit = () => hitStatus;
    const hit = () => hitStatus = true;

    let ship = null;
    const getShip = () => ship;
    const setShip = (battleship) => ship = battleship;
    const hasShip = () => ship == null ? false : true;

    return { isHit, hit, hasShip, setShip, getShip }
}

const gameboard = () => {
    const length = 10;

    const createBoard = (length) => {
        const newBoard = [];
        for (let i = 0; i < length; i++) {
            newBoard.push(Array(length).fill(cell()));
        }
        return newBoard;
    };
    let board = createBoard(length);
    const getBoard = () => board;

    const placeShip = (x, y, length) => {
        const cell = board[y][x];
        const newShip = ship(length);
        cell.setShip(newShip);
    }

    return { length, getBoard, placeShip };
};
