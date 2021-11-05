import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const brainCalc = () => {
	let number1 = getRandomInRange(1,100);
	let number2 = getRandomInRange(1,100);
	console.log(`Question: ${number1} + ${number2}`);
	const userAnswer = readlineSync.question('Your answer: ');
	const correctAnswer = number1 + number2;
	if (parseInt(userAnswer) === correctAnswer) {
		console.log('Correct!');}
	else {
		console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
		return;
	}
	console.log(`Question: ${number1} - ${number2}`);
	const userAnswer2 = readlineSync.question('Your answer: ');
	const correctAnswer2 = number1 - number2;
	if (parseInt(userAnswer2) === correctAnswer2) {
		console.log('Correct!');}
	else {
		console.log(`${userAnswer2} is wrong answer ;(. Correct answer was ${correctAnswer2}. Let's try again, ${name}!`);
		return;
	}
	console.log(`Question: ${number1} * ${number2}`);
	const userAnswer3 = readlineSync.question('Your answer: ');
	const correctAnswer3 = number1 * number2;
	if (parseInt(userAnswer3) === correctAnswer3) {
		console.log('Correct!');}
	else {
		console.log(`${userAnswer3} is wrong answer ;(. Correct answer was ${correctAnswer3}. Let's try again, ${name}!`);
		return;
	}
	console.log(`Congratulations, ${name}!`);
};

export default brainCalc;