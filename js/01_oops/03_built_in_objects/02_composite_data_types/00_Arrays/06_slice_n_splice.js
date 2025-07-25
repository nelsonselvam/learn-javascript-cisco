/***
 * 
 * Slicing - slices a part of the array and returns the sliced part
 * 
 * Copying a selected part of the array
 * 
 */

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets.slice(3); // slices from 3rd position
let p2 = myPets.slice(3,5); // slices from 3rd position and ends at 4th position
let p3 = myPets.slice(-3); // slices from the 3rd position from the end of the array
let p4 = myPets.slice(-3,-1); // slices from 3rd position and ends at position -2

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

/**
 * 
 * Splicing - Mutates the array
 * 
 * Deleting and replacing a selected part of the array
 * 
 */
let removedPets = myPets.splice(2, 3); 
console.log("\n"); 
console.log(myPets); 
console.log(removedPets);

// creating a new array using splicing

myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]
