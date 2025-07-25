console.log(`${Boolean(-1)} ${Boolean(0)} ${String(0)} ${String(1)}`);

let str = 'sample string';
console.log(`${str.includes('s')} ${str.indexOf('s')}
${str.lastIndexOf('s')}`);


console.log(Date.now());

let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
let r1 = points.some(e => e.x === 0)
let r2 = points.every(e => e.x === 0)
console.log(`${r1} ${r2}`);



let result = points.map(e => e.x + e.y );
console.log(result);


let x = [100, 101, 102, 103];
result = x.reduce((acc, curr) => acc + curr, 1000);
console.log(result);

result = points.find(e => e.x > 0);
console.log(result);


 x = ['a', 'b', 'c', 'd', 'e'];

console.log(x.slice(1, -1 ));  //   -> ['b', 'c', 'd']
console.log(x.slice(1)); // -> ['b', 'c', 'd', 'e']
console.log(x.slice(-3)); // -> ['c', 'd', 'e']

x.splice(2,2);
x.splice(2,0,'x','y');
console.log(x);


let a = [1, 2, 30, 20];
let str1 = a.join(' -> ');
console.log(str1);

let s = new Set([1, 2, '100']);
console.log(...s);

let m = new Map([[1, '11'], ['2', 22]]);
m.set(3, '33');
console.log(`${m.has(1)} ${m.has('1')} ${m.get(3)}`);

a = [1,2];
Array.prototype.test = function(){
    console.log('test');
}
let b = [3,4];
a.test();
b.test();
