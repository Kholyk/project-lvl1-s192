import { cons } from 'hexlet-pairs';
import run from '..';

export default () => {
  // Function of game
  const NOD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return NOD(b, a % b);
  };
  // End function of game
  const getRandom = () => Math.round(Math.random() * 10);
  const container = () => {
    const x = getRandom();
    const y = getRandom();
    return cons(`Find a NOD 0f ${x} and ${y}:`, String(NOD(x, y)));
  };

  run('NOD GAME', container);
};
