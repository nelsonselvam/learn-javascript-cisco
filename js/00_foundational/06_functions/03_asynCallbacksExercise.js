//
// Write a program that will print out (to the console) consecutive integers 10 times, 
// in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
function printConsecutiveIntegers() {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
      clearInterval(intervalId);
    }
  }, 2000);
}

printConsecutiveIntegers();

let counter = 1;
let intervalId = setInterval(function () {
  console.log(counter++);
}, 2000);
setTimeout(function () {
  clearInterval(intervalId);
}, 20000);
