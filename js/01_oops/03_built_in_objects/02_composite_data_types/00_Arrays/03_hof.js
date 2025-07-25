
/***
 *
 * Both functions return either true or false - Similiar to Predicates Functional Interfaces in Java
 *
 * every - assesses if all elements pass a given criteria
 *
 * some - assesses if any element pass a given criteria
 *
 *
 */

let sampleNumbers = [34, 56, 20, 10, -7, 9, 400, 1, 1000];

let isAllGreaterThan100 = sampleNumbers.every((i) => i > 100);

let isAnyGreaterThan100 = sampleNumbers.some((i) => i > 100);

console.log(isAllGreaterThan100);
console.log(isAnyGreaterThan100);

/**
 * Filtering
 *
 */
// Define an array with mixed data types.
let arrayToBeFiltered = [
  "100",
  100,
  true,
  { key: "value" },
  786,
  ["car", "bike", "bicycle"], // An array element
];

// Use the filter method to create a new array containing only elements whose type is 'number'.
// The callback function checks if the typeof 'i' (current element) is strictly equal to 'number'.
let filteredArray = arrayToBeFiltered.filter((i) => typeof i === "number");

// Log the new filtered array.
console.log(filteredArray);

/**
 *
 * Mapping
 *
 */
// First, filter the array to get only numbers.
// Then, map the filtered numbers to their squares.
let squaredNumberArray = arrayToBeFiltered
  .filter((i) => typeof i === "number")
  .map((i) => i * i);

// Log the array of squared numbers.
console.log(squaredNumberArray);

/**
 *
 * Sorting
 *
 */

let sortedArray = arrayToBeFiltered.sort((first, second) => first - second);
console.log(sortedArray);

/***
 *
 * Reducing
 *
 */

// Define an array of numbers.
let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
// Use reduce to calculate the sum of all numbers in the array.
// The accumulator starts at the first element, and 'item' is the current element.
let sum = numbers.reduce((accumulator, item) => accumulator + item);
// Log the sum.
console.log(sum); // -> 380

// Use reduce to calculate the sum, starting with an initial accumulator value of 1000.
let anotherSum = numbers.reduce(
  (accumulator, item) => accumulator + item,
  1000
);
// Log the sum with the initial value.
console.log(anotherSum); // -> 1380