import {randomItemOfArr, randomNum} from '../randomNum.js'
import gameCount from '../index.js'
const gameRule = 'What is the result of the expression?'

const ops = ['+', '-', '*']

const solve = (num1, num2, op) => {
  let result
  if (op === '+') { result = num1 + num2 }
  if (op === '-') { result = num1 - num2 }
  if (op === '*') { result = num1 * num2 }
  return String(result)
}

const gameData = () => {
  const num1 = randomNum()
  const num2 = randomNum()
  const op = randomItemOfArr(ops);
  const task = `${num1} ${op} ${num2}`
  const expectedAnswer = solve(num1, num2, op)
  return [task, expectedAnswer]
}

const calculateGame = () => gameCount(gameRule, gameData)

export default calculateGame
