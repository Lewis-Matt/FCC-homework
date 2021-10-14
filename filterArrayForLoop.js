/*
Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0; i < arr.length; i++) {
    // Every element of the array must then be compared to the elem parameter passed through the filteredArray() function.
    if (arr[i].indexOf(elem) == -1) {
      // If a match is NOT found then newArr have that entire subarray added. 
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
