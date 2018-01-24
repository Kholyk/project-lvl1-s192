import { greeting, check, makeAsk, finMessage } from './lib';

const run = (ask1, ask2, ask3, dataType, gameName) => {
  const userName = greeting(`Brain Games "${gameName}"`);

  let counter = 0;
  let exec;
  while (counter < 3) {
    const definer = (cnt) => {
      switch (cnt) {
        default:
          return ask1;
        case 1:
          return ask2;
        case 2:
          return ask3;
      }
    };
    exec = definer(counter);
    const megaAsk = makeAsk(exec.f, exec.arg1, exec.arg2, exec.act);
    if (check(megaAsk, dataType)) {
      counter += 1;
    } else {
      break;
    }
  }
  finMessage(counter, userName);
};

export default run;
