import { gameboard } from './gameboard.js';
export { gameController };

const gameController = () => {
    const player = gameboard();
    const rival = gameboard();
    const getPlayer = () => player;
    const getRival = () => rival;

    // active player receives attack
    let defendingPlayer = getRival();
    const toggleDefendingPlayer = () => {
        if (defendingPlayer == getPlayer()) {
            defendingPlayer = getRival();
        } else {
            defendingPlayer = getPlayer();
        }
    };
    const getDefendingPlayer = () => defendingPlayer;

    const playRound = (x, y) => {
        getDefendingPlayer().getBoard().receiveHit(x, y);
    }

    return { getPlayer, getRival, getDefendingPlayer, playRound };
};
