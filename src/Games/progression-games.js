import readlineSync from "readline-sync";
import {name} from "../../bin/brain-games.js";

function progressionGame() {

const min = 0;
const minProgression = 5
const max = 10;

console.log("What number is missing in the progression?");

for (let i = 0; i <3; i++){
    const start = Math.floor(Math.random() * (max - min + 1)) + min;
    const count = Math.floor(Math.random() * (max - minProgression + 1)) + minProgression;
    const step = Math.floor(Math.random() * (max - min + 1)) + min;
    const numberForPayer = Math.floor(Math.random() * (minProgression - min + 1)) + min;
    const progression = [];
    const arithmeticProgression = () => {
        for (let i = 0; i < count; i++) {
            progression.push(start + i * step);
        }
        return progression;
    }

    arithmeticProgression()
    const correctAnswer = progression[numberForPayer];
    progression[numberForPayer]= '...'
    const answer = readlineSync.question(`Question: ${progression}:`) - 0;
    console.log("Your answer: ", answer);

    if (answer === correctAnswer) {
        console.log("Correct answer!");
        if (i === 2) {
            console.log(`Congratulations!`);
        }
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
    }}}

export {
    progressionGame
}