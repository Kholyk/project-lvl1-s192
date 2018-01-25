import { cons } from 'hexlet-pairs';
import { getRandom, even } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const x = getRandom(3, 10);
    return cons(`${x}:`, String(even(x)));
  };

  run('Answer "yes" if number even otherwise answer "no".', container);
};
