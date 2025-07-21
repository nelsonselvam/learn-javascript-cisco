let counter;
console.log(counter); //  ->  undefined
{
  counter = 1;
  {
    console.log(counter); //  ->  1
  }
}
counter = counter + 1;
console.log(counter); //  ->  2

// global vs  local  scope
let height = 180;
{
  let weight = 70;
  console.log(height); //  ->  180
  console.log(weight); //  ->  70
}
console.log(height); //  ->  180
//console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
// global vs  local  scope  with  var
var globalVar = "I am global";

function localScopeExample() {
  var localVar = "I am local";
  console.log(globalVar); //  ->  I am global
  console.log(localVar); //  ->  I am local
}
// console.log(localVar);  //  ->  Uncaught  ReferenceError:  localVar  is  not  defined
// console.log(globalVar);  //  ->  I am global
localScopeExample();
