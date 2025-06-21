import readlineSync from 'readline-sync';

export default function welcome() {
    console.log('node bin/brain-games.js\n');
    console.log('brain-games\n');
    console.log("Welcome to the Brain Games!\n");
    const name = readlineSync.question('May I have your name?: ');
    console.log(name);
}