function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "Both inputs must be strings.";
  }

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        return true;
      }
    }
  }
  return false;
}

// Example usage:
const str1 = "abcf";
const str2 = "xbzd";

const result = matchFinder(str1, str2);
console.log(result); // Will output true because "def" is common in both strings

const nonString = "yyf";
const errorMessage = matchFinder(str1, nonString);
console.log(errorMessage); // Will output "Both inputs must be strings."
