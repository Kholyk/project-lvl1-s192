import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { greeting, finMessage } from './lib';

export default (gameName, container) => {
  const userName = greeting(`Brain Games "${gameName}"`);

  let counter = 0;
  while (counter < 3) {
    const data = container();
    const question = car(data);
    const answer = cdr(data);

    // here we already have all vars
    console.log(`\r\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('\r\nCorrect!');
      counter += 1;
    } else {
      finMessage(counter, userName);
      break;
    }
  }

  finMessage(counter, userName);
};
