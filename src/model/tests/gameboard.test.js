import { gameboard } from './../gameboard.js'

describe('The gameboard object', () => {
    test('Verify gameboard object exists', () => {
        const board = gameboard();
        expect(board).not.toBeUndefined();
    })
})