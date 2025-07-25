// Define a function called 'inner'. This function will be used as a callback.
let inner = function () {
  console.log("inner 1");
};

// Define a function called 'outer' that takes a 'callback' function as an argument.
let outer = function (callback) {
  console.log("outer 1");
  // Use setInterval to repeatedly call the 'callback' function every 1000 milliseconds (1 second).
  // The ID of this interval is stored in 'timerId' so we can stop it later.
  let timerId = setInterval(callback, 1000); /*ms*/
  console.log("outer 2");
  // Use setTimeout to execute a function after a delay of 5500 milliseconds (5.5 seconds).
  // This function will clear the interval set by setInterval, stopping the repeated calls.
  setTimeout(function () {
    clearInterval(timerId);
  }, 5500);
};

// Log "test 1" to the console. This happens immediately.
console.log("test 1");
// Call the 'outer' function, passing 'inner' as the callback.
outer(inner);
// Log "test 2" to the console. This also happens immediately after 'outer' is called,
// because setInterval and setTimeout are asynchronous (they don't block the main execution flow).
console.log("test 2");
