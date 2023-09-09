// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str)
{
  // var reversed = str.split("").reverse().join("");
  // var reversed = "";
  // for (var i = str.length - 1; i >= 0; i--)
  // {
  //   reversed += str[i];
  // }
  // var reversed = str.split("").reduce((acc, cur) => cur + acc,"");
  // return str === reversed;
  return str.split("").every((char, index, string)=> char === string[string.length-1-index]);
}

module.exports = palindrome;
