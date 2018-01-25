import { cons } from 'hexlet-pairs';
import { getRandom, gcd } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const x = getRandom(3, 10);
    const y = getRandom(2, 40);
    return cons(`${x} || ${y}:`, String(gcd(x, y)));
  };

  run('Find the greatest common divisor of given numbers.', container);
};
