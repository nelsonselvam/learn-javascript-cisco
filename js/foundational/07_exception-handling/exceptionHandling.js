/**
 *
 * SyntaxError:   JS Engine throws objects containing information about errors
 * SemanticError:  Runtime errors that occur when the code is syntactically correct but semantically incorrect
 * LogicalError:  Errors that occur when the code is syntactically and semantically correct, but the logic is flawed
 *
 *
 */

/**
 * Try-Catch Block:
 * The try-catch block is used to handle exceptions in JavaScript.
 * The code inside the try block is executed, and if an error occurs, the catch block is executed.
 * The catch block can access the error object, which contains information about the error.
 * The finally block is optional and is executed after the try-catch block, regardless of whether an error occurred or not.
 * The try-catch block can be nested, and multiple catch blocks can be used to handle different types of errors.
 * The try-catch block can be used to handle errors in asynchronous code, but it is not recommended to use it for handling errors in promises.
 * The try-catch block can be used to handle errors in synchronous code, but it is not recommended to use it for handling errors in asynchronous code.
 *
 *
 */
try {
  console.log("abc"); // -> abc
  conole.log("abc"); // -> Uncaught ReferenceError: conole is not defined
} catch (error) {
  console.log(error.message); // -> conole is not defined
}

try {
    let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
    console.log(testArray2.length);
}
catch (error) {
    console.log(error.message); // -> Invalid array length
}
