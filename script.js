let displayValue = '';
let currentOperator = null;
let previousValue = null;

function appendNumber(number) {
 
  displayValue += number;
  document.getElementById('result').value = previousValue ? previousValue + currentOperator + displayValue : displayValue;
}

function appendOperator(operator) {
  if (displayValue === '') return; 
  if (previousValue !== null && currentOperator !== null) {
    
    calculate();
  }
  
  previousValue = displayValue;
  currentOperator = operator;
  displayValue = ''; 
  document.getElementById('result').value = previousValue + currentOperator; // Show the operation
}

function calculate() {
  if (currentOperator === null || previousValue === null) return; 

  let result = 0;
  const prev = parseFloat(previousValue);
  const current = parseFloat(displayValue);

  switch (currentOperator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  
  displayValue = result.toString(); 
  document.getElementById('result').value = result; 
  previousValue = null; 
  currentOperator = null; 
}

function clearDisplay() {
  displayValue = '';
  currentOperator = null;
  previousValue = null;
  document.getElementById('result').value = ''; // Clear the display
}

function deleteDigit() {
  displayValue = displayValue.toString().slice(0, -1); 
  document.getElementById('result').value = previousValue ? previousValue + currentOperator + displayValue : displayValue;
}

function calculatePercentage() {
  if (displayValue === '') return; 
  displayValue = (parseFloat(displayValue) / 100).toString(); // Calculate percentage
  document.getElementById('result').value = displayValue; // Show the result
}
