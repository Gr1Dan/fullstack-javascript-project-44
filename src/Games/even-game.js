import readlineSync from "readline-sync";


function evenGame() {
    console.log('brain-even\n');
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?: ');

    console.log('Answer "yes" if number is even, otherwise answer "no"');

    const min = 1;
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
        console.log(`Question ${randomNum}`)
        const answer = readlineSync.question('Your answer: ')
        if (answer === correctAnswers(randomNum)){
            console.log('correct');
            if (i === 2){
                console.log(`Congratulations, ${name}!`);
            }
        } else  {
            console.log(`${answer} is wrong answer;(. Correct answers was: ${correctAnswers(randomNum)}`);
            console.log(`Let's try again, ${name}!`);
            break;
        }}}

export {
    evenGame
}