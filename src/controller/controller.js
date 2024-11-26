import { gameController } from '../model/game-controller.js';
import { renderPlayerOneBoard, renderPlayerTwoBoard } from './../view/view.js';
export { init };

const computerPlaysRound = (game) => {
    const randomAttack = game.getChallenger().board.getRandomUnhitCoordinate();
    game.playRound(randomAttack[0], randomAttack[1]);
    renderPlayerOneBoard(game.getChallenger().board.getBoard());
    renderPlayerTwoBoard(game.getRival().board.getBoard());
}

const handleBoardClick = (game) => {
    const playerOneBoard = document.querySelector('#rival-board');
    playerOneBoard.addEventListener('click', async (event) => {
        const target = event.target;
        if (target.tagName == 'TD') {
            const x = target.dataset.column;
            const y = target.dataset.row;
            game.playRound(x, y);
            renderPlayerOneBoard(game.getChallenger().board.getBoard());
            renderPlayerTwoBoard(game.getRival().board.getBoard());
            // if defending player is challenger and rival is computer, computer attacks
            while (game.getDefendingPlayer() == game.getChallenger() && game.getRival().isHuman == false) {
                // computer thinks!
                await new Promise(resolve => setTimeout(resolve, 2000));
                computerPlaysRound(game);
            }
            if (game.isGameOver()) {
                const winner = game.getWinner();
                console.log(`winner is ${winner.name}!`);
            }
        }
    });
};

const init = () => {
    // init game and place ships
    const game = gameController('Shisa');
    game.getChallenger().board.usePresetShipLayout();
    game.getRival().board.usePresetShipLayout();

    // render board
    renderPlayerOneBoard(game.getChallenger().board.getBoard());
    renderPlayerTwoBoard(game.getRival().board.getBoard());

    // event handlers
    handleBoardClick(game);
};
