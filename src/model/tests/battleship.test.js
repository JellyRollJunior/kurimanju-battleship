import { expect, jest } from '@jest/globals';
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
        expect(game.getDefendingPlayer()).toBe(game.getRival());
    })

    test('Verify playRound will call receiveHit on defending player', () => {
        const game = gameController();
        game.getRival().getBoard().receiveHit = jest.fn();
        game.playRound(0, 0);
        expect(game.getRival().getBoard().receiveHit).toBeCalledTimes(1);
    })
});
