import readlineSync from 'readline-sync';
import greetings from '../greetings.js';

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
    console.log('What is the result of the expression?');
    let isCurrent = false;
    const operations = ['+', '-', '*'];

    for(let i = 0; i < 3; i++) {
        const numOne = Math.floor(Math.random() * 101);
        const numTwo = Math.floor(Math.random() * 101);
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const current = String(resultCalculation(numOne, numTwo,operation));

        console.log(`Question: ${numOne} ${operation} ${numTwo}`);
        const request = readlineSync.question('Your answer: ');
        if(request === current) {
            console.log('Correct!');
            isCurrent = true;
        } else {
            console.log(`'${request}' is wrong answer ;(. Correct answer was '${current}'.`);
            console.log(`Let's try again, ${name}`);
            isCurrent = false;
            break;
        }
    }

    if (isCurrent) {
        console.log(`Congratulations, ${name}!`);
    }
}