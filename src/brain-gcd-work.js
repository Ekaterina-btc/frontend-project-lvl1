import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const gcd = (a, b) => {
	let i = a;
	while (a % i !== 0 || b % i !== 0) {
		i = i - 1;
	}
	return i;
};

const brainGcd = () => {
	for (let i = 0; i <= 2; i += 1) {
		// eslint-disable-next-line indent
        let number1 = getRandomInRange(1,100);
		let number2 = getRandomInRange(1,100);
		console.log(`Question:${number1} ${number2}`);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = gcd (number1, number2);
		if (parseInt(userAnswer) === correctAnswer) {
			console.log('Correct!');}
		else {
			console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
			return;
		} 
	}
	console.log(`Congratulations, ${name}!`);

};

export default brainGcd;