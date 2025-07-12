import { randomNum } from '../randomNum.js'
import gameCount from '../index.js'

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameData = () => {
  const task = randomNum()
  let expectedAnswer = null
  if (task % 2 === 0) {
    expectedAnswer = 'yes'
  } else {
    expectedAnswer = 'no'
  }
  return [task, expectedAnswer]
}

const evenGame = () => gameCount(gameRule, gameData)

export default evenGame
