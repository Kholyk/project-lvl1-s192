import { cons } from 'hexlet-pairs';
import make from '../run';

export default () => {
  // Function of game
  const calc = (a, b, oper) => {
    switch (oper) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        return 'Unknown operation';
    }
  };

  const getOperator = () => {
    const rnd = Math.round((Math.random() * 2) + 1);
    switch (rnd) {
      case 1:
        return '+';
      case 2:
        return '-';
      case 3:
        return '*';
      default:
        return 'Unknown operation';
    }
  };
  // End function of game
  const getRandom = () => Math.round(Math.random() * 10);
  const container = () => {
    const a = getRandom();
    const b = getRandom();
    const oper = getOperator();
    return cons(`Find a value of expression: ${a} ${oper} ${b} = `, String(calc(a, b, oper)));
  };

  make('Calculator', container);
};
