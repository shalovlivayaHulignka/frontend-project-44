import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from "../result.js";

export default () => {
    const name = greetings();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let isCurrent = false;

    for(let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 101);
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