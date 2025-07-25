let nameWithinDoubleQuotes = "Alice";
let nameWithinSingleQuotes = 'Bob';

console.log(nameWithinDoubleQuotes); // -> Alice
console.log(nameWithinSingleQuotes); // -> Bob

console.log(nameWithinDoubleQuotes.length); // -> 5

let  message1  =  "The  vessel  'Mars'  called  at  the  port."; // alternatively, we can use backslashes to escape single quotes
// let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
// Alternatively, we can use double quotes to avoid escaping single quotes
let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

// strings and arithmetic operations
let  str1  =  "Hello";      
let  str2  =  "World";
let  str3  =  str1  +  "  "  +  str2;  // string concatenation
console.log(str3);  //  ->  Hello World

console.log("5"  +  5);  //  ->  55 (string concatenation)
console.log("5"  -  5);  //  ->  0 (string to number conversion)
console.log("5"  *  5);  //  ->  25 (string to number conversion)
console.log("5"  /  5);  //  ->  1 (string to number conversion)
console.log("5"  %  2);  //  ->  1 (string to number conversion)
console.log("5"  **  2);  //  ->  25 (string to number conversion)      
console.log("5"  ==  5);  //  ->  true (string to number conversion)    
console.log("5"  ===  5);  //  ->  false (strict equality, no conversion)
console.log(5 + "five");  //  ->  5five (string concatenation)
console.log(5 - "five");  //  ->  NaN (string to number conversion fails)
console.log(5 * "five");  //  ->  NaN (string to number conversion fails)
console.log(5 / "five");  //  ->  NaN (string to number conversion fails)
console.log(5 % "five");  //  ->  NaN (string to number conversion fails)
console.log(5 ** "five");  //  ->  NaN (string to number conversion fails)


// Template literals : String interpolation
// Template literals are enclosed by backticks (`) and allow for multi-line strings and string interpolation
let name = "Alice"; 
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // -> My name is Alice and I am 30 years old.


// String methods
let text = " Eternal Mangeykuo Sharingan ";

console.log(text.toUpperCase()); // -> ETERNAL MANGEYKUO SHARINGAN
console.log(text.toLowerCase()); // -> eternal mangeykuo sharingan          
console.log(text.indexOf("Mangeykuo")); // -> 8 (index of the first occurrence)
console.log(text.lastIndexOf("a")); // -> 17 (index of the last occurrence)
console.log(text.includes("Sharingan")); // -> true (checks if the substring exists)        
console.log(text.startsWith("Eternal")); // -> true (checks if the string starts with the substring)
console.log(text.endsWith("Sharingan")); // -> true (checks if the string ends with the substring)
console.log(text.slice(0, 7)); // -> Eternal (extracts a section of the string)
console.log(text.substring(8, 16)); // -> Mangeykuo (extracts a section of the string)      
console.log(text.replace("Mangeykuo", "Uchiha")); // -> Eternal Uchiha Sharingan (replaces a substring)
console.log(text.split(" ")); // -> [ 'Eternal', 'Mangeykuo', 'Sharingan' ] (splits the string into an array)
console.log(text.length); // -> 30 (length of the string)       
console.log(text.charAt(0)); // -> E (character at the specified index)
console.log(text.charCodeAt(0)); // -> 69 (Unicode of the character at the specified index)
console.log(text.trim()); // -> Eternal Mangeykuo Sharingan (removes whitespace from both ends)
console.log(text.trimStart()); // -> Eternal Mangeykuo Sharingan (removes whitespace from the start)
console.log(text.trimEnd()); // -> Eternal Mangeykuo Sharingan (removes whitespace  from the end)   
console.log(text.repeat(2)); // -> Eternal Mangeykuo SharinganEternal Mangeykuo Sharingan (repeats the string)  
