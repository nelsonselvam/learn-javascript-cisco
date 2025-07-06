# javascript-essentials
Repository to master JavaScript language from CISCO Skills for All
1. Create an account at [CISCO Skills For All](https://skillsforall.com/#)
2. Enroll in the below courses one by one
   ![image](https://github.com/user-attachments/assets/c91d41bf-0138-48c4-850d-e6fab2ebb141)
3. After completion, you will get certifications that are shareable.


````markdown
# JavaScript Essentials Refresher

This document provides a quick refresher on key JavaScript concepts with practical code examples.

---

## 1. Variables and Data Types

JavaScript has dynamic typing. You declare variables using `var`, `let`, or `const`.

### `var`, `let`, `const`

- `var`: Function-scoped, can be re-declared and re-assigned. (Older, generally less recommended)
- `let`: Block-scoped, can be re-assigned but not re-declared in the same scope.
- `const`: Block-scoped, cannot be re-assigned or re-declared. Must be initialized.

```javascript
// var (avoid if possible)
var oldSchoolVar = "Hello";
oldSchoolVar = "World"; // Can be re-assigned
var oldSchoolVar = "Again"; // Can be re-declared (bad practice)
console.log(oldSchoolVar); // Output: Again

// let
let message = "Hello";
message = "World"; // Can be re-assigned
// let message = "Again"; // ERROR: Cannot re-declare block-scoped variable
console.log(message); // Output: World

// const
const PI = 3.14159;
// PI = 3.14; // ERROR: Assignment to constant variable
// const GREETING; // ERROR: Missing initializer in const declaration
console.log(PI); // Output: 3.14159

// Data Types
let num = 10; // Number
let str = "JavaScript"; // String
let bool = true; // Boolean
let und = undefined; // Undefined
let nul = null; // Null (primitive, but typeof null is 'object')
let obj = { name: "Alice" }; // Object
let arr = [1, 2, 3]; // Array (special type of object)
let sym = Symbol('id'); // Symbol (ES6)
let big = 10n; // BigInt (ES2020)

console.log(typeof num);   // Output: number
console.log(typeof str);   // Output: string
console.log(typeof bool);  // Output: boolean
console.log(typeof und);   // Output: undefined
console.log(typeof nul);   // Output: object (a well-known JavaScript quirk)
console.log(typeof obj);   // Output: object
console.log(typeof arr);   // Output: object
console.log(typeof sym);   // Output: symbol
console.log(typeof big);   // Output: bigint
````

-----

## 2\. Operators

JavaScript supports various operators.

### Arithmetic Operators

`+`, `-`, `*`, `/`, `%`, `**` (exponentiation), `++` (increment), `--` (decrement)

```javascript
let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (10 to the power of 3)
a++; // a is now 11
b--; // b is now 2
```

### Comparison Operators

`==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`

  - `==` (loose equality): Compares values after type coercion.
  - `===` (strict equality): Compares values and types without type coercion. Recommended.

<!-- end list -->

```javascript
console.log(5 == "5");   // true (loose equality, type coercion)
console.log(5 === "5");  // false (strict equality, different types)
console.log(10 !== "10"); // true (strict inequality)
```

### Logical Operators

`&&` (AND), `||` (OR), `!` (NOT)

```javascript
let x = true;
let y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false
```

-----

## 3\. Control Flow

### `if`/`else if`/`else`

```javascript
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}
```

### `switch`

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}
```

-----

## 4\. Loops

### `for` loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}
```

### `while` loop

```javascript
let count = 0;
while (count < 3) {
  console.log("While loop iteration:", count);
  count++;
}
```

### `do...while` loop

```javascript
let j = 0;
do {
  console.log("Do-While loop iteration:", j);
  j++;
} while (j < 0); // This will run once because the condition is checked after the first iteration.
```

### `for...of` (for iterating over iterable objects like arrays, strings, Map, Set)

```javascript
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

### `for...in` (for iterating over enumerable properties of an object)

```javascript
const person = { name: "Bob", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

-----

## 5\. Functions

Functions are blocks of code designed to perform a particular task.

### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Function Expression

```javascript
const sayHi = function(name) {
  return `Hi, ${name}!`;
};
console.log(sayHi("Bob")); // Output: Hi, Bob!
```

### Arrow Functions (ES6+)

Concise syntax, `this` context is lexically bound.

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

const multiply = (a, b) => {
  // Multiline arrow function
  const result = a * b;
  return result;
};
console.log(multiply(4, 2)); // Output: 8
```

### Default Parameters (ES6+)

```javascript
function welcome(name = "Guest") {
  return `Welcome, ${name}!`;
}
console.log(welcome());        // Output: Welcome, Guest!
console.log(welcome("Charlie")); // Output: Welcome, Charlie!
```

-----

## 6\. Arrays

Ordered collections of data.

### Creating Arrays

```javascript
const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3);
```

### Accessing Elements

```javascript
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3
```

### Common Array Methods

  - `push()`: Adds element to the end.
  - `pop()`: Removes element from the end.
  - `shift()`: Removes element from the beginning.
  - `unshift()`: Adds element to the beginning.
  - `indexOf()`: Finds the first index of an element.
  - `includes()`: Checks if an element exists.
  - `slice()`: Returns a shallow copy of a portion of an array into a new array.
  - `splice()`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
  - `forEach()`: Executes a provided function once for each array element.
  - `map()`: Creates a new array populated with the results of calling a provided function on every element in the calling array.
  - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
  - `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.

<!-- end list -->

```javascript
const items = ["A", "B", "C"];
items.push("D");        // items: ["A", "B", "C", "D"]
items.pop();            // items: ["A", "B", "C"]
items.shift();          // items: ["B", "C"]
items.unshift("X");     // items: ["X", "B", "C"]
console.log(items.indexOf("B")); // Output: 1
console.log(items.includes("C")); // Output: true

const newItems = items.slice(0, 2); // newItems: ["X", "B"]
console.log(newItems);

const moreItems = [1, 2, 3, 4, 5];
moreItems.splice(1, 2, 6, 7); // Removes 2 and 3, adds 6 and 7. moreItems: [1, 6, 7, 4, 5]
console.log(moreItems);

const doubled = [1, 2, 3].map(num => num * 2); // doubled: [2, 4, 6]
console.log(doubled);

const evens = [1, 2, 3, 4, 5].filter(num => num % 2 === 0); // evens: [2, 4]
console.log(evens);

const sum = [1, 2, 3].reduce((acc, current) => acc + current, 0); // sum: 6
console.log(sum);
```

-----

## 7\. Objects

Unordered collections of key-value pairs.

### Creating Objects

```javascript
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function() {
    console.log("Engine started!");
  }
};
```

### Accessing Properties

```javascript
console.log(car.make);      // Output: Toyota (Dot notation)
console.log(car["model"]);  // Output: Camry (Bracket notation)

car.color = "blue"; // Add a new property
delete car.year;    // Remove a property

car.start(); // Output: Engine started!
```

### Object Destructuring (ES6+)

Extract properties from objects into distinct variables.

```javascript
const { make, model } = car;
console.log(make);  // Output: Toyota
console.log(model); // Output: Camry
```

### Spread Operator (`...`) for Objects (ES2018+)

Copy properties from one object to another.

```javascript
const originalCar = { make: "Honda", year: 2022 };
const newCar = { ...originalCar, model: "Civic", year: 2023 }; // Overwrites year
console.log(newCar); // { make: "Honda", year: 2023, model: "Civic" }
```

-----

## 8\. Asynchronous JavaScript

JavaScript is single-threaded, but it handles asynchronous operations (like network requests, timers) using mechanisms like callbacks, Promises, and `async/await`.

### Callbacks (Older approach)

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data from server";
    callback(data);
  }, 1000); // Simulate network delay
}

fetchData(function(data) {
  console.log("Data received (callback):", data);
});
```

### Promises (ES6+)

A cleaner way to handle asynchronous operations and avoid "callback hell".

```javascript
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received (promise)!");
      } else {
        reject("Failed to fetch data!");
      }
    }, 1500);
  });
}

fetchDataPromise()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

### `async`/`await` (ES2017+)

Syntactic sugar built on top of Promises, making asynchronous code look more synchronous and easier to read.

```javascript
async function getDataAsync() {
  try {
    const data = await fetchDataPromise(); // Wait for the promise to resolve
    console.log("Data received (async/await):", data);
  } catch (error) {
    console.error("Error (async/await):", error);
  }
}

getDataAsync();
```

-----

## 9\. ES6+ Features (Beyond what's already covered)

### Template Literals (Template Strings)

Easier string interpolation and multi-line strings.

```javascript
const name = "World";
const greeting = `Hello, ${name}!
This is a multi-line string.`;
console.log(greeting);
```

### Classes

Syntactic sugar for constructor functions and prototype-based inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Eve", 28);
person1.sayHello(); // Output: Hello, my name is Eve and I am 28 years old.

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the parent class constructor
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} (ID: ${this.studentId}) is studying.`);
  }
}

const student1 = new Student("Frank", 20, "S12345");
student1.sayHello();
student1.study();
```

### Modules (ESM - ES Modules)

Enables code organization into separate files and explicit import/export of functionalities.

`utils.js`:

```javascript
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const PI_VALUE = 3.14;
```

`main.js`:

```javascript
import { capitalize, PI_VALUE } from './utils.js';
// Or import * as Utils from './utils.js'; and use Utils.capitalize, Utils.PI_VALUE

console.log(capitalize("javascript")); // Output: Javascript
console.log(PI_VALUE);             // Output: 3.14
```

*Note: To run ES Modules, you typically need to use a bundler (like Webpack, Rollup, Parcel) or run in a modern browser/Node.js environment with proper configuration (e.g., `type: "module"` in `package.json` for Node.js).*

-----

## 10\. Error Handling

### `try...catch`

```javascript
try {
  // Code that might throw an error
  let result = someUndefinedVariable + 10;
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This block always executes.");
}
```

-----

## 11\. `this` Keyword

`this` refers to the context in which a function is executed. Its value depends on how the function is called.

  - **Global Context:** `this` refers to the global object (`window` in browsers, `global` in Node.js).
  - **Object Method:** `this` refers to the object itself.
  - **Constructor Function:** `this` refers to the newly created instance.
  - **Event Handler:** `this` refers to the element that triggered the event.
  - **Arrow Functions:** `this` is lexically bound (it retains the `this` value of the enclosing context where it's defined).

<!-- end list -->

```javascript
// Global context
console.log(this === window); // In browser: true (or global object in Node.js)

// Object method
const myObject = {
  name: "MyObj",
  greet: function() {
    console.log(`Hello from ${this.name}`);
  }
};
myObject.greet(); // Output: Hello from MyObj

// Arrow function in object method (captures 'this' from parent scope)
const anotherObject = {
  name: "AnotherObj",
  greet: () => {
    // 'this' here refers to the global object, not anotherObject
    console.log(`Hello from ${this.name}`); // will likely be undefined in browser unless name is a global var
  }
};
anotherObject.greet();

// Correct way to use 'this' with arrow functions inside methods
const yetAnotherObject = {
  name: "YetAnotherObj",
  sayLater: function() {
    setTimeout(() => {
      console.log(`Later from ${this.name}`); // 'this' correctly refers to yetAnotherObject
    }, 100);
  }
};
yetAnotherObject.sayLater();

// Constructor function
function MyConstructor(value) {
  this.value = value;
}
const instance = new MyConstructor(100);
console.log(instance.value); // Output: 100
```

-----

## 12\. DOM Manipulation (Browser-specific)

If you're working with web pages, the Document Object Model (DOM) is crucial.

### Selecting Elements

```javascript
const elementById = document.getElementById("myId");
const elementsByClass = document.getElementsByClassName("myClass"); // HTMLCollection
const elementByTag = document.getElementsByTagName("div");      // HTMLCollection
const querySingle = document.querySelector(".myClass #myId"); // First matching element
const queryAll = document.querySelectorAll("p.text");         // NodeList
```

### Modifying Elements

```javascript
// Assuming you have an element with id="myDiv"
const myDiv = document.getElementById("myDiv");

// Change text content
myDiv.textContent = "New text content!";

// Change HTML content
myDiv.innerHTML = "<strong>Bold text!</strong>";

// Change styles
myDiv.style.backgroundColor = "lightblue";
myDiv.style.color = "darkblue";

// Add/Remove/Toggle classes
myDiv.classList.add("highlight");
myDiv.classList.remove("old-class");
myDiv.classList.toggle("active"); // Toggles 'active' class
```

### Creating and Appending Elements

```javascript
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph); // Adds to the end of the body

const container = document.getElementById("container");
container.prepend(newParagraph); // Adds to the beginning of the container
```

### Event Handling

```javascript
const myButton = document.getElementById("myButton");

// Add an event listener
myButton.addEventListener("click", function() {
  alert("Button clicked!");
});

// Using an arrow function for cleaner syntax and `this` context
myButton.addEventListener("mouseover", (event) => {
  console.log("Mouse over button!", event.target);
});

// Removing an event listener
function handleClick() {
  console.log("Click handled!");
}
myButton.addEventListener("click", handleClick);
// myButton.removeEventListener("click", handleClick); // To remove it later
```

-----


```
[refresher content source from Gemini]
```
