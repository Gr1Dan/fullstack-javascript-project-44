export const randomNum = (numbers, arr) => {
  switch (numbers) {
    case 100: {
      return Math.round(Math.random() * 101)
    }
    case 10: {
      return  Math.round(Math.random() * 11)
    }
    case 'ItemOfArr': {
      const randomIndex1 = Math.floor(Math.random() * arr.length)
      return arr[randomIndex1]
    }
    case 'NumAndItemsOfArr': {
      const randomIndex2 = Math.floor(Math.random() * arr.length)
      return [randomIndex2, arr[randomIndex2]]
    }
  }
}
