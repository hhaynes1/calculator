const btnGrid = document.getElementById('button-grid');
const resultField = document.getElementById('result');

let operator;
let numOne;
let numTwo;

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return b === 0 ? 'inf' : a / b;
            break;
    }
}