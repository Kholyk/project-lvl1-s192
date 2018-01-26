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
// for normalizer
const toString = num => String(num);
const len = str => str.length;
const head = str => str.substr(0, 1);
const tail = str => str.substr(1, str.length);


const min = (num) => {
  const string = toString(num);
  const length = len(string);
  if (length === 1) {
    return Number(string);
  }
  if (Number(head(string)) < Number(min(tail(string)))) {
    return Number(head(string));
  }
  return Number(min(tail(string)));
};

const max = (num) => {
  const string = toString(num);
  const length = len(string);
  if (length === 1) {
    return Number(string);
  }
  if (Number(head(string)) > Number(max(tail(string)))) {
    return Number(head(string));
  }
  return Number(max(tail(string)));
};

export const replaceNum = (str, from, to) => str.replace(from, to);

// sort ASC should be added
const normalize = (number) => {
  const minV = (min(number));
  const maxV = (max(number));
  if ((maxV - minV) <= 1) {
    return number;
  }
  const avgV = (maxV - minV) / 2;
  const avgN = (avgV % 2 !== 0) ? Math.round(avgV) : avgV;
  const newMin = minV + avgN;
  const newMax = maxV - avgN;
  const newNumber1 = Number(replaceNum(String(number), minV, newMin));
  const newNumber2 = Number(replaceNum(String(newNumber1), maxV, newMax));
  return normalize(newNumber2);
};
export { normalize };

export const asc = str => str.split('').sort().join('');

export const progression = (st, func, qty, blanc) => {
  let out = '';
  let start = st;
  const spacer = '..';
  let missedEl;
  for (let i = 1; i <= (qty - 1); i += 1) {
    if (i === blanc) {
      missedEl = func(start);
      start = func(start);
      out += `${spacer} `;
    } else {
      out += `${func(start)} `;
      start = func(start);
    }
  }
  return {
    outProgr: out,
    missed: missedEl,
  };
};

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

// end normalizer set
