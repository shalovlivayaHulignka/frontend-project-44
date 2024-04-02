import randomNum from '../utils.js';
import gameCore from '../index.js';

const operations = ['+', '-', '*'];

const resultCalculation = (numOne, numTwo, operation) => {
  let outcome;
  switch (operation) {
    case '+':
      outcome = numOne + numTwo;
      break;
    case '-':
      outcome = numOne - numTwo;
      break;
    case '*':
      outcome = numOne * numTwo;
      break;
    default:
      break;
  }
  return outcome;
};

const gameLvl = () => {
  const numOne = randomNum(1, 50);
  const numTwo = randomNum(1, 50);
  const operation = operations[randomNum(1, operations.length)];
  const question = `Question: ${numOne} ${operation} ${numTwo}`;
  const current = String(resultCalculation(numOne, numTwo, operation));

  return [question, current];
};

export default () => {
  const description = 'What is the result of the expression?';
  gameCore(description, gameLvl);
};
