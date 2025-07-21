/**
 * Traditional for loop - used for iterating a specific number of times
 * It is often used when the number of iterations is known beforehand.
 *
 *
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
console.log(sum); // -> 190

/**
 * for of - dedicated for iterating over iterable objects like arrays, strings, etc.
 *
 *
 *
 */
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number); // -> 1, 2, 3, 4, 5
}

let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 },
];

for (let city of cities) {
  if (city.population > 20e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

/**
 * for in - used to iterate over the properties of an object
 *
 */
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // -> name: Alice, age: 30, city: New York
}

/**
 * forEach - a method available on arrays to iterate over each element
 *
 */
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`); // -> 0: apple, 1: banana, 2: cherry
});
                            



