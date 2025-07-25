/****
 * Map Constructor: Similiar to an object but this is more universal
 *
 */

let emptyMap = new Map();
let petsMap = new Map([
  ["cats", 1],
  ["dogs", 2],
  ["hamsters", 5],
]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3

// checking presence of an element
console.log(petsMap.has("cats"));
console.log(petsMap.has("sharks"));

console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0

petsMap = new Map([
  ["cats", 1],
  ["dogs", 2],
  ["hamsters", 5],
]);


// looping through maps
petsMap.forEach((v,k) => console.log(`${k} - ${v}`));

// iterator
let petValuesIterator = petsMap.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2

let petKeysIterator = petsMap.keys();
console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs

let petsIterator = petsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}

console.log(petsMap instanceof Map); // -> true
let petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray instanceof Array); // -> true