import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from "../result.js";

const resultCalculation = (numOne, numTwo, operation) => {
    switch (operation) {
        case '+':
            return numOne + numTwo;
        case '-':
            return numOne - numTwo;
        case '*':
            return numOne * numTwo;
        default:
            break;
    }
}

export default () => {
    const name = greetings();
    const maxRandomNumber = 101; // т.е. максмальное число 100
    const maxSteps = 3;

    console.log('What is the result of the expression?');
    let isCurrent = false;
    const operations = ['+', '-', '*'];

    for(let i = 0; i < maxSteps; i++) {
        const numOne = Math.floor(Math.random() * maxRandomNumber);
        const numTwo = Math.floor(Math.random() * maxRandomNumber);
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const current = String(resultCalculation(numOne, numTwo,operation));

        console.log(`Question: ${numOne} ${operation} ${numTwo}`);
        const request = readlineSync.question('Your answer: ');

        isCurrent = result(request, current, name);
        if(!isCurrent) {
            break;
        }
    }

    if (isCurrent) {
        console.log(`Congratulations, ${name}!`);
    }
}