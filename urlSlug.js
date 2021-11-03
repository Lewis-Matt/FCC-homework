/*
Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, 
if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). 
You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in 
this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces
*/

// Only change code below this line
function urlSlug(title) {
  const separated = title
  .toLowerCase()
  .trim()
  // Need a pattern that removes repeated (+) spaces (\s)
  .split(/\s+/);
  
  // Testing
  console.log(separated);
  
  const newStr = separated.join("-");
  
  // Testing
  console.log(newStr);
  
  return newStr;
}
// Only change code above this line

// Could be refractored:
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// Or using filter()
function urlSlug(title) {
  return title
    .split(" ")
    // Now we have an array, and we are filtering out any element that is an empty string ("")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
