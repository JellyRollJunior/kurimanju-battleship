import { player } from './../player.js'

describe('The player object', () => {
    test('Verify player object exists', () => {
        const playerOne = player();
        expect(playerOne).not.toBeUndefined();
    })
})