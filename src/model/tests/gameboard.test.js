import { expect, jest } from '@jest/globals';
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

    test('Verify placeShip does not place ship ontop of ship', () => {
        const board = gameboard();
        // attempt to place ships on top of each other
        // S O
        // S S
        // ^ this square has overlapping ship 1 and 2
        board.placeShip(0, 0, 2, true);
        expect(board.placeShip(0, 1, 2, false)).toBe(false);
        expect(board.getCell(1, 1).hasShip()).toBe(false);
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
        board.placeShip(0, 1, 1, true);
        board.receiveHit(0, 0);
        expect(board.areAllSunk()).toBe(false);
    });

    test('Verify areAllSunk returns true if total ship health <= 0', () => {
        const board = gameboard();
        board.placeShip(0, 0, 1, true);
        board.placeShip(0, 1, 1, true);
        board.receiveHit(0, 0);
        board.receiveHit(0, 1);
        expect(board.areAllSunk()).toBe(true);
    });

    test('Verify getRandomUnhitCoordinate returns a coordinate that is not hit before', () => {
        const board = gameboard();
        // hit every square except (0, 0)
        board.placeShip(0, 0, 1, true);
        for (let i = 1; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                board.receiveHit(i, j);
            }
        }
        for (let i = 1; i < board.length; i++) {
            board.receiveHit(0, i);
        }
        const validAttack = board.getRandomUnhitCoordinate();
        expect(validAttack[0]).toBe(0);
        expect(validAttack[1]).toBe(0);
        expect(board.getCell(validAttack[0], validAttack[1]).isHit()).toBe(
            false
        );
    });

    test('Verify usePresetShipLayout places ships in predefined layout', () => {
        const preset = gameboard();
        preset.placeShip(1, 8, 1, false);
        preset.placeShip(4, 5, 1, true);
        preset.placeShip(0, 0, 2, true);
        preset.placeShip(5, 1, 2, false);
        preset.placeShip(1, 4, 2, true);
        preset.placeShip(3, 7, 3, false);
        preset.placeShip(3, 3, 3, false);
        preset.placeShip(8, 5, 4, true);
        const board = gameboard();
        board.usePresetShipLayout();
        expect(board.getBoard().toString()).toStrictEqual(
            preset.getBoard().toString()
        );
    });
});
