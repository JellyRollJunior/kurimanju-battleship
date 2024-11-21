import { player } from './../model/player.js';
import { renderPlayerOneBoard, renderPlayerTwoBoard } from './../view/view.js';
export { init };

const init = () => {
    // init boards and place ships on board
    const playerOne = player(true);
    const playerTwo = player(false);

    playerOne.board.placeShip(0, 0, 2, true);
    playerOne.board.placeShip(1, 0, 2, false);
    playerOne.board.prettyPrintBoard();

    playerTwo.board.placeShip(0, 0, 2, true);
    playerTwo.board.placeShip(0, 3, 2, false);
    playerTwo.board.prettyPrintBoard();

    renderPlayerOneBoard(playerOne.board.getBoard());
};