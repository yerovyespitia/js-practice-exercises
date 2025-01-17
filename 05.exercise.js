const joinStrings = (arr) => {
  let result = ''

  for (const str of arr) {
    result += ` ${str}`
  }

  return result
}

console.log(joinStrings(['Hello', 'world', 'guys']))
