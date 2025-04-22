const { addition } = require('../src/math');

describe('Tests de la fonction addition', () => {
    test('additionne 5 + 5 et donne 10', () => {
        expect(addition(5, 5)).toBe(10);
    });
});
