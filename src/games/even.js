import { cons } from 'hexlet-pairs';
import { getRandom, isEven } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const x = getRandom(3, 10);
    const answer = `${x}:`;
    const question = isEven(x) ? 'yes' : 'no';
    return cons(answer, question);
  };

  run('Answer "yes" if number even otherwise answer "no".', container);
};
