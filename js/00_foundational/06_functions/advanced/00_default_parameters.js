function greetings() {
  console.log("Hello, World!");
}
greetings(); // 'Hello, World!'

/**
 * without default parameters, the function would throw an error if no argument is passed
 * @param {
 *
 * } name
 */
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // 'Hello, Guest!'
greet("Alice"); // 'Hello, Alice!'

hello = (name) => {
  console.log(`Hello, World! `+ (name ? name : "Guest"));
}

hello(); // 'Hello, World! Guest'
hello("Bob"); // 'Hello, World! Bob'