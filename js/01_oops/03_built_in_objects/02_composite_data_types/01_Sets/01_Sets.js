/**
 * Set() operator - create unique unordered elements
 *
 *
 */

let emptySet = new Set();

console.log(emptySet.size);

let newSet = new Set(["mouse", "keyboard", "usb", "pen drive", "usb", "mouse"]);

console.log(newSet.size);

console.log(newSet.has("cat"));
console.log(newSet.has("mouse"));

console.log(newSet.size); // -> 2
newSet.add("shark");
newSet.add("hamster");
console.log(newSet.size); // -> 4
console.log(newSet.has("shark")); // -> true
newSet.delete("dog"); // -> true
newSet.delete("dog"); // -> false
console.log(newSet.size); // -> 3
newSet.clear();
console.log(newSet.size); // -> 0

// replenish the set
newSet = new Set(["mouse", "keyboard", "usb", "pen drive", "usb", "mouse"]);

// looping through a set
newSet.forEach((i) => console.log(i));

let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster

let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}

console.log("\n");
// spread operator in Sets
console.log(petsSet instanceof Set); // -> true
let petsArray = [...petsSet]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true

