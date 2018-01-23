import readlineSync from 'readline-sync';

// Ask user about his name
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`\r\nHello, ${userName}!`);
};

export default greeting;
// End of greeting
