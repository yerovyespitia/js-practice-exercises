const arrayOfSquares = (arr) => {
  let result = []
  for (num of arr) {
    result.push(Math.pow(num, 2))
  }

  return result
}

console.log(arrayOfSquares([1, 2, 3]))
