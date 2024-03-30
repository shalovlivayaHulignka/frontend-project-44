import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from '../result.js';

function isNaturalNumber(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 3; i <= num; i++) {
    if (num % i === 0 && num === i) return true;
    if (num % 2 === 0 || num % i === 0) return false;
  }
}

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
