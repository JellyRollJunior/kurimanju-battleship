import { player } from './player.js';
export { gameController };

const gameController = (challengerName = 'Challenger') => {
    let challenger = player(true, challengerName);
    let rival = player(false);
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

    const restart = () => {
        challenger = player(true, challengerName);
        rival = player(false);
        initialSetup();
    };

    const initialSetup = () => {
        defendingPlayer = getRival();
        getChallenger().board.usePresetShipLayout();
        getRival().board.useRandomShipLayout();
    }

    initialSetup();

    return {
        getChallenger,
        getRival,
        getDefendingPlayer,
        playRound,
        isGameOver,
        getWinner,
        restart,
    };
};
