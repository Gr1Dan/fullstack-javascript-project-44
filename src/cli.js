import redlineSync from 'readline-sync'

const greeting = () => {
    console.log("Welcome to the Brain Games Player!!");
    const playerName = redlineSync.question("May I have your name? " );
    console.log(`Hello, ${playerName}!`);
    return playerName;
}