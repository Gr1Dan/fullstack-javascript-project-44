import gameCount from '../index.js'
import { randomNum } from '../randomNum.js'

const gameRule = 'What number is missing in the progression?'

const generateSequence = () => {
  const arr = []
  const firstItem = randomNum(100)
  const step = randomNum(10)
  for (let i = firstItem; arr.length < 10; i += step) {
    arr.push(i)
  }
  return arr
}

const gameData = () => {
  const arr = generateSequence()
  const takeOneElement = randomNum('NumAndItemsOfArr',arr)
  const expectedAnswer = String(takeOneElement[1])
  arr[takeOneElement[0]] = '..'
  const task = `${arr.join(' ')}`
  return [task, expectedAnswer]
}

const progression = () => gameCount(gameRule, gameData)

export default progression
