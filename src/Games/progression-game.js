import gameCount from '../index.js'
import {randomNum, randomNumOf10, randomNumAndItemOfArr} from "../randomNum.js"

const gameRule = 'What number is missing in the progression?'

const getArray = () => {
  const arr = []
  const firstItem = randomNum()
  const step = randomNumOf10()
  for (let i = firstItem; arr.length < 10; i += step) {
    arr.push(i)
  }
  return arr
}

const gameData = () => {
    const arr = getArray()
    const takeOneElement = randomNumAndItemOfArr(arr)
    const expectedAnswer = String(takeOneElement[1])
    arr[takeOneElement[0]] = '..'
    const task = `${arr.join(' ')}`
    return [task, expectedAnswer]
}

const progression = () => gameCount(gameRule, gameData)

export default progression
