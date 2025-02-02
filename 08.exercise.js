// 8. Frequency

// - Write a function that takes a two strings, the first one a phrase and the second one a letter, and returns how many times the letter appears
// - Example: frequency("this phrase is even more larger", "e") -> 5

const frequency = (first, second) => {
  let count = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    count[letter] ? (count[letter] += 1) : (count[letter] = 1)
  }

  return `The letter ${second} is ${count[second]} times`
}

console.log(frequency('this phrase is even more larger', 'e')) // 5
console.log(frequency('this phrase is even more larger', 'l')) // 1
console.log(frequency('this phrase is even more larger', 'a')) // 2
console.log(frequency('this phrase is even more larger', 'h')) // 2
