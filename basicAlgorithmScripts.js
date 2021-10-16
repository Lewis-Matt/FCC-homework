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
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  // Need an empty array to store the answers in
  let solution = [];
  // Outer loop iterates through each subarray
  for (var i = 0; i < arr.length; i++) {
    // Initiate variable to store the largest number in each subarray
    // This must be outside the inner loop so it won’t be reassigned until we find a larger number.
    var largest = arr[i][0];
    // Debugging
    console.log(arr[i]);
    // Inner loop iterates through each index of each subarray
    for (var j = 0; j <arr[i].length; j++) {
      // Is the current number, in the subarray, larger than the last largest number in the same subarray?
      if (arr[i][j] > largest) {
        // Update the largest number
      largest = arr[i][j];
      // Debugging
      console.log("Largest # " + largest);
      }
    }
    // Store each subarray's largest number inside a new array
    solution[i] = largest;
  }
  return solution;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/***************************************************************************************************************************
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
  // Slice() copies a given number of elements to a new array
  // If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
  // We are slice off the target length (in this ex, 1) from the end of the str, and then checking if it matches the target
  return str.slice(-target.length) === target;
}
confirmEnding("Bastian", "n");

// I attempted this with regex using myRegex = /target$/i; and then checking using str.indexOf(myRegex); but this did not work. 
// This is because indexOf returns the index. To make it work with regex, I need to test() that the str meets myRegex:
function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}
/***************************************************************************************************************************
