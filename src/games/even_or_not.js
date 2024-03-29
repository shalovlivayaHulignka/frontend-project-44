import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from "../result.js";

export default () => {
    const name = greetings();
    const maxRandomNumber = 101; // т.е. максмальное число 100
    const maxSteps = 3;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let isCurrent = false;

    for(let i = 0; i < maxSteps; i++) {
        const num = Math.floor(Math.random() * maxRandomNumber);
        const isEven = num % 2 === 0;
        const current = isEven ? 'yes' : 'no';

        console.log(`Question: ${num}`);
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