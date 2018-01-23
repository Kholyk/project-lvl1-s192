import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\r\nMay I have your name? ');

  let counter = 0;
  while (counter < 3) {
    const question = Math.round(100 * Math.random());
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (question % 2 === 0 && answer === 'yes') {
      counter += 1;
    } else if (question % 2 !== 0 && answer === 'no') {
      counter += 1;
    } else {
      break;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Wrong... exiting game.');
  }
};

export default even;
