const removeDuplicates = (arr) => {
  let results = new Set(arr)

  return [...results]
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
