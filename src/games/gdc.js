import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from "../result.js";

const gdcCalculation = (numOne, numTwo) => {
    if (numOne === 0) return numTwo;
    return gdcCalculation(numTwo % numOne, numOne);
}

export default () => {
    const name = greetings();
    console.log('Find the greatest common divisor of given numbers.');
    let isCurrent = false;

    for(let i = 0; i < 3; i++) {
        const numOne = Math.floor(Math.random() * 101);
        const numTwo = Math.floor(Math.random() * 101);
        const current = String(gdcCalculation(numOne, numTwo));

        console.log(`Question: ${numOne} ${numTwo}`);
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