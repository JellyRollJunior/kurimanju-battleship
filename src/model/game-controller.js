import { player } from './player.js';
export { gameController };

const gameController = () => {
    const challenger = player(true);
    const rival = player(false);
    const getChallenger = () => challenger;
    const getRival = () => rival;

    // active player receives attack
    let defendingPlayer = getRival();
    const toggleDefendingPlayer = () => {
        defendingPlayer =
            defendingPlayer == getChallenger() ? getRival() : getChallenger();
    };
    const getDefendingPlayer = () => defendingPlayer;

    const playRound = (x, y) => {
        const currentBoard = getDefendingPlayer().board;
        if (!currentBoard.receiveHit(x, y)) return false;
        // case 1: miss -> swap players
        if (!currentBoard.getCell(x, y).hasShip()) {
            toggleDefendingPlayer();
        }
        // case 2: hit -> keep player the same
    };

    const isGameOver = () => {
        return (
            getChallenger().board.areAllSunk() || getRival().board.areAllSunk()
        );
    };

    const getWinner = () => {
        if (isGameOver()) {
            return getChallenger().board.areAllSunk()
                ? getRival()
                : getChallenger();
        }
        return null;
    };

    return {
        getChallenger,
        getRival,
        getDefendingPlayer,
        playRound,
        isGameOver,
        getWinner,
    };
};
