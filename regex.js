// Regular expressions are like special patterns. Imagine you have a special pair of glasses that can help you find specific things in a big pile of toys.
// 1. Test Function:
//     a. The test function in JavaScript allows us to check if a given piece of text matches a specific pattern. It’s like asking, “Does this toy match the picture on my special card?”
// 2. Match Function:
//     a. The match function in JavaScript allows us to find specific pieces of text that match a pattern. It’s like using our special glasses to find all the toys that look a certain way.
// 3. Replace Function:
//     a. The replace function in JavaScript allows us to change parts of a text that match a pattern. It’s like having a magic wand that can turn one toy into another.

// 3 - Regular Expressions
// Test if the password(string) input is a strong password or not
// Test if given string is in valid date format
// Test if given string is a valid URL

// Extract all the numbers from a string
// Extract all the words starting with the letter "S"
// Extract all the hashtags from a string
// Extract all the words starting with the given letter (take as parameter)

// 1
function strengthPass(pass) {
  const minChar = /.{8,}/
  const minDigits = /\d/
  const minAlph = / [a-z]/
  const minCalp = /[A-Z]/
  const minSpecial = /[^A-Za-z0-9]/

  let isStrong =
    minChar.test(pass) &&
    minDigits.test(pass) &&
    minAlph.test(pass) &&
    minCalp.test(pass) &&
    minSpecial.test(pass)
  return isStrong
}
let passw = 'abc123A!'
console.log(strengthPass(passw))

// // 2
function checkDate(d) {
  const format = /^\d{4}-(0[0-9]|1[0,2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/

  return format.test(d)
}
console.log(checkDate('2023-09-12'))

// 3

// 4
function extractNumbers(s) {
  extNum = /\d+/g
  let match = s.match(extNum)
  return match
}
console.log(extractNumbers('I am a ben 10'))

// 5
function extractWordsStartingWithS(str) {
  const regex = /\bS\w*/gi
  return str.match(regex)
}

// Test the function with a string
const text = 'She sells seashells by the seashore. The sun is shining.'
const wordsStartingWithS = extractWordsStartingWithS(text)
console.log(wordsStartingWithS)
