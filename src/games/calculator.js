import randomNum from '../utils.js';
import gameCore from '../index.js';

const operations = ['+', '-', '*'];

const resultCalculation = (numOne, numTwo, operation) => {

  switch (operation) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      return console.log('Неизвестная операция');
  }

};

const getRoundData = () => {
  const numOne = randomNum(1, 50);
  const numTwo = randomNum(1, 50);
  const operation = operations[randomNum(1, operations.length)];
  const question = `Question: ${numOne} ${operation} ${numTwo}`;
  const current = String(resultCalculation(numOne, numTwo, operation));

  return [question, current];
};

export default () => {
  const description = 'What is the result of the expression?';
  gameCore(description, getRoundData);
};
