let newMetals = ["Gold", "Silver", "Platinum"];

// looping through an array
for (let i = 0; i < newMetals.length; i++) {
  console.log(`Metal at position ${i} is ${newMetals[i]}`);
}

// using forEach loop with arrow functions
// NOTE: to the forEach method, the item, index and array are passed and we can used what is required
newMetals.forEach((item, index) =>
  console.log(`Metal at position ${index} is ${item.toUpperCase()}`)
);