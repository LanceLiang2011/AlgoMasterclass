// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charsMap = {};
  for (let i = 0; i < str.length; i++)
  {
    var char = str[i];
    if (charsMap.hasOwnProperty(char))
    {
      charsMap[char] += 1;
    } else
    {
      charsMap[char] = 1;
    }
  }

  var maxChar = "";
  var maxValue = 0;
  for (char in charsMap)
  {
    if (charsMap[char] > maxValue)
    {
      maxChar = char;
      maxValue = charsMap[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
