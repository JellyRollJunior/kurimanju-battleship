import { gameboard } from './gameboard.js';
export { player };

const player = (isHuman = true, name = 'Kurimanju senpai') => {
    const board = gameboard();

    return { isHuman, board, name };
};
