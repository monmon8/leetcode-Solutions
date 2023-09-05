/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
  const closingBracketFor = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const openingBrackets = [];

  for (const bracket of s) {
    if (bracket in closingBracketFor) {
      openingBrackets.push(bracket);
    } 

    else if (closingBracketFor[openingBrackets.pop()] !== bracket) {
      return false;
    }
  }


  return openingBrackets.length === 0;
};
    