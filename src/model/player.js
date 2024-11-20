import { gameboard } from './gameboard.js';
export { player };

const player = (isHuman = true) => {
    const isHumanPlayer = isHuman;
    const board = gameboard();

    return { isHuman: isHumanPlayer, board };
};
