let contact = {
  _age: 36,
  firstName: "David",
  lastName: "Taylor",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  get age() {
    return this._age;
  },
  set age(a) {
    if (a > 0) this._age = a;
  },
};
let keys = Object.keys(contact);
console.log(keys);

let desc = Object.getOwnPropertyDescriptor(contact, "_age");
console.log(desc); // returns { value: 36, writable: true, enumerable: true, configurable: true }

/**
 * Setting own property configuration using Object.defineProperty method
 *
 */

let car = {};

Object.defineProperty(car, "_engine", {
  value: "v6",
  writable: true, // marking this false makes the property read-only
  enumerable: true, // marking this false makes the property non-iterable
  configurable: true, // disables reconfiguration or deleting this property when false
});

console.log(Object.getOwnPropertyDescriptor(car, "_engine"));

let enumKeys = Object.keys(contact);
let allKeys = Object.getOwnPropertyNames(contact);
console.log(enumKeys);
console.log(allKeys);

/**
 *
 * Same configuration can be applied to objects using the below methods:
 *
 * Object.preventExtensions(obj) – after calling this method, we won't be able to add new properties to the object obj;
 * Object.seal(obj) – does not allow the adding, removing, or reconfiguring of the properties of the object obj;
 * Object.freeze(obj) – similar to Object.seal, but additionally makes it impossible to change the value of the property.
 *
 */
