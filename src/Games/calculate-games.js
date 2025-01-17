import readlineSync from "readline-sync";
import {name} from "../../bin/brain-games.js";

function calculateGame(){
console.log('What is the result of expression?');

const min = 0;
const max = 9;
let results = 0;
const operations = ['addition', 'subtraction', 'multiplication'];
const shuffledOperations = operations.sort(() => Math.random() - 0.5);
for (const operation of shuffledOperations) {
    const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    if (results === -1){
        break;
    }
    switch (operation) {
        case 'addition':
            console.log(`What is result of ${randomNum1} + ${randomNum2}`);
            const answer1 = readlineSync.question() - 0;
            const correctAnswer1 = randomNum1 + randomNum2;
            if (answer1 === correctAnswer1) {
                console.log('correct');
                results++;
                break;

            } else {
                results = -1
                console.log(`'${answer1}' is wrong ;(. Correct answers was: '${correctAnswer1}'`);
                console.log(`Let's try again, ${name}!`);
                break;
            }
        case 'subtraction':
            console.log(`What is result of ${randomNum1} - ${randomNum2}`);
            const answer2 = readlineSync.question() - 0;
            const correctAnswer2 = randomNum1 - randomNum2;
            if (answer2 === correctAnswer2) {
                console.log('correct');
                results++;
                break;
            } else {
                results = -1
                console.log(`'${answer2}' is wrong ;(. Correct answers was: '${correctAnswer2}'`);
                console.log(`Let's try again, ${name}!`);
                break;
            }
        case 'multiplication':
            console.log(`What is result of ${randomNum1} * ${randomNum2}`);
            const answer3 = readlineSync.question() - 0;
            const correctAnswer3 = randomNum1 * randomNum2;
            if (answer3 === correctAnswer3) {
                console.log('correct');
                results++;
                break;
            } else {
                results = -1
                console.log(`'${answer3}' is wrong ;(. Correct answers was: '${correctAnswer3}'`);
                console.log(`Let's try again, ${name}!`);
                break;
            }
    }
}
if (results === 3) {
    console.log(`Congratulations, ${name}!`);
}}
export {
    calculateGame
}