import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from '../result.js';

const gdcCalculation = (numOne, numTwo) => {
  if (numOne === 0) return numTwo;
  return gdcCalculation(numTwo % numOne, numOne);
};

export default () => {
  const name = greetings();
  const maxRandomNumber = 101; // т.е. максмальное число 100
  const maxSteps = 3;

  console.log('Find the greatest common divisor of given numbers.');
  let isCurrent = false;

  for (let i = 0; i < maxSteps; i += 1) {
    const numOne = Math.floor(Math.random() * maxRandomNumber);
    const numTwo = Math.floor(Math.random() * maxRandomNumber);
    const current = String(gdcCalculation(numOne, numTwo));

    console.log(`Question: ${numOne} ${numTwo}`);
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
