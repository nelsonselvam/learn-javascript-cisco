// normal array creation
let cars = ["Subaru", "Mercedes"];

// array creation using the Array Constructor
let arr1 = new Array();

let arr2 = new Array(2);

let arr3 = new Array("Mixed", 1, true);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr3[3]); // no index out of bound as in Java

// let arr4 = new Array(-7); // throws RangeError: Invalid array length
