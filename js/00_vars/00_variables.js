var  height;
console.log(height);  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
var weight = 70;  //  ->  Declare  and  initialize  a  variable
console.log(weight);  //  ->  70

// var vs let
// var is function-scoped or globally scoped, while let is block-scoped
let  height;
//let  height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
console.log(height);


const pi = 3.14;
// pi = 3.14159;  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable
console.log(pi);  //  ->  3.14

// const is block-scoped and cannot be reassigned, but can be used to declare objects or arrays
const person = {
  name: "Alice",
  age: 30
};