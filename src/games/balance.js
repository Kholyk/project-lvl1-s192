import { cons } from 'hexlet-pairs';
import { getRandom, normalize } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const number = getRandom(100, 400);
    return cons(`${number}:`, normalize(number));
  };

  run('Balance the given number.', container);
};
