class Point {
    #x = 0;
    #y = 0;
    color = 'red';
}
let point = new Point();
console.log(Object.keys(point));


// class User {};
// let user = new User(); 
// console.log(`${user instanceof User} ${typeof(user)}`);


class User {};
class EUser extends User {};
class EEUser extends EUser {};
let eeuser = new EEUser();
console.log(`${eeuser instanceof User} ${eeuser instanceof EUser} ${eeuser instanceof EEUser}`);


// class A {
//     getName() {
//         return 'A';
//     }
// }

// class B extends A {
//     getName() {
//         return 'B';
//     }
//     test(x) {
//         return x ? this.getName() : super.getName();
//     }
// }

//  let b = new B();
// console.log(`${b.test(true)} ${b.test(false)}`);


function A() {};
class B extends A {};
let b = new B();
console.log(`${b instanceof A} ${b instanceof B}`);
