import run from '../run';

const nod = () => {
  const NOD = (a, b) => {
    if (b === 0) {
      return a;
    }

    return NOD(b, a % b);
  };
  const ask1 = {
    f: (x, y) => NOD(x, y),
    arg1: Math.round(Math.random() + 10),
    arg2: Math.round((Math.random() * 10) + 1),
    act: '',
  };
  const ask2 = {
    f: (x, y) => NOD(x, y),
    arg1: Math.round(Math.random() + 10),
    arg2: Math.round((Math.random() * 10) + 1),
    act: '',
  };
  const ask3 = {
    f: (x, y) => NOD(x, y),
    arg1: Math.round(Math.random() + 10),
    arg2: Math.round((Math.random() * 10) + 1),
    act: '',
  };
  return run(ask1, ask2, ask3, 'numeric', 'NOD');
};

export default nod;
