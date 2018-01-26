import { cons } from 'hexlet-pairs';
import { getRandom, isPrime } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const x = getRandom(3, 10);
    return cons(`${x}:`, isPrime(x));
  };

  run('Is this number prime?', container);
};
