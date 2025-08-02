import { randomNum } from '../randomNum.js'
import gameCount from '../index.js'

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameData = () => {
  const task = randomNum(100)
  let expectedAnswer = null
  const isEven = task % 2 === 0
  switch (isEven) {
    case true:
      expectedAnswer = 'yes'
      return [task, expectedAnswer]
    case false:
      expectedAnswer = 'no'
      return [task, expectedAnswer]
  }
}

const evenGame = () => gameCount(gameRule, gameData)

export default evenGame
