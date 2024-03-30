import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from '../result.js';

const isNaturalNumber = (num) => {
  let outcome;
  if (num <= 1) {
    outcome = false;
  }

  if (num === 2 || num === 3) {
    outcome = true;
  }

  for (let i = 3; i <= num; i += 1) {
    if (num % i === 0 && num === i) {
      outcome = true;
    }
    
    if (num % 2 === 0 || num % i === 0) {
      outcome = false;
    }
  }
  return outcome;
};

export default () => {
  const name = greetings();
  const maxRandomNumber = 21; // т.е. максмальное число 20
  const maxSteps = 3;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let isCurrent = false;

  for (let i = 0; i < maxSteps; i += 1) {
    const num = Math.floor(Math.random() * maxRandomNumber); // генерация числа до 20
    const current = isNaturalNumber(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const request = readlineSync.question('Your answer: ');

    isCurrent = result(request, current, name);
    if (!isCurrent) {
      break;
    }
  }

  if (isCurrent) {
    console.log(`Congratulations, ${name}!`);
  }
};
