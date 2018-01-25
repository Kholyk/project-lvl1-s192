import readlineSync from 'readline-sync';

export const greeting = (gameType) => {
  console.log(`Wellcome to Brain Games (set of games)! \r\n${gameType}`);
  const userName = readlineSync.question('\r\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const check = (question, format) => {
  const answer = readlineSync.question('Your answer: ');
  if (format === 'numeric') {
    return (question === Number(answer));
  }
  return (question === answer);
};

export const finMessage = (counter, userName, userAnswer, answer) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`\r\n${userName}, you've got a mistake! Correct answer was "${answer}", but you gave "${userAnswer}"`);
  }
};

export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const calc = (a, b, oper) => {
  switch (oper) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'Unknown operation';
  }
};

export const getOperator = (n) => {
  const rnd = getRandom(1, n);
  switch (rnd) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return 'Unknown operation';
  }
};

export const even = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
