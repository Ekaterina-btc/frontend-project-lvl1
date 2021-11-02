/* eslint-disable indent */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const makeProg = (number, progStep) => {
	// console.log(number, progStep);
	let array = [number];
	for (let i = 0; i <= 9; i+=1) {
		// console.log('prining i: ', i);
		// console.log('prining result: ', array);
		if (array.length === 10) {
			return array;
		} else {
			let nextNumber = array[i] + progStep;
			array.push(nextNumber);
		}
	}
	console.log(array);
};    

const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const brainProg = () => {
	let number1 = getRandomInRange(1,100);
	let number2 = 2;
	for (let i = 0; i <= 2; i += 1) {
		
		let arr = makeProg (number1, number2);
		let index = getRandomInRange(1,9);
		let correctAnswer = arr[index];
		arr[index] = '..';
		let arrForUser = arr.join();
		console.log(`Question: ${arrForUser}`); 
		const userAnswer = readlineSync.question('Your answer: ');
		number2 = number2 + 1; 
		if (parseInt(userAnswer) === correctAnswer) {
			console.log('Correct!');}
		else {
			console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
			return;
           
		}
		
	}
    console.log(`Congratulations, ${name}!`);
};


export default brainProg;