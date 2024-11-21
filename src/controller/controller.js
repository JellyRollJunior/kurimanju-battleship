import { player } from './../model/player.js';
import { renderPlayerOneBoard, renderPlayerTwoBoard } from './../view/view.js';
export { init };

const init = () => {
    // init boards and place ships on board
    const playerOne = player(true);
    const playerTwo = player(false);

    // player one ships
    playerOne.board.placeShip(0, 0, 2, true);
    playerOne.board.placeShip(1, 0, 2, false);
    playerOne.board.prettyPrintBoard();

    // player two ships
    playerTwo.board.placeShip(0, 0, 2, true);
    playerTwo.board.placeShip(0, 3, 2, false);
    playerTwo.board.prettyPrintBoard();

    // player two received hits
    playerTwo.board.receiveHit(0, 0);
    playerTwo.board.receiveHit(0, 1);
    playerTwo.board.receiveHit(0, 3);
    playerTwo.board.receiveHit(3, 1);
    playerTwo.board.receiveHit(1, 3);
    console.log(playerTwo.board.areAllSunk());

    // render board
    renderPlayerOneBoard(playerOne.board.getBoard());
    renderPlayerTwoBoard(playerTwo.board.getBoard());
};
