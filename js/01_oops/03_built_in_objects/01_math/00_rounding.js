console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E); // -> 2.718281828459045

console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10
console.log(Math.ceil(10.499999)); // -> 11 
console.log(Math.floor(10.499999)); // -> 10
console.log(Math.round(10.499999)); // -> 10
console.log(Math.ceil(10.5)); // -> 11
console.log(Math.floor(10.5)); // -> 10
console.log(Math.round(10.5)); // -> 11
console.log(Math.ceil(10.8)); // -> 11
console.log(Math.floor(10.8)); // -> 10
console.log(Math.round(10.8)); // -> 11


let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // -> ?

