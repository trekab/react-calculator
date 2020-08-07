import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = null;
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  switch (operation) {
    case '+':
      result = (firstNumber.plus(secondNumber)).toString();
      break;
    case '-':
      result = (firstNumber.minus(secondNumber)).toString();
      break;
    case '*':
      result = (firstNumber.times(secondNumber)).toString();
      break;
    case '/':
      if (numberTwo === '0') {
        result = 'Division by zero is not possible.';
      } else {
        result = (firstNumber.div(secondNumber)).toString();
      }
      break;
    case '%':
      result = (firstNumber.mod(secondNumber)).toString();
      break;
    default:
      result = `Invalid operation: ${operation}`;
  }
  return result;
};

export default operate;
