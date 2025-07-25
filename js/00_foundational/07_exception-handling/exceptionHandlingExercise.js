// a division function with error handling

function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        if (b === 0) {
            throw new RangeError('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null; // Return null or handle the error as needed
    }
}

divide("one", 2); // -> Error: Both arguments must be numbers
divide(10, 0); // -> Error: Cannot divide by zero

let numbers = [10, 40, 0, 20, 50];

numbers.forEach((num, index) => {
    try {
        if (num === 0) {
            throw new RangeError('Cannot divide by zero');
        }
        console.log(`10 divided by ${num} is ${divide(10, num)}`);
    } catch (error) {
        console.error(`Error at index ${index}: ${error.message}`);
    }
}
);

