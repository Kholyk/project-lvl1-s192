import run from '../run';

const calc = () => {
  const ask1 = {
    f: (x, y) => x + y,
    arg1: Math.round(Math.random() + 10),
    arg2: Math.round((Math.random() * 10) + 1),
    act: '+',
  };
  const ask2 = {
    f: (x, y) => x - y,
    arg1: Math.round(Math.random() + 10),
    arg2: Math.round((Math.random() * 10) + 1),
    act: '-',
  };
  const ask3 = {
    f: (x, y) => x * y,
    arg1: Math.round(Math.random() + 10),
    arg2: Math.round((Math.random() * 10) + 1),
    act: '*',
  };
  return run(ask1, ask2, ask3, 'numeric', 'Calculator');
};

export default calc;
