import { gameController } from '../model/game-controller.js';
import {
    disableBoardClick,
    displayPlayerTurn,
    displayWinner,
    enableBoardClick,
    renderChallengerBoard,
    renderRivalBoard,
} from './../view/view.js';
export { init };

const checkGameOver = (game) => {
    if (game.isGameOver()) {
        const winner = game.getWinner();
        console.log(`winner is ${winner.name}!`);
        displayWinner(winner);
        disableBoardClick();
    }
};

const handleBoardClick = (game) => {
    return async function curriedHandleBoardClick(event) {
        const target = event.target;
        if (target.tagName == 'TD') {
            const x = target.dataset.column;
            const y = target.dataset.row;
            game.playRound(x, y);
            renderRivalBoard(game.getRival().board.getBoard(), x, y);

            // if defending player is challenger and rival is computer, computer attacks
            while (
                game.getDefendingPlayer() == game.getChallenger() &&
                game.getRival().isHuman == false
            ) {
                // disable clicking board while the goat is thinking
                disableBoardClick();
                displayPlayerTurn(game.getRival());
                // mimic my goat kurimanju thinking! (he would never think so long)
                await new Promise((resolve) => setTimeout(resolve, 2000));
                // computer plays round
                const randomAttack = game.getChallenger().board.getRandomUnhitCoordinate();
                game.playRound(randomAttack[0], randomAttack[1]);
                renderChallengerBoard(game.getChallenger().board.getBoard(), randomAttack[0], randomAttack[1]);
                enableBoardClick();
            }
            
            displayPlayerTurn(game.getChallenger());
            checkGameOver(game);
        }
    };
};

const bindBoardData = (game) => {
    const rivalBoard = document.querySelector('#rival-board');
    rivalBoard.addEventListener('click', handleBoardClick(game));
};

const init = () => {
    // init game and place ships
    const game = gameController('Shisa');
    game.getChallenger().board.usePresetShipLayout();
    game.getRival().board.usePresetShipLayout();

    renderChallengerBoard(game.getChallenger().board.getBoard());
    renderRivalBoard(game.getRival().board.getBoard());
    displayPlayerTurn(game.getChallenger());

    // event handlers
    bindBoardData(game);
};
