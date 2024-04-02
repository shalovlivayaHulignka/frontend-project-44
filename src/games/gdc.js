import randomNum from "../utils.js";
import gameCore from "../index.js";

const gdcCalculation = (numOne, numTwo) => {
  if (numOne === 0) return numTwo;
  return gdcCalculation(numTwo % numOne, numOne);
};

const gameLvl = () => {
  const numOne = randomNum(1, 50);
  const numTwo = randomNum(1, 50);
  const question = `Question: ${numOne} ${numTwo}`;
  const current = String(gdcCalculation(numOne, numTwo));

  return [question, current];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gameCore(description, gameLvl);
};
