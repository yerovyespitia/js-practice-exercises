const sumElements = (arr) => {
  let result = 0

  arr.forEach((num) => (result += num))

  return result
}

console.log(sumElements([1, 2, 3, 4]))
