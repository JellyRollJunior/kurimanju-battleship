import { expect, jest } from '@jest/globals';
import { gameController } from '../game-controller.js';

describe('The battleship object', () => {
    test('Verify controller object exists', () => {
        const game = gameController();
        expect(game).not.toBeUndefined();
    });

    test('Verify game has two players', () => {
        const game = gameController();
        expect(game.getChallenger()).not.toBeUndefined();
        expect(game.getRival()).not.toBeUndefined();
    })

    test('Verify game returns active player', () => {
        const game = gameController();
        expect(game.getDefendingPlayer()).toBe(game.getRival());
    })

    test('Verify playRound will call receiveHit on defending player', () => {
        const game = gameController();
        game.getRival().board.receiveHit = jest.fn();
        game.playRound(0, 0);
        expect(game.getRival().board.receiveHit).toBeCalledTimes(1);
    })

    test('Verify playRound will swap defending player if attacker missed', () => {
        const game = gameController();
        game.playRound(0, 0);
        expect(game.getDefendingPlayer()).toBe(game.getChallenger());
    })
});
