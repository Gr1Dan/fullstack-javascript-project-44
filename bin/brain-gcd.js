import readlineSync from "readline-sync";
import {name} from "./brain-games.js";

const min = 0;
const max = 99;
console.log("Find the greatest common divisor of given numbers.");
for (let j = 0; j < 3; j++) {
let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum1, randomNum2);
const correctAnswer = () => {
    while (randomNum2 !== 0) {
        const temp = randomNum2;
        randomNum2 = randomNum1 % randomNum2;
        randomNum1 = temp;
    }
    return randomNum1;
}
const asnwer = readlineSync.question(`What is greatest divisor of ${randomNum1} and ${randomNum2}:`) - 0;
if (asnwer === correctAnswer()){
    console.log("Correct");
    if (j === 2){
        console.log("Congratulations!");

    }
} else {
    console.log(`"${asnwer}" is wrong answer ;(. Correct answer: ${correctAnswer()})`);
    console.log(`Let's try again ${name}!`);
    break;
}}