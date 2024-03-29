import readlineSync from 'readline-sync';
import greetings from '../greetings.js';
import result from "../result.js";

const randomNumber = (min, max) =>  Math.floor(Math.random() * (max - min) + min);

const progressionGenerator = (first, step, length) => {
    const result = [first];

    for (let i = 0; i < length - 1; i++) {
        result.push(result[i] + step);
    }

    const index = Math.floor(Math.random() * result.length);
    const current = result[index];
    result[index] = '..';

    return [result.join(' '), current];
}

export default () => {
    const name = greetings();
    console.log('What number is missing in the progression?');
    let isCurrent = false;

    for(let i = 0; i < 3; i++) {
        const numFirst = Math.floor(Math.random() * 51);
        const step = Math.floor(Math.random() * 11);
        const randomLength = randomNumber(5, 10);       //минимальная и максимальная длина прогрессии
        const progressionData = progressionGenerator(numFirst, step, randomLength);
        const current = String(progressionData[1]);

        console.log(`Question: ${progressionData[0]}`);
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