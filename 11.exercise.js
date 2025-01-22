const findMinAndMax = (arr) => {
  let max = Math.max(...arr)
  let min = Math.min(...arr)

  return { min: min, max: max }
}

console.log(findMinAndMax([6, 3, 1, 4, 1, 5, 0, 2]))
