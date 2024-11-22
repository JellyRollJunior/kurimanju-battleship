import { gameController } from '../game-controller.js';

describe('The battleship object', () => {
    test('Verify controller object exists', () => {
        const game = gameController();
        expect(game).not.toBeUndefined();
    });

    test('Verify game has two players', () => {
        const game = gameController();
        expect(game.getPlayer()).not.toBeUndefined();
        expect(game.getRival()).not.toBeUndefined();
    })

    test('Verify game returns active player', () => {
        const game = gameController();
        expect(game.getActivePlayer()).toBe(game.getPlayer());
    })
});
