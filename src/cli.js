import readlineSync from 'readline-sync'

export default function welcome() {
  console.log('node bin/brain-games.js')
  console.log('brain-games')
  console.log("Welcome to the Brain Games!")
  const name = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${name}`)
  console.log(name)
}
