import { cons } from 'hexlet-pairs';
import { getRandom, progression } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const start = getRandom(1, 10);
    const step = getRandom(2, 5);
    const qty = 10;
    const missed = getRandom(3, 7);
    const func = x => x + step;
    const result = progression(start, func, qty, missed);
    return cons(`${result.outProgr}`, String(result.missed));
  };

  run('What number is missing in this progression?', container);
};
