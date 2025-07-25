function outer() {
    let name = "outer";
    let str = inner();
    return str;
}
 
function inner() {
    let name = "inner";
    return "Hello !";
}
 
console.log("before outer() call");
//debugger; // This will pause the execution in the browser's debugger
// You can inspect variables, step through code, etc.
console.log(outer());
console.log("after outer() call");

let x = 3e-3;
console.log(x); // -> 0.003

let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);
