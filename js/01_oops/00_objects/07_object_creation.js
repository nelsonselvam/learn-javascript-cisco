/**
 * There are several other ways to create objects other than the liternal notation.
 *
 * Factory Method (a pattern)
 * Prototyping (discouraged)
 * Constructor (discouraged)
 *
 */

// Factory Method

let createPoint = function (x, y) {
  // this is a factory method
  let obj = {};
  obj.x = x;
  obj.y = y;
  return obj;
};
let point1 = createPoint(1, 1);
let point2 = createPoint(2, 2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

// simplified version: let createPoint  = (x, y) => ({x, y});

let createColoredPoint = function (x, y, color) {
  let _info = "... object under construction";
  let _color = color;
  console.log(_info);
  return {
    // this is important in factory method as it should return a new object
    x,
    y,
    getColor() {
      return _color;
    },
  };
};
let coloredPoint1 = createColoredPoint(1, 1, "red"); // -> ... object under construction
let coloredPoint2 = createColoredPoint(2, 2, "green"); // -> ... object under construction
console.log(coloredPoint1.getColor()); // -> red
console.log(coloredPoint2.getColor()); // -> green
console.log(coloredPoint1._color); // -> undefined !!!

/**
 * Usually the names of constructors begin with capital letters, hence the name of the ColoredPoint function.
 * The first change that is noticeable is the lack of the word return. In the constructor, this is not necessary,
 * after running it with new, it will automatically return an implicitly created object.
 * We have access to this implicitly created object in the constructor using the keyword this.
 * With this, we define and initiate the properties of the new object. Because the constructor is a function,
 * we can also use the closure here. This part of the code is practically no different from the factory.
 */
let ColoredPoint = function (x, y, color) {
  let _info = "... object under construction";
  let _color = color;
  console.log(_info);

  this.x = x;
  this.y = y;
  this.getColor = function () {
    return _color;
  };
};
let coloredPoint11 = new ColoredPoint(1, 1, "red");
let coloredPoint22 = new ColoredPoint(2, 2, "green");
console.log(coloredPoint11.getColor()); // -> red
console.log(coloredPoint22.getColor()); // -> green
console.log(coloredPoint11._color); // -> undefined !!!

console.log(typeof ColoredPoint.constructor);

let emptyObject = new Object();
console.log(emptyObject.constructor.name); 

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor);
