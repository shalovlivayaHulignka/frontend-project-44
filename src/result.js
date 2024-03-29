export default (request, current, name) => {
    if(request === current) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${request}' is wrong answer ;(. Correct answer was '${current}'.`);
        console.log(`Let's try again, ${name}`);
        return false;
    }
}