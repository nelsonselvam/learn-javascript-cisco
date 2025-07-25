/**
 * 
 * Closure is a function that has access to its own scope, the outer function's scope, and the global scope.
 * Closures are created when a function is defined inside another function, allowing the inner function to  
 * access variables from the outer function even after the outer function has finished executing.
 * * Closures are often used to create private variables or functions.
 * @returns 
 * 
 */
function getTick(){

    let tick = 777; // for closure to capture the tick value          

    return function() { // function context is preserved
        // This inner function has access to the outer function's scope
        return tick++;
    };

}

let tick = getTick();
console.log(tick()); // -> 777
console.log(tick()); // -> 778              
console.log(tick()); // -> 779
console.log(tick()); // -> 780       
