/**
 *
 * Just like how we assign primitives, functions and arrays to variables,
 * the same can be added to keys inside an object.
 *
 *
 */

let test = {
  id: 1,
  isTrue: false,
  name: "test",
  fruitArray: ["cherry", "apple", "mango"],
  add: function (a, b) {
    // this is called a method
    return a + b;
  },
  nestedObj: {
    testId: "TEST567",
    testName: "Testing the nested object",
  },
};

console.log(test.add(4, 5));

console.log(test.nestedObj.testName);

test.nestedObj.testUsers = ["Manila012", "Matricia098"];

console.log(test.nestedObj);

// deleting object properties
delete test.nestedObj.testName;

console.log(test.nestedObj);

let point = {
  x: 0,
  y: 0,
  moveHorizontally: function (distance) {
    this.x = this.x + distance; // always use 'this' to refer object properties to mutate the state
  },
  moveVertically: function (distance) {
    // never use arrow functions as they are lexically scoped and do not have access to the 'this' keyword
    this.y = this.y + distance;
  },
};

console.log("\n" + point.x + "--" + point.y);

point.moveHorizontally(15);
point.moveVertically(15);

console.log("\n" + point.x + "--" + point.y);

/**
 * Multiworded Keys : use 'braclet' notation to define/access/update keys. object["key"]
 *
 */
let multiWordKeys = {
  "first name": "Cupertinio",
};

multiWordKeys["first name"] = "Martin Cupertinio";

console.log(multiWordKeys["first name"]);

/**
 * Computed Keys: dot notation will not allow to compute key values on the fly whereas bracket notation does.
 *
 */

let contact = {
  email_1: "RonaldSMurphy@freepost.org",
  email_2: "rsmurphy@briazz.com",
};
for (i = 1; i <= 2; i++) {
  let key = "email_" + i;
  console.log(`${key}: ${contact[key]}`);
}
