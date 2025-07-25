/**
 *
 * Assigning a new object to an existing object makes both the object point to the same memory location.
 *
 */

const label = {};

//label = { name: "petrovikleshias" }; // this will error out as constant reassignment is not possible

label.name = "grastienble";

console.log(label.name);

var point1 = { x: 10, y: 20 };
var point2 = { x: 10, y: 20 };
console.log(point1 === point2); // false

point3 = point1;

console.log(point1 === point3); // false

// altering point1 or point3 makes the changes reflect in both the objects in memory

/***
 * Copying object properties using Object.assign() method
 *
 */

let point0 = { x: 10, y: 30 };
point1 = point0; // reference

Object.assign(point2, point1);
console.log(point2);

let point4 = {};
Object.assign(point4, point0, { a: 10 });
console.log(point4);

let point5 = {};
Object.assign(point5, point0, { a: 100, color: "red" }); // a gets overwritten
console.log(point5);


/**
 * In case if an object has a nested value, both assign() and spread operator do a shallow cloning.
 * Here only the reference is copied. 
 * 
 * For a deep copy, manual method has to be written.
 * 
 */