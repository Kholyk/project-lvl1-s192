import { cons } from 'hexlet-pairs';
import { getRandom, calc, getOperator } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const a = getRandom(5, 10);
    const b = getRandom(3, 6);
    const oper = getOperator(3);
    return cons(`${a} ${oper} ${b} = `, String(calc(a, b, oper)));
  };

  run('What is the result of the expression?', container);
};
