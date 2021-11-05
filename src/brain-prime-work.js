import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
	for (let i = 2, max = Math.sqrt(number); i <= max; i++ ) {
		if (number % i === 0) {
			return false;
		}
	}
	return number > 1;
	// return true;
};

const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const brainPrime = () => {
	for (let i = 0; i <= 2; i += 1) {
		const numberForUser = getRandomInRange(1,100);
		console.log(`Question: ${numberForUser}`);
		const userAnswer = readlineSync.question('Your answer: ');
		if (isPrime (numberForUser) === true) {
			if (userAnswer === 'yes') {
				console.log('Correct!');}
			else {
				console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
				return; } }
		else if (isPrime(numberForUser) === false) {
			if (userAnswer === 'no') {
				console.log('Correct!');}
			else {
				console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
				return; }
		}
	
	}
		
};
console.log(`Congratulations, ${name}!`);


export default brainPrime;