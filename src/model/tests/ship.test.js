import { ship } from './../ship.js';

describe('The ship object', () => {
    test('Ship object exists', () => {
        const myShip = ship();
        expect(myShip).toBe(myShip);
    });

    test('Verify ship created with specified length', () => {
        const battleship = ship(4);
        expect(battleship.length).toBe(4);
    });

    test('Verify ship has been hit', () => {
        const length = 4;
        const battleship = ship(length);
        battleship.hit();
        expect(battleship.getHealth()).toBe(length - 1);
    });

    test('Verify ship has sunk', () => {
        const length = 4;
        const battleship = ship(length);
        for (let i = 0; i < length; i++) {
            battleship.hit();
        }
        expect(battleship.isSunk()).toBe(true);
    });
});
