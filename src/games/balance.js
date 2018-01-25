import { cons } from 'hexlet-pairs';
import { getRandom, asc, normalize } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const number = getRandom(100, 400);
    return cons(`${number}:`, asc(String(normalize(number))));
  };

  run('Balance the given number.', container);
};
