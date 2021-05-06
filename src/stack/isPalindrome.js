/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../linked-list/stack");

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
  // Initialize a new stack
  if(!cleanText) return false;
  const stack = new Stack();
  // cut the text in half, if it is odd, don't look at the middle character
  // add the first half of the string tto the stack
  // pop a character off the stack and compare that with the
  //    second half of the string
  // return false if a any characters don't match
  // return true if you make it through the stack and no characters
  // cheack for just spaces
  if (!text.trim()) return false;
  let middle = Math.floor(cleanText.length / 2);

  for (let index = 0; index < middle; index++) {
    stack.push(cleanText[index]);
  }

  middle += cleanText.length % 2 === 0 ? 0 : 1;

  for (let index = middle, limit = cleanText.length; index < limit; index++) {
    if (cleanText[index] !== stack.pop()) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
