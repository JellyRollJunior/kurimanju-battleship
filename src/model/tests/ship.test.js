import { ship } from './../ship.js';

describe('The ship object', () => {
    test('Ship object exists', () => {
        const myShip = ship();
        expect(myShip).toBe(myShip)
    });
});
