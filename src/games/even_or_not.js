import gameCore from '../index.js';
import randomNum from '../utils.js';

const gameLvl = () => {
  const num = randomNum(1, 50);
  const question = `Question: ${num}`;
  const current = num % 2 === 0 ? 'yes' : 'no';

  return [question, current];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCore(description, gameLvl);
};
