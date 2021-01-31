import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  switch (operation) {
    case '+':
      return (firstNumber.plus(secondNumber)).toString();
    case '-':
      return (firstNumber.minus(secondNumber)).toString();
    case '×':
      return (firstNumber.times(secondNumber)).toString();
    case '÷':
      if (numberTwo === '0') {
        return '0';
      } else {
        return (firstNumber.div(secondNumber)).toString();
      }
    case '%':
      if (secondNumber.eq(0)) return '0';
      return firstNumber.mod(secondNumber).toString();
    default:
      return 0;
  }
};

export default operate;