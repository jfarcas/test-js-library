# My Library

This library provides easy-to-use functionalities to perform mathematical calculations and shape area calculations. It includes two main modules: `Calculator` for basic arithmetic operations and `Shapes` for calculating the areas of different geometric shapes.

## Features

- **Calculator**: Perform basic arithmetic operations like addition.
- **Shapes**: Calculate the areas of various shapes like squares and circles.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Clone repository 
```bash
git https://github.com/jfarcas/test-js-library
cd test-js-library
```
 ### Install dependencies
```bash
npm install 
```

### Build the project
```bash
npm run build 
```

### Run tests
```bash
npm run test 
```

## Usage
#### On node-js project
```javascript
import { Calculator } from 'my-library';

const calculator = new Calculator();
console.log("Sum of 3 and 5:", calculator.sum(3, 5));
 
```

#### On web pages
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sample Page with library</title>
</head>
<body>

<main>
    <header>
        <h1> Load classes</h1>
    </header>
    <section>
        <header>
            <h2>Load Calculator</h2>
            <p>If calculator is loaded correctly you will see the sum result</p>
            <p>La suma 3 + 5 es: <span id="sumResult"></span></p>
        </header>
    </section>

    <section>
        <header>
            <h2>Load Shapes</h2>
            <p>If Shape is loaded correctly you will see the shape result</p>
            <p>The area of the rectangle with sides 5 and 10 is: <span id="areaResult"></span></p>
        </header>
    </section>
</main>
<script src="./dist/index.js"></script>
<script defer>
    const calculator = new MyLibrary.Calculator();
    const shape = new MyLibrary.Shapes();
    const sum = calculator.sum(3,5)
    const area = shape.rectangleArea(5, 4)
    document.querySelector('#sumResult').innerHTML = sum
    document.querySelector('#areaResult').innerHTML = area
</script>

</body>
</html>
 
```


## Autores ✒️

* **Iulian Farcas** - *Crear una primera version* - [jfarcas](https://github.com/jfarcas)
