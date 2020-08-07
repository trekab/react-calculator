import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      operation = '*';
      total = operate(parseInt(total, 10), -1, operation);
      next = operate(parseInt(next, 10), -1, operation);
      break;
    case '=':
      break;
    case '/':
      operation = buttonName;
      total = operate(parseInt(total, 10), parseInt(next, 10), operation);
      break;
    case '÷':
      operation = buttonName;
      total = operate(parseInt(total, 10), parseInt(next, 10), operation);
      break;
    case '+':
      operation = buttonName;
      total = operate(parseInt(total, 10), parseInt(next, 10), operation);
      break;
    case '-':
      operation = buttonName;
      total = operate(parseInt(total, 10), parseInt(next, 10), operation);
      break;
    case '%':
      operation = '/';
      total = operate(parseInt(total, 10), 100, operation);
      break;
    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
