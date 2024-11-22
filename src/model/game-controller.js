import { gameboard } from './gameboard.js'
export { gameController };

const gameController = () => {
    const player = gameboard();
    const rival = gameboard();
    const getPlayer = () => player;
    const getRival = () => rival;

    return { getPlayer, getRival };
};
