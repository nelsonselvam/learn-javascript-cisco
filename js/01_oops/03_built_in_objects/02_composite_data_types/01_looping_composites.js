// Define an array of state codes.
let codes = ["IN", "CT", "NY", "NJ"];

// Iterate over the array using a for...of loop and log each code.
for (let code of codes) {
  console.log(code);
}

// Define a Set of state codes.
let codeSet = new Set(["IN", "CT", "NY", "NJ"]);

// Iterate over the Set using a for...of loop and log each code.
for (let code of codeSet) {
  console.log(code);
}

// Define a Map of state codes to full state names.
let codeMap = new Map([
  ["CT", "Connecticut"],
  ["NJ", "New Jersey"],
]);
console.log(codeMap);

// Iterate over the Map using a for...of loop and log each [key, value] pair.
for (let codeSet of codeMap) {
  console.log(codeSet);
}
