// Assuming Shapes is exported from src/index.js
import { Shapes } from './../src/index';

describe('Shapes', () => {
    let shapes;

    beforeEach(() => {
        shapes = new Shapes();
    });

    test('calculates area of a square', () => {
        expect(shapes.squareArea(4)).toBe(16);
    });

    test('calculates area of a rectangle', () => {
        expect(shapes.rectangleArea(4, 5)).toBe(20);
    });

    test('calculates area of a circle', () => {
        const radius = 3;
        const expectedArea = Math.PI * radius * radius;
        expect(shapes.circleArea(radius)).toBeCloseTo(expectedArea);
    });

    // Add more tests as needed for other shapes or methods
});
