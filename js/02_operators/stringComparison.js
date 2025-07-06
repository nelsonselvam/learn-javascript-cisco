console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

console.log("11" === 11); // -> false
console.log("11" == 11); // -> true

let n = 2 * 3 ** 3 - 1;
console.log(n);

let str = "str";
str = +str;
console.log(str); // -> NaN

let n1 = 10;
let m = ++n1;
console.log(n1); // -> 11
console.log(m); // -> 11

console.log(!((true && false) || true));

console.log(20 || 5);

console.log(false || "false"); // -> "false"

console.log("abcd" > "Abcd");

console.log(3 * 4 > 20 - 15);

// let x = false || true;
// let y = "true" && "false";
// let z = false && true;
// console.log(`${x} ${y} ${z}`);

// let a = true && 20;
// let b = 0 || 20
// let c = 0 && 20;
// console.log(`${a} ${b} ${c}`);

let a = 20 + "10";
let b = 20 + +"10";
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xa;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

let x = [10, 20, 30, 40];
let y = [50, 60];
x.reverse().push(y);
console.log(x);
console.log(x.length);

let colors = ["red", "green", "blue"];
for (let c of colors) console.log(c);

let route = { distance: 131, elevation: 1.4 };
for (let k in route) console.log(k);

let a1 = (n) => {
  return n > 2 ? n * a1(n - 1) : 2;
};
console.log(a1(6));

let cmp = (a, b) => a - b;

x = [40, 10, 30, 20, 50];
x.sort(cmp);
console.log(x);

const text = "hello";
try {
  console.log(text.toUpperCase());
} catch (error) {
  console.log(text);
} finally {
  console.log(text);
}
