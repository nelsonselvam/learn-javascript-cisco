/**
 * 
 * Destructuring - destructuring an array and getting the elements
 * 
 */

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];

let [pet1, pet2, pet3] = myPets;

console.log(pet1);


myPets = ["cat", "dog"];
let [pemt1, , pemt3] = myPets;
console.log(pemt1); // -> cat
console.log(pemt3); // -> undefined

//with default values
let [pemt11, , pemt13 = "default"] = myPets;
console.log(pemt13);