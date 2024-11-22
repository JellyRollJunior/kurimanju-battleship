import { gameboard } from './gameboard.js'
export { gameController };

const gameController = () => {
    const player = gameboard();
    const rival = gameboard();
    const getPlayer = () => player;
    const getRival = () => rival;

    let activePlayer = getPlayer();
    const toggleActivePlayer = () => {
        if (activePlayer == getPlayer()) {
            activePlayer = getRival();
        } else {
            activePlayer = getPlayer();
        }
    }
    const getActivePlayer = () => activePlayer;

    return { getPlayer, getRival, getActivePlayer };
};
