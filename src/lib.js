import readlineSync from 'readline-sync';

export const greeting = (gameType) => {
  console.log('Wellcome to Brain Games (set of games)');
  const userName = readlineSync.question('\r\nMay I have your name? ');
  console.log(`Hello, ${userName}! Wellcome to ${gameType}`);
  return userName;
};

export const makeAsk = (askFunc, arg1, arg2, exp) => {
  console.log(`\r\nQuestion: ${arg1} ${exp} ${arg2}`);
  return askFunc(arg1, arg2);
};


export const check = (question, format) => {
  const answer = readlineSync.question('Your answer: ');
  if (format === 'numeric') {
    return (question === Number(answer));
  }
  return (question === answer);
};

export const finMessage = (counter, userName) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`\r\n${userName}, you've got a mistake! Exiting game...`);
  }
};
