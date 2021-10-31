import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no",');

const getRandomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const isEven = (n) => {
// 	if (n % 2 == 0) {
// 		return true;
// 	} 
// 	return false;
// };

// const interaction = (answer) => {
//     for (let i = 0; i <= 3; i += 1) {
//     let number = getRandomInRange(1,100)
//     if (isEven(number) = false && answer = 'yes') {
//     console.log('"yes" is wrong answer ;(. Correct answer was "no". Let's try again, Bill!')
//     };
//     else if (isEven(number) = true && answer = 'no') {
//         console.log('"no" is wrong answer ;(. Correct answer was "yes". Let's try again, Bill!')
//         };

//     return congratsInGame;

//     };


// } 


const interaction = () => {
	
	for (let i = 0; i <= 3; i += 1) {
		let number = getRandomInRange(1,100);
		console.log(`Question:${number}`);
		const answer = readlineSync.question('Your answer: ');

		if (number % 2 === 0) {
			if (answer === 'yes') {
				console.log('Correct!');
			} else {
				console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
				return;
			}
		} else if (number % 2 !== 0) {
			if (answer === 'no') {
				console.log('Correct!');
			} else {
				console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
				return;
			}
		} else {
			console.log(`"Wrong answer ;(.\nLet's try again, ${name}`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
};


export default interaction;