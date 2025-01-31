const isSorted = (arr) => {
  let notSorted = [...arr]
  let sorted = arr.sort()

  if (notSorted.toString() == sorted.toString()) {
    return true
  }

  return false
}
console.log(isSorted([4, 3, 2, 1]))
