let numbers = [];
let operations = [];
let currentNumber = '0';

window.addEventListener('DOMContentLoaded', init);

function init() {
  Array.from(document.getElementsByClassName('btn'))
    .forEach(btn => {
      btn.addEventListener('click', () => handleButtonPress(btn.value))
    });
}

function handleButtonPress(value) {
  if (value === '.') {
    currentNumber += '.';
    updateDisplay(currentNumber);
  } 
  else if (value === 'clear') {
    reset();
    updateDisplay();
  } else if (!isNaN(Number.parseInt(value))) {
    numberPress(value);
  } else  {
    operatorPress(value);
  }
}

function updateDisplay(num = '0') {
  const displayEl = document.getElementById('display');
  displayEl.innerText = num;
}


function reset(num = '0') {
  numbers = [];
  operations = [];
  currentNumber = num;
}

function numberPress(num) {
  currentNumber === '0' ? currentNumber = num : currentNumber += num;
  updateDisplay(currentNumber);
}
function operatorPress(op) {

 operations.push(op);
  
  numbers.push(currentNumber);

  if (op === 'equal') {
    currentNumber = calculate();
    updateDisplay(currentNumber);
  }
   else {
    currentNumber = '0';
    updateDisplay();
  }
}

function calculate() {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      total = Number.parseFloat(numbers[i]);
    } else {
      total = operate(total, Number.parseFloat(numbers[i]), operations[i - 1]);
    }
  }
  return total;
}


function operate(val1, val2, op) {
  switch (op) {
    case '+':
      return val1 + val2;

    case '-':
      return val1 - val2;

    case '*':
      return val1 * val2;

    case '/':
      return val1 / val2;
    case '%':
        return val1 % val2; 

    default:
      return '0';
  }
}






