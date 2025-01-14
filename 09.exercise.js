const isPalindrome = (str) => {
  const result = str.split('').reverse().join('')

  return result === str
}

console.log(isPalindrome('racecar'))
