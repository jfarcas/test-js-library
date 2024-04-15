// src/shapes.js
class Shapes {
    squareArea(side) {
        return side * side;
    }

    rectangleArea(firstSide, secondSide) {
        return firstSide * secondSide;
    }

    circleArea(radius) {
        return Math.PI * radius * radius;
    }
}

export default Shapes;
