const { fixId } = require('./users');

describe('users', () => {
    test('fixID', () => {
        expect(fixId("1")).toBe(1);
    });
})
