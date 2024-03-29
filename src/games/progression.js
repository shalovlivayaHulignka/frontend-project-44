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
    const maxRandomNumber = 21; // т.е. максмальное число 20
    const maxSteps = 3;
    const minRandomLength = 5;
    const maxRandomLength = 10;

    console.log('What number is missing in the progression?');
    let isCurrent = false;

    for(let i = 0; i < maxSteps; i++) {
        const numFirst = Math.floor(Math.random() * maxRandomNumber);
        const step = Math.floor(Math.random() * maxRandomNumber);
        const randomLength = randomNumber(minRandomLength, maxRandomLength);       //минимальная и максимальная длина прогрессии
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