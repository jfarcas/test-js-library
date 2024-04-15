(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	// src/index.js
	class Calculator {
	    sum(a, b) {
	        return a + b;
	    }
	}

	var calculator = Calculator; // CommonJS export

	var calculator$1 = /*@__PURE__*/getDefaultExportFromCjs(calculator);

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

	exports.Calculator = calculator$1;
	exports.Shapes = Shapes;

}));
