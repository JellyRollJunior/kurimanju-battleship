import { jest } from '@jest/globals';
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
        expect(board.getCell(0, 1).hasShip()).toBe(true);
        expect(board.getCell(0, 1).hasShip()).toBe(true);
    });

    test('Verify can place ship of length 2', () => {
        const board = gameboard();
        board.placeShip(0, 0, 2, true);
        const shipReferenceOne = board.getBoard()[0][0].getShip();
        const shipReferenceTwo = board.getBoard()[1][0].getShip();
        expect(shipReferenceOne).toBe(shipReferenceTwo);
    });

    test('Verify placeShip has index validation', () => {
        const board = gameboard();
        expect(() => board.placeShip(50, 0, 1)).not.toThrow(Error);
        expect(() => board.placeShip(0, 0, 60)).not.toThrow(Error);
    });

    test('Verify receiveHit sets cell hitStatus to true', () => {
        const board = gameboard();
        board.receiveHit(0, 0);
        expect(board.getCell(0, 0).isHit()).toBe(true);
    });

    test('Verify receiveHit calls hit on ship', () => {
        const board = gameboard();
        board.placeShip(0, 0, 1, true);
        const ship = board.getCell(0, 0).getShip();
        ship.hit = jest.fn();
        board.receiveHit(0, 0);
        expect(ship.hit).toBeCalledTimes(1);
    });

    test('Verify areAllSunk returns false if total ship health > 0', () => {
        const board = gameboard();
        board.placeShip(0, 0, 1, true);
        expect(board.areAllSunk()).toBe(false);
    });

    test('Verify areAllSunk returns true if total ship health <= 0', () => {
        const board = gameboard();
        board.placeShip(0, 0, 1, true);
        board.receiveHit(0, 0);
        expect(board.areAllSunk()).toBe(true);
    });
});
