import readlineSync from "readline-sync";
import {name} from "./brain-games.js";
console.log('Answer "yes" if number is even, otherwise answer "no"');

const min = 0;
const max = 99;
for (let i = 0; i <= 2; i++) {
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let correctAnswers = (randomNum) => {
    if (randomNum <= 1) return false;
if (randomNum === 2) return "yes";
if (randomNum % 2 === 0) return "no";
for (let i = 3; i <= Math.sqrt(randomNum); i += 2) {
    if (randomNum % i === 0) return "no";
}
return 'yes';
};
const answers = readlineSync.question(`is ${randomNum} is even?:`)
if (answers === correctAnswers(randomNum)){
    console.log('correct');
    if (i === 2){
        console.log(`Congratulations, ${name}!`);
    }
} else  {
    console.log(`${answers} is wrong answer; Correct answers was: ${correctAnswers(randomNum)}`);
    console.log(`Let's try again, ${name}!`);
    break;
}}