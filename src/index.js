import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { greeting, finMessage } from './lib';

export default (gameName, container) => {
  const userName = greeting(`${gameName}`);
  const tryQTY = 3;
  let counter = 0;
  let answer;
  let userAnswer;
  while (counter < tryQTY) {
    const data = container();
    const question = car(data);
    answer = cdr(data);

    // here we already have all vars
    console.log(`\r\nQuestion: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('\r\nCorrect!');
      counter += 1;
    } else {
      break;
    }
  }

  finMessage(counter, userName, userAnswer, answer);
};
