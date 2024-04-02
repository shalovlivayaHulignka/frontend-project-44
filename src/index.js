import readlineSync from 'readline-sync';

export default (description, gameLvl) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const maxSteps = 3;
  let isCurrent = true;

  for (let i = 0; i < maxSteps; i += 1) {
    const [question, current] = gameLvl();
    console.log(question);
    const request = readlineSync.question('Your answer: ');

    if (request === current) {
      console.log('Correct!');
    } else {
      console.log(`'${request}' is wrong answer ;(. Correct answer was '${current}'.`);
      console.log(`Let's try again, ${userName}!`);
      isCurrent = false;
      break;
    }
  }

  if (isCurrent) {
    console.log(`Congratulations, ${userName}!`);
  }
};
