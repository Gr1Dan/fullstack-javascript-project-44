#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('What is your name?');
console.log(`Hello, ${name}`);
export{
    name,
}