// Only change code below this line
function countdown(n) {
  // Base case
  if (n < 1) {
    return[];
  } else {
    // Recursive call
    var countArray = countdown(n - 1);
    // Add to front of array
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
