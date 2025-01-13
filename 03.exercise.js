const filterEvenNumber = (arr) => {
  const filtered = arr.filter((num) => num % 2 === 0)

  return filtered
}

console.log(filterEvenNumber([1, 2, 3, 4]))
