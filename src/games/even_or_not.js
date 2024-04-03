import gameCore from '../index.js';
import randomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const num = randomNum(1, 50);
  const question = `Question: ${num}`;
  const current = isEven(num) ? 'yes' : 'no';

  return [question, current];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCore(description, getRoundData);
};
