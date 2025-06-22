import { randomNum} from "../randomNum.js";
import gameCount from "../index.js";

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';


const isEven = (num) => num % 2 === 0;


const gameData = () => {
    const task = randomNum();
    const expectedAnswer = isEven(task) ? 'yes' : 'no';
    return [task, expectedAnswer];
};


const evenGame = () => gameCount(gameRule, gameData);

export default evenGame;