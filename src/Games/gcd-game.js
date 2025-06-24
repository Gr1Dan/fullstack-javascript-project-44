import { randomNum} from '../randomNum.js'
import gameCount from '../index.js'

const gameRule = 'Find the greatest common divisor of given numbers.';


const solve = (num1, num2) => {
    if (num1 === num2) {
        return num1;
    }
    for (let div = Math.min(num1, num2); div > 0; div -= 1) {
        if (num1 % div === 0 && num2 % div === 0) {
            return String(div);
        }
    }
    return undefined;
};

const gameData = () => {
    const num1 = randomNum();
    const num2 = randomNum();
    const task = `${num1} ${num2}`;
    const expectedAnswer = solve(num1, num2);
    return [task, expectedAnswer];
};

const gcdGame = () => gameCount(gameRule, gameData);

export default gcdGame;