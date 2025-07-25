/**
 * An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
 *
 * IIFEs are often used to create a new scope, avoiding polluting the global namespace.
 *
 * Use Cases:
 * 1. Encapsulating code to avoid global scope pollution.
 *  2. Creating private variables and functions.
 * 3. Running initialization code that should not be accessible outside the function.
 * 4. Avoiding variable hoisting issues.
 * 5. Creating a module-like structure.
 * 6. Executing code immediately without needing to call the function later.
 * 7. Useful in asynchronous programming to maintain context.
 *
 */
(function () {
  console.log("I am an IIFE");
})();

// Example of an IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice"); // Hello, Alice!
