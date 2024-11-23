import { gameboard } from './gameboard.js';
export { player };

const player = (isHuman = true, name = 'Kurimanju senpai') => {
    const isHumanPlayer = isHuman;
    const board = gameboard();

    return { isHuman: isHumanPlayer, board, name };
};
