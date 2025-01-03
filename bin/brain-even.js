import readlineSync from "readline-sync";
import {name} from "./brain-games.js";
console.log('Answer "yes" if number is even, otherwise answer "no"');

const min = 0;
const max = 99;
for (let i = 0; i <= 2; i++) {
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let correctAnswers = (randomNum) => {
    if (randomNum % 2 === 0) {
        return 'yes'
    } else {
        return 'no'
    }
}
const answer = readlineSync.question(`is ${randomNum} is even?:`)
if (answer === correctAnswers(randomNum)){
    console.log('correct');
    if (i === 2){
        console.log(`Congratulations, ${name}!`);
    }
} else  {
    console.log(`${answer} is wrong answer;(. Correct answers was: ${correctAnswers(randomNum)}`);
    console.log(`Let's try again, ${name}!`);
    break;
}}