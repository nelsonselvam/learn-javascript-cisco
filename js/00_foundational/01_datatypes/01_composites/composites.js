// OBJECTS  - composite  data  type
// Objects are composite data types that can hold multiple values and more complex entities.
let contact = {
  name: "John Smith",
  age: 30,
  city: "New York",
  isStudent: false,
  address: {
    street: "123 Main St",
    zipCode: "10001",
  },
  courses: ["Math", "Physics", "History"],
  scores: {
    math: 95,
    physics: 88,
    history: 78,
  },
};
console.log(contact.name); // -> John Smith
console.log(contact.age); // -> 30

/// console.log(contact.address.street); // -> 123 Main St
console.log(contact.courses[0]); // -> Math

// ARRAYS - composite data type
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // -> 1

// array methods
console.log(numbers.length); // -> 5
console.log(numbers.push(6)); // -> 6 (adds an element to the end of the array)
console.log(numbers.pop()); // -> 6 (removes the last element from the array)
console.log(numbers.unshift(0)); // -> 6 (adds an element to the beginning of   the array)
console.log(numbers.shift()); // -> 0 (removes the first element from the array)
console.log(numbers.indexOf(3)); // -> 2 (returns the index of the first occurrence of an element)
console.log(numbers.includes(4)); // -> true (checks if an element exists in the array)
console.log(numbers.slice(1, 3)); // -> [2, 3] (    extracts a section of the array)
console.log(numbers.splice(1, 2)); // -> [2, 3] (removes elements from the array and returns them)
console.log(numbers.join(", ")); // -> 1, 4, 5 (joins the elements of the array into a string)
console.log(numbers.reverse()); // -> [5, 4, 1] (reverses the order of the elements in the array)
console.log(numbers.sort()); // -> [1, 4, 5] (sorts the elements of the array in ascending order)