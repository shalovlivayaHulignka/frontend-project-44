import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from '../result.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

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

export default () => {
  const name = greetings();
  const maxRandomNumber = 21; // т.е. максмальное число 20
  const maxSteps = 3;
  const minRandomLength = 5;
  const maxRandomLength = 10;

  console.log('What number is missing in the progression?');
  let isCurrent = false;

  for (let i = 0; i < maxSteps; i += 1) {
    const numFirst = Math.floor(Math.random() * maxRandomNumber);
    const step = Math.floor(Math.random() * maxRandomNumber);
    // минимальная и максимальная длина прогрессии
    const randomLength = randomNumber(minRandomLength, maxRandomLength);
    const progressionData = progressionGenerator(numFirst, step, randomLength);
    const current = String(progressionData[1]);

    console.log(`Question: ${progressionData[0]}`);
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
