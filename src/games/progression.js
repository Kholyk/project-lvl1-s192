import { cons } from 'hexlet-pairs';
import { getRandom, nElementOfProgression, progression } from '../lib';
import run from '..';

export default () => {
  const container = () => {
    const start = getRandom(1, 10);
    const den = getRandom(2, 5);
    const qty = 10;
    const missed = getRandom(3, 7);
    const question = progression(start, den, qty, missed);
    const answer = String(nElementOfProgression(start, den, missed));
    return cons(question, answer);
  };

  run('What number is missing in this progression?', container);
};
