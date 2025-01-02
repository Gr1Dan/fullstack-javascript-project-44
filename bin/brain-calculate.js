import readlineSync from "readline-sync";
import {name} from "./brain-games.js";

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
            console.log(`Your answer is wrong.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        switch (operation) {
            case 'addition':
                console.log(`What is result of ${randomNum1} + ${randomNum2}`)
                const answe1 = readlineSync.question()
                const answer1 = answe1 - 0;
                const correctAnswer1 = randomNum1 + randomNum2;
                if (answer1 === correctAnswer1) {
                    console.log('correct');
                    results++;
                    break;

                } else {
                    results = -1
                    break;
                }
            case 'subtraction':
                console.log(`What is result of ${randomNum1} - ${randomNum2}`)
                const answe2 = readlineSync.question()
                const answer2 = answe2 - 0;
                const correctAnswer2 = randomNum1 - randomNum2;
                if (answer2 === correctAnswer2) {
                    console.log('correct');
                    results++;
                    break;
                } else {
                    results = -1
                    break;

                }

            case 'multiplication':
                console.log(`What is result of ${randomNum1} * ${randomNum2}`)
                const answe3 = readlineSync.question()
                const answer3 = answe3 - 0;
                const correctAnswer3 = randomNum1 * randomNum2;
                if (answer3 === correctAnswer3) {
                    console.log('correct');
                    results++;
                    break;
                } else {
                    results = -1
                    break;

                }

        }
    }
if (results === 3) {
    console.log(`Congratulations, ${name}!`);
}