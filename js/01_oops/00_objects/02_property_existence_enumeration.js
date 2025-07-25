/**
 *
 * To check if a proprety exists in an object before modifying the object's properties
 *
 *
 */

let contact = {
  tel: "2345525555",
  email: "exists@property.com",
};

console.log(contact.tel);
console.log(contact.home); // this will not

if (!contact.home) {
  contact.home = "11232";
}

console.log(contact.home);

/**
 * A non existent nested property in an object, when tried to access will result in an error.
 * Better to check before accessing the property.
 *
 */
// console.log(contact.home.areaCode); // causes an error
contact && contact.home && console.log(contact.home.areaCode);

/**
 * Existence test using 'in'
 * the key should be represented as a string.
 */
if ("notes" in contact) {
  // if true
  console.log(contact.notes);
}


/**
 * Object enumeration using 'in' keyword
 * 
 */

for (x in contact) {
    console.log(contact[x]);
}

/**
 * 
 * Getting the property key names using Object.keys method
 * 
 */

let keys = Object.keys(contact);
console.log(keys);