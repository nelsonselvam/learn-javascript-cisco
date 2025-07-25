/**
 *
 * Introduced in ES6, use `class` keyword to define a class.
 *
 */
class AnEmptyClass {
  constructor(id) {
    this.id = id;
    console.log("Object initiated with id: " + this.id);
  }

  sayHi() {
    if (this.id > 0) {
      console.log("Hi! Greater than zero!!");
    }
  }

  static sayHello() {
    console.log("Say Static Hello!!");
  }
}

let anEmptyObject = new AnEmptyClass(7);
anEmptyObject.sayHi();
AnEmptyClass.sayHello(); // static member without the need of object instantiation

/**
 *
 * Class Expressions, just like Function Expressions
 *
 */

let AlmostAnEmptyClass = class {
  constructor(id) {
    this.id = id;
    console.log("Initiated an empty object from a class expression!!");
  }
};

let almostAnEmptyObject = new AlmostAnEmptyClass(100);

/**
 *
 * instanceof operator
 *
 */

console.log(almostAnEmptyObject instanceof AlmostAnEmptyClass);

console.log(almostAnEmptyObject.constructor.name); // gives the Class Name

console.log(almostAnEmptyObject instanceof AlmostAnEmptyClass); // -> true
console.log(almostAnEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true
