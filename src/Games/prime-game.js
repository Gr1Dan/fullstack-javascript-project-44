import { randomNum } from '../randomNum.js'
import gameCount from '../index.js'

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num === 1)
  {return 'yes'}
  for (let del = num - 1; del > 1; del -= 1) {
    if (num % del === 0)
    {return 'no' }
    }
    return 'yes'
}

const gameData = () => {
  const num = randomNum()
  const task = num
  const expectedAnswer = isPrime(num)
  return [task, expectedAnswer]
}

const primeGame = () => gameCount(gameRule, gameData)

export default primeGame
