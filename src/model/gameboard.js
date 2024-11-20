export { gameboard };

const cell = () => {
    const hitStatus = false;
    const isHit = () => hitStatus;
    const hit = () => hitStatus = true;

    return { isHit, hit }
}

const gameboard = () => {
    const length = 10;

    const createGameBoard = (length) => {
        const newBoard = [];
        for (let i = 0; i < length; i++) {
            newBoard.push(Array(length).fill(cell()));
        }
        return newBoard;
    };
    let board = createGameBoard(length);
    const getBoard = () => board;

    return { length, getBoard };
};
