let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string

let  isActive  =  true;
console.log(typeof  isActive);  //  ->  boolean

let randomNumber = 42;
console.log(typeof randomNumber);  //  ->  number

let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123


let  a  =  1  /  0;
let  b  =  -Infinity;
   
console.log(a);  //  ->  Infinity
console.log(b);  //  ->  -Infinity
console.log(typeof  a);  //  ->  number
console.log(typeof  b);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number
