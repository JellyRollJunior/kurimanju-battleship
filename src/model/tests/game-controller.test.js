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
    });

    test('Verify game returns active player', () => {
        const game = gameController();
        expect(game.getDefendingPlayer()).toBe(game.getRival());
    });

    test('Verify playRound will call receiveHit on defending player', () => {
        const game = gameController();
        game.getRival().board.receiveHit = jest.fn();
        game.playRound(0, 0);
        expect(game.getRival().board.receiveHit).toBeCalledTimes(1);
    });

    test('Verify playRound will swap defending player if attacker missed', () => {
        const game = gameController();
        game.playRound(0, 0);
        expect(game.getDefendingPlayer()).toBe(game.getChallenger());
    });

    test('Verify playRound will not swap defending player if attacker hit', () => {
        const game = gameController();
        game.getRival().board.placeShip(0, 0, 1, true);
        game.playRound(0, 0);
        expect(game.getDefendingPlayer()).toBe(game.getRival());
    });

    test('Verify isGameOver returns false player if game ongoing', () => {
        const game = gameController();
        expect(game.isGameOver()).toBe(false);
    });

    test('Verify isGameOver returns true player if rival lost', () => {
        const game = gameController();
        game.getChallenger().board.placeShip(0, 0, 1, true);
        game.getRival().board.placeShip(0, 0, 1, true);
        game.playRound(0, 0);
        expect(game.isGameOver()).toBe(true);
    });

    test('Verify isGameOver returns true player if challenger lost', () => {
        const game = gameController();
        game.getChallenger().board.placeShip(0, 0, 1, true);
        game.getRival().board.placeShip(0, 0, 1, true);
        game.playRound(1, 1);
        game.playRound(0, 0);
        expect(game.isGameOver()).toBe(true);
    });

    test('Verify getWinner returns winning challenger', () => {
        const game = gameController();
        game.getChallenger().board.placeShip(0, 0, 1, true);
        game.getRival().board.placeShip(0, 0, 1, true);
        game.playRound(0, 0);
        expect(game.getWinner()).toBe(game.getChallenger());
    });

    test('Verify getWinner returns winning rival', () => {
        const game = gameController();
        game.getChallenger().board.placeShip(0, 0, 1, true);
        game.getRival().board.placeShip(0, 0, 1, true);
        game.playRound(1, 1);
        game.playRound(0, 0);
        expect(game.getWinner()).toBe(game.getRival());
    });

    test('Verify getWinner returns null if no winner', () => {
        const game = gameController();
        game.getChallenger().board.placeShip(0, 0, 1, true);
        game.getRival().board.placeShip(0, 0, 1, true);
        expect(game.getWinner()).toBeNull();
    });
});
