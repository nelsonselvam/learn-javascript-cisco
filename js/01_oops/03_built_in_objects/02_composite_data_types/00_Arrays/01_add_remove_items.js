// merging arrays
let preciousMetals = ["Gold", "Silver", "Platinum"];
let metals = ["Palladium", "Germanium"];

let newMetals = metals.concat(preciousMetals); // modify and produce a new object

console.log(newMetals);

/**
 * Adding and removing items
 *
 */

// push and unshift

// adding new elements at the end of the array
newMetals.push("Zirconium");
newMetals.push("Titanium", "");

console.log(newMetals);

// unshift - adding elements to the start of the array

newMetals.unshift("Iron", "Copper");

console.log(newMetals);

// pop and shift
newMetals.pop(); // removes an element from the end of the array
newMetals.shift(); // removes an element from the start of the array

console.log(newMetals);
