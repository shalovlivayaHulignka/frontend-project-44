import randomNum from '../utils.js';
import gameCore from '../index.js';

const progressionGenerator = (first, step, length) => {
  const data = [first];

  for (let i = 0; i < length - 1; i += 1) {
    data.push(data[i] + step);
  }

  const index = Math.floor(Math.random() * data.length);
  const current = data[index];
  data[index] = '..';

  return [data.join(' '), current];
};

const gameLvl = () => {
  const numFirst = randomNum(1, 20);
  const step = randomNum(1, 20);
  const randomLength = randomNum(5, 10);
  const progressionData = progressionGenerator(numFirst, step, randomLength);
  const question = `Question: ${progressionData[0]}`;
  const current = String(progressionData[1]);

  return [question, current];
};

export default () => {
  const description = 'What number is missing in the progression?';
  gameCore(description, gameLvl);
};
