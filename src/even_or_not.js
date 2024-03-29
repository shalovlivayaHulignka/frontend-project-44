import readlineSync from 'readline-sync';

export default (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let isCurrent = false;

    for(let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 101);
        console.log(`Question: ${num}`);
        const isEven = num % 2 === 0;
        const current = isEven ? 'yes' : 'no';
        const request = readlineSync.question('Your answer: ');
        if(request === current) {
            console.log('Correct!');
            isCurrent = true;
        } else {
            console.log(`${request} is wrong answer ;(. Correct answer was ${current}.`);
            console.log(`Let's try again, ${name}`);
            isCurrent = false;
            break;
        }
    }

    if (isCurrent) {
        console.log(`Congratulations, ${name}!`);
    }
}