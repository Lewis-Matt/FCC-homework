// Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.
// We've defined a function, checkInventory, which receives a scanned item as an argument. 
// Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// If we wanted to remove the apples key, we can remove it by using the delete keyword like this:
delete foods.apples;
// CHeck if an object has a property
foods.hasOwnProperty('apples'); //or using
'apples' in foods;
