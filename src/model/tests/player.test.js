import { player } from './../player.js';

describe('The player object', () => {
    test('Verify player object exists', () => {
        const playerOne = player();
        expect(playerOne).not.toBeUndefined();
    });

    test('Verify can create human player', () => {
        const playerOne = player(true);
        expect(playerOne.isHuman).toBe(true);
    });

    test('Verify can create non human player', () => {
        const playerOne = player(false);
        expect(playerOne.isHuman).toBe(false);
    });

    test('Verify player has gameboard', () => {
        const playerOne = player(true);
        expect(() => playerOne.board.getBoard()).not.toThrowError(Error);
    });

    test('Verify player has expected name', () => {
        const name = 'Kurimanju senpai';
        const kurimanju = player(true, name);
        expect(kurimanju.name).toBe(name);
    })

    test('Verify player uses default name if not specified', () => {
        const name = 'Kurimanju senpai';
        const kurimanju = player(true);
        expect(kurimanju.name).toBe(name);
    })
});
