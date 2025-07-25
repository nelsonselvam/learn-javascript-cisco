/***
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 *
 * Promises are used to support asynchronous operations at the interface between the producer and consumer.
 * The producer produces data, making it available in the form of a promise, and the consumer, applying this promise, tries to use the data.
 * 
 * Promise States - 
 * 
 * pending - The initial state, neither fulfilled nor rejected.
 * fulfilled - The operation completed successfully, resulting in a value.
 * rejected - The operation failed, resulting in a reason for the failure.
 */

let p = new Promise((resolve, reject) => { //executor function
  console.log("executor function is called");
  let value = Math.floor(Math.random() * 4);
  if (value === 0) {
    reject(new Error("!!!"));
  } else {
    setTimeout(() => {
      resolve(value);
    }, value * 1000);
  }
});

p.then(
  (value) => {
    console.log(`resolved with value: ${value}`);
  },
  (error) => {
    console.error(`rejected with error: ${error.message}`);
  }
);

console.log("promise created, executor function is called");
setTimeout(() => {
  console.log("after 5 seconds, promise state is: ", p);
}, 5000);
console.log("Do something else while waiting for the promise to resolve or reject");