function matchFinder(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        return true;
      }
    }
  }
  return false;
}
const string1 = "abcdef";
const string2 = "xyzdef";

const hasMatch = matchFinder(string1, string2);
console.log(hasMatch);