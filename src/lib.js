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

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const balanceNum = (number) => {
  const strFromNum = String(number);
  const max = Math.max(...strFromNum);
  const min = Math.min(...strFromNum);

  if ((max - min) <= 1) {
    return number.split('').sort().join('');
  }
  const newString1 = strFromNum.replace(min, min + 1);
  const newString2 = newString1.replace(max, max - 1);
  return balanceNum(newString2);
};
export { balanceNum };

// Progression
export const nElementOfProgression = (first, den, num) => {
  if (num <= 1) {
    return first;
  }
  return nElementOfProgression(first, den, num - 1) + den;
};

export const progression = (first, den, n, missed) => {
  if (n <= 0) {
    return '';
  }
  if (n === missed) {
    return String(`${progression(first, den, n - 1, missed)} ..`);
  }
  return String(`${progression(first, den, n - 1, missed)} ${nElementOfProgression(first, den, n)}`);
};

// End of Progression

export const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  let i = 2;
  while (i <= n / 2 && i !== n) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
