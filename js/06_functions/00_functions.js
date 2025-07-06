// sample code to demonstrate functions

let temperatures; // global variable to hold temperature data
// This variable will be used to calculate the mean temperature
let meanTemp; //    global variable to hold the mean temperature result

/**
 *  A function is a reusable block of code that performs a specific task.
 *  Functions can take inputs (parameters) and return outputs (results).
 * *  This function calculates the mean temperature from a global array of temperatures.
 * @returns
 *
 */
// function statement : declaration
// automatically hoisted to the top of the scope
// function declaration
function getMeanTemp(temperatures = []) {
  // local variable to hold the sum of temperatures
  // and the result of the mean temperature calculation
  let sum = 0;
  let result;

  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }

  result = sum / temperatures.length;

  return result; // instead of storing the result in a global variable, we return it
  // this allows us to use the function in different contexts with different temperature data
}

let day1Temperatures = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];

meanTemp = getMeanTemp(day1Temperatures); // function invocation & aassignment of the result to the global variable

console.log(`mean: ${meanTemp}`);

let day2Temperatures = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];

console.log(`mean: ${getMeanTemp(day2Temperatures)}`);
// we can call the function with different temperature data without affecting the global variable