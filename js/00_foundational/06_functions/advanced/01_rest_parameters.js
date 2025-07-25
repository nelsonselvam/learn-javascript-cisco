/*
 * @fileoverview Example of using rest parameters in JavaScript functions.
 *  NOTE:
 * Rest parameters allow a function to accept an indefinite number of arguments as an array.
 * This is useful when you want to handle multiple arguments without explicitly defining them.
 * There can be zero or more arguments passed to the function.
 * There can only be one rest parameter in a function, and it must be the last parameter.
 * The reason for this is that the rest parameter collects all remaining arguments (literally rest of the params) into an array.
 */

function printNumbers(...numbers) { // rest parameter collects all arguments into an array
  if (numbers.length === 0) {
    console.log("No numbers provided.");
    return;
  }
  console.log("Numbers:", numbers.join(", "));
}

printNumbers(1, 2, 3); // Numbers: 1, 2, 3
printNumbers(4, 5); // Numbers: 4, 5
