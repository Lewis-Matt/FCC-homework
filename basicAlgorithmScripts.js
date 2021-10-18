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
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method. */
// Recursively
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
      return str + repeatStringNumTimes(str, num-1);
    }
}

repeatStringNumTimes("abc", 3);

// Non recursive
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
/***************************************************************************************************************************
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  // No need to trunctuate if our string length is less than num
  if (str.length <= num) {
    return str;
  } else {
    // Starting from the first index of str, slice off 'num' amount of indecies into a new array, and add "..." to the end
    return str.slice(0, num) + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
/***************************************************************************************************************************
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, 
the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */
function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    // set the num (that will be used in the funciton) equal to our arr elements and loop through all the elements, testing with the func
    num = arr[i];
    // if the function (func) passed in is true, return the num
    if (func(num)) {
      return num;
    } 
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
function findElement(arr, func) {
  return arr.find(func);
}

/***************************************************************************************************************************
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false. */
function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  }
  return false;
}
booWho(null);

/***************************************************************************************************************************
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of. */

function titleCase(str) {
  // Split the str into an array of words at each space, and convert to lowercase
  let words = str.toLowerCase().split(" ");
  // Debug
  console.log(words);
  // Loop through each word in the array
  for (var i = 0; i < words.length; i++) {
    // Each word (i) in the array is having the first char (index 0) capitalized. The + words[i].slice(1) is adding the chars (from index 1 until the end of the word) back onto the, now capitailzed, first letter.
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  // Converting the words array back into a string with spaces.
  return words.join(" ");
}

titleCase("I'm a little tea pot");

// With regex 
// Find all non-whitespace characters (\S)
// At the beginning of string (^)
// Or after any whitespace character (\s)
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
/***************************************************************************************************************************
Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.

-- slice(start,end); method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) .
- A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

-- splice(start, deleteCount, item1, item2, itemN); method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
- If deleteCount is 0 or negative, no elements are removed.
*/

function frankenSplice(arr1, arr2, n) {
  // slice() because don't want to alter the original array, so we make a copy
  let arr2Copy = arr2.slice();
  for (let i = 0; i< arr1.length; i++) {
    // Iterate through each index of arr1, and copy it into the nth index of array 2
    arr2Copy.splice(n,0,arr1[i]); 
    // Debugging
    console.log(arr2Copy);
    // Increment the index to inserth the next ith element of arr1. Otherwise it would just keep overwriting nth element of arr2.
    n++;
  }
  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
