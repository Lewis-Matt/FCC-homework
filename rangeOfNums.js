function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } 
  else {
    // Must save the return of the recursive call to a variable otherwise there is no array to push to
    // This is where functions keep getting added to the stack, as they cannot be resolved as we are calling our initial function (line 1)
    // and starting from there again (i.e. we cannot reach line 10 until we get to (1,1)
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};
/*
The Call Stack
When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

Using (1,5), we have added an unresolved (as numbers is undefined) rangeOfNumbers(1,5) function call to our stack (the else section). Then we move on to create the execution for rangeOfNumbers(1,4), 
and so on and so forth, adding each one of these calls to our stack until we will finally resolve a function call (the first if). Then the interpreter will take that 
function off the stack and move on to the next one.

call stack order:
1. the function is called
2. add rangeOfNumbers(1,5) to call stack
  - rangeOfNumbers(1,5)
3. Execute code inside rangeOfNumbers
4. Get to the next function call rangeOfNumbers(1,5-1)
5. Add rangeOfNumbers(1,4) to the top of the call stack
  - rangeOfNumbers(1,4)
  - rangeOfNumbers(1,5)
6. Execute rangeOfNumbers(1,4) which cannot be resolved so it stays in the stack
7. etc until our Stack:
rangeOfNumbers(1,1)
rangeOfNumbers(1,2) 
rangeOfNumbers(1,3) 
rangeOfNumbers(1,4) 
rangeOfNumbers(1,5)
8. When we get to (1,1) it returns a value from line 3 to where it was INVOKED in line 9! So numbers = [1], then we push the endNum from when it was originally 
invoked ,which was 2, onto our numbers array; which will now be [1,2].
9. Now we pop of rangeOfNumbers(1,1) from our stack, and move to the next function in the stack.

*rangeOfNumbers(1,1) will be the last one (thus at the top) in our stack because this call will RETURN a value allowing us to move on to our next function in the stack.

Summary:
rangeOfNumbers(1,1) → returns [1]
rangeOfNumbers(1,2) → returns [1,2]
rangeOfNumbers(1,3) → returns [1,2,3]
rangeOfNumbers(1,4) → returns [1,2,3,4]
rangeOfNumbers(1,5) → returns [1,2,3,4,5]
*/
