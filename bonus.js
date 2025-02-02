// Find the most frequent character in a string
const mostFrequentChar = (str) => {
  let count = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    count[char] ? (count[char] += 1) : (count[char] = 1)
  }

  let max = count[str[0]]
  let char = ''
  for (let property in count) {
    if (max <= count[property]) {
      max = count[property]
      char = property
    }
  }

  return char
}

console.log(`Frequent char`, mostFrequentChar('obama')) // a
console.log(`Frequent char`, mostFrequentChar('clinton')) // n
console.log(`Frequent char`, mostFrequentChar('donald')) // d
console.log(`Frequent char`, mostFrequentChar('washington')) // n
console.log(`Frequent char`, mostFrequentChar('reagan')) // a
