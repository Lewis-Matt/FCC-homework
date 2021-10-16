/***************************************************************************************************************************
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

// The join() method creates and returns a new string by concatenating all of the elements in an array
// syntax: join(separator)
function reverseString(str) {
  let backwards = [...str];
  return backwards.reverse().join("");
}
reverseString("hello");

/***************************************************************************************************************************
Return the factorial of the provided integer.
*/
function factorialize(num) {
  for (var product = 1; num > 0; num--){
    product *= num;
  }
  return product;
}

factorialize(5);
// Using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
/* 
---Call Stack---
factorialize(5)
  5factorialize(4)
    4factorialize(3)
      3factorialize(2)
        2factorialize(1)
          1 --- Base Case
*/
/***************************************************************************************************************************
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  
The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. */

function findLongestWordLength(str) {
  // Splits str into an array of substrings, using a ' ' (blank space) as the breaking/splitting point
  let splitWords = str.split(' ');
  // For debugging
  console.log(splitWords);
  let longestWord = 0;
  for (var i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length > longestWord) {
      longestWord = splitWords[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
/***************************************************************************************************************************
