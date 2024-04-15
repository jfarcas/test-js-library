// Assuming Calculator is exported from src/index.js
import { Calculator } from './../src/index';

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('adds two numbers', () => {
        expect(calc.sum(1, 2)).toBe(3);
    });

    // Add more tests as needed for other methods or edge cases
});
