import { gameboard } from './../gameboard.js';

describe('The gameboard object', () => {
    test('Verify gameboard object exists', () => {
        const board = gameboard();
        expect(board).not.toBeUndefined();
    });

    test('Verify gameboard can return board state', () => {
        const board = gameboard();
        expect(board.getBoard().length).toStrictEqual(board.length);
        expect(board.getBoard()[0].length).toStrictEqual(board.length);
    });
});
