import readlineSync from 'readline-sync';

//Ask user about his name
export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`\r\nHello, ${userName}!`);
};
//End of greeting
