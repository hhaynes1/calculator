const btnGrid = document.getElementById('button-grid');
const resultField = document.getElementById('result');
const historyField = document.getElementById('history');

// default state
let operator = null;
let operatorSymbol = null;
let numOne = null;
let numTwo = null;
let result = null;
let alreadyCalculated = false;

// add numbers to result display
const numButtons = document.querySelectorAll('.num-buttons');
numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (resultField.textContent == 0 || alreadyCalculated) {
            resultField.textContent = btn.textContent;
            alreadyCalculated = false;
        } else {
            resultField.textContent = resultField.textContent + btn.textContent;
        }
    });
});

// return to default state
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    operator = null;
    numOne = null;
    numTwo = null;
    resultField.textContent = 0;
    historyField.textContent = '';
    alreadyCalculated = false;
});

// const periodButton = document.getElementById('period');
// periodButton.addEventListener('click', () => {
//     // number display is not zero and does not contain a period
//     console.log(resultField.textContent);
//     if (resultField.textContent !== '0' && !resultField.textContent.includes('.')) {
//         resultField.textContent += '.';
//     }
// })

// get operator and get resultField number
const funcButtons = document.querySelectorAll('.func-buttons');
funcButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        operator = btn.getAttribute('id');
        numOne = resultField.textContent;
        alreadyCalculated = true;
        operatorSymbol = btn.textContent;
        console.log(`button: ${btn.textContent}, function: ${operator}`);
    })
});

// if no operator, do nothing
// if operator and saved number, calculate with display number
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    if (operator && numOne) {
        if (alreadyCalculated) {
            numTwo = result;
        }
        numTwo = resultField.textContent;
        result = operate(operator, +numOne, +numTwo);
        console.log(typeof result);
        resultField.textContent = result;
        historyField.textContent = `${numOne} ${operatorSymbol} ${numTwo} = ${result}`;
    }
    alreadyCalculated = true;
});

function operate(operator, a, b) {
    if (b === null) {
        return a;
    }
    switch (operator) {
        case 'add':
            console.log(`operation returned: ${a + b}`);
            return a + b;
            break;
        case 'subtract':
            console.log(`operation returned: ${a - b}`);
            return a - b;
            break;
        case 'multiply':
            console.log(`operation returned: ${a * b}`);
            return a * b;
            break;
        case 'divide':
            console.log(`operation returned: ${a / b}`);
            return b === 0 ? 'inf' : a / b;
            break;
    }
}

