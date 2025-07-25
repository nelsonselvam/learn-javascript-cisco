// An Object is a collection of properties, and a property is an association between a name (or key) and a value.
// In JavaScript, objects are a key part of the language and can be created using object literals, constructors, or the Object.create method.
// Object is an associative array, where each key is a string (or Symbol) and the value can be any type.

/**
 *
 * Object creation using object literal syntax [literal notation]. Using curly braces `{}` to define an object.
 * Also known as initializer notation
 */
let sampleObject = {
  id: 10,
  delay: 20,
  name: "en to tre",
  isPresent: true,
  delay: 50,
};
sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id); // -> 10
console.log(sampleObject.name); // -> en to tre
console.log(sampleObject.delay); // -> 100

let contact = {}; // empty object creation

/**
 * By default, keys are interpreted as strings and it is best to use camelCasing while defining them.
 *
 */

contact.id = 123;
contact.tel = "412-563-9850";

contact.email = "jumpingsuperstar@wwt.com";

console.log(contact);

console.log(typeof console);
console.log(typeof console.log);

// NOTE: deleting objects in JS is not possible, as it is internally handled by JS Garbage Collector