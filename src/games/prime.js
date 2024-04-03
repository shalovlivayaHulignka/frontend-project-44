import randomNum from '../utils.js';
import gameCore from '../index.js';

const isPrimeNumber = (num) => {
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
    } else if (num % 2 === 0 || num % i === 0) {
      outcome = false;
      break;
    }
  }
  return outcome;
};

const getRoundData = () => {
  const num = randomNum(1, 50);
  const question = `Question: ${num}`;
  const current = isPrimeNumber(num) ? 'yes' : 'no';

  return [question, current];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameCore(description, getRoundData);
};
