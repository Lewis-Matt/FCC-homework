/**************************
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
