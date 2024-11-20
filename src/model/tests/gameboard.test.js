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

    test('Verify can place ships length 1', () => {
        const board = gameboard();
        board.placeShip(0, 1, 1);
        expect(board.getBoard()[1][0].hasShip()).toBe(true);
    })

    test('Verify placeShip has index validation', () => {
        const board = gameboard();
        expect(() => board.placeShip(50, 0, 1)).not.toThrow(Error);
    })
});
