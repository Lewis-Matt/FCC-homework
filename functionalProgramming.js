// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

/* 
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed 
to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are 
called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda. */

/************************************************************************************************************************************************
Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple 
object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. 
After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed 
from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window 
object that stores the name of the open pages.

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored 
in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 
'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.

*/

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line
  // You can already see why splice() can be very hazardous, as it always modifies the array it is executed upon and returns 
  // that modified array - it is not deterministic and splice() should be avoided when possible.
  
  /* var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
     var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab */

  // Replaced the above with this:
  // using slice(). This does not create side effects and should be preferred over splice().
  
 var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
 var tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


/* explanation of why splice() sucks:
For an index, we will take 2 - as done in the challenge.

    At the beginning, our array videoWindow looks like this:
    ['Netflix', 'YouTube', 'Vimeo', 'Vine'].
    After first line is executed, variable tabsBeforeIndex will take 2 (index) values starting from 0 (splice(0,2)) and create a new array containing them.
    Arrays now look like this:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']

You can already see why splice() can be very hazardous, as it always modifies the array it is executed upon and returns that modified array - it is not deterministic.

    After second line is executed, tabsAfterIndex should take values starting from index (in this case 2) and remove them from videoWindow array. As we can see 
    that in the current state (['Vimeo', 'Vine']), videoWindow does not have index 2 so empty array is returned. Final state:
    
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']
    tabsAfterIndex: []

After the third line and concatenation the returned array is the same as tabsBeforeIndex, which results in both 'Vimeo' and 'Vine' values not being in the array.
*/
