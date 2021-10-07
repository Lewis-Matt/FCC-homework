var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
    // here i = 2
  } 
  // i is incremented one more time, doesnt' meet the i<3 condition, however i now equals 3, and we exit the function block
}
console.log(printNumTwo());
// 3 is printed, this is because the value assigned to i was updated and the printNumTwo() 
// returns the global i and not the value i had when the function was created in the for loop. 

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
/*
Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. 
printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created 
by the let keyword within the loop statement. */
