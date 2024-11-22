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
});
