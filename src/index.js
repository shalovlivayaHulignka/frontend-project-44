import readlineSync from 'readline-sync';

export default (description, getRoundData) => {
  const maxSteps = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < maxSteps; i += 1) {
    const [question, current] = getRoundData();
    console.log(question);
    const request = readlineSync.question('Your answer: ');

    if (request === current) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${request}' is wrong answer ;(. Correct answer was '${current}'.\nLet's try again, ${userName}!`,
      );
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
