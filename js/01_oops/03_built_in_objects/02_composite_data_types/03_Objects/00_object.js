// Define an object named 'anotherPetsObj' with initial key-value pairs.
let anotherPetsObj = { snakes: 1, cats: 3, dogs: 2 };

// Access and log the value associated with the 'snakes' key.
console.log(anotherPetsObj.snakes); // -> 1
// Modify the value associated with the 'snakes' key.
anotherPetsObj.snakes = 2;
// Access and log the updated value of 'snakes'.
console.log(anotherPetsObj.snakes); // -> 2
// Delete the 'snakes' property from the object.
delete anotherPetsObj.snakes;
// Attempt to access the deleted 'snakes' property, which will return undefined.
console.log(anotherPetsObj.snakes); // -> undefined
// Add the 'snakes' property back to the object with a new value.
anotherPetsObj.snakes = 0;
// Access and log the new value of 'snakes'.
console.log(anotherPetsObj.snakes); // 0

// Iterating through the elements in an object:
// Get an array of all keys in the object and iterate through them, logging each key.
Object.keys(anotherPetsObj).forEach((key) => console.log(key)); // -> snakes -> cats -> dogs
// Get an array of all values in the object and iterate through them, logging each value.
Object.values(anotherPetsObj).forEach((key) => console.log(key)); // -> 1 -> 3 -> 2
// Get an array of [key, value] pairs (entries) and iterate through them, logging each pair.
Object.entries(anotherPetsObj).forEach((key) => console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

// Using the 'for...in' loop to iterate over enumerable properties of an object.
// This is suitable for objects, unlike 'for...of' which is for iterables.
for (let key in anotherPetsObj) {
  // Log the current key.
  console.log(key); // -> snakes -> cats -> dogs
  // Log the value associated with the current key using bracket notation.
  console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}

// Using the spread operator (...) to create a new object.
// It copies all enumerable own properties from 'anotherPetsObj' and adds a new 'fish' property.
let newPetsObj = { ...anotherPetsObj, fish: 1 };
