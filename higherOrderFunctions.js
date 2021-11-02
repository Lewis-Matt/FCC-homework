/*
Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the 
squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real 
numbers is [-3, 4.8, 5, 3, -3.2].
Note: Your function should not use any kind of for or while loops or the forEach() function.
*/


const squareList = arr => {
  // Only change code below this line
  // Chained return statement
  return arr
    // Filter only cares if the callback return is true: Is the num > 0 and is the num an integer (the expression num % parseInt(num) will evaluate to 0 since any number divided by itself leaves no remainder). So once filter has gone through all the elements in the array it creates a new array where the returns came back true and ignores the returns that came back false (You decide what it filters after => (implying return)).
    .filter(num => num > 0 && num % parseInt(num) === 0)
    // Now we are applying map to this filtered array, using Math.pow(base, exponent) as the callback
    .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
