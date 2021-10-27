/*
Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the 
array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
*/

/*** Original Code ***
function add (bookName) {
  bookList.push(bookName);
  return bookList;
}

function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    bookList.splice(book_index, 1);
    return bookList;
    }
} */


/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array. splice(start, deleteCount)
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
