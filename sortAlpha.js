/* Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.
*/


function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function compareFunction(a, b) {
      if (a === b) {
        return 0;
      } else 
        if (a < b) {
          return -1;
      } else {
        return 1;
      }
      //    Could have replaced the above if's with return a === b ? 0 : a < b ? -1 : 1;
  });
  // Only change code above this line
}

/* 
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. 
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate the globalArray variable. */

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = arr.slice();
  return newArr.sort(function (a,b) {
    return a - b;
  });
  // Only change code above this line
}

nonMutatingSort(globalArray);
