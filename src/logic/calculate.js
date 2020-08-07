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
      total = operate(parseFloat(total, 10), -1, operation);
      break;
    case '/':
    case '+':
    case '*':
    case '%':
    case '-':
      if (total) {
        if (next && operation) {
          next = operate(parseFloat(next), parseFloat(total), operation);
          total = null;
        }
        next = total;
        total = null;
        operation = buttonName;
      } else {
        total = null;
        operation = buttonName;
      }
      break;
    case '=':
      if (!total) {
        total = next;
        next = null;
        operation = buttonName;
      } else if (!next) {
        next = null;
        operation = buttonName;
      } else {
        total = operate(parseFloat(next), total, operation);
        next = null;
        operation = null;
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (total && total !== '0' && total !== 'Error'){
        total += buttonName;
      } else {
        total = buttonName;
      } 
      break;
    default:
      total = 'Invalid';
      break;
  }

  return { total, next, operation };
};

export default calculate;
