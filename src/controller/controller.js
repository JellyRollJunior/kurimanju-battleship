import { gameController } from '../model/game-controller.js';
import { renderPlayerOneBoard, renderPlayerTwoBoard, clearBoards } from './../view/view.js';
export { init };

const handleBoardClick = (game) => {
    const playerOneBoard = document.querySelector('#rival-board');
    playerOneBoard.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName == 'TD') {
            console.log(`col: ${target.dataset.column}`);
            console.log(`row: ${target.dataset.row}`);
        }
    })
}

const init = () => {
    // init game and place ships
    const game = gameController('Shisa');
    game.getChallenger().board.usePresetShipLayout();
    game.getRival().board.usePresetShipLayout();

    // play game
    game.playRound(0, 0);
    game.playRound(0, 1);
    game.playRound(0, 3);
    game.playRound(3, 1);
    game.playRound(1, 3);

    // render board
    renderPlayerOneBoard(game.getChallenger().board.getBoard());
    renderPlayerTwoBoard(game.getRival().board.getBoard());

    // event handlers
    handleBoardClick();
};
