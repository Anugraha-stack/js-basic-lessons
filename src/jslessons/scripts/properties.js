/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars
var myobject = {
  // An ordinary data property
  $x: 0,
  // An accessor property defined as a pair of functions
  get data () {
    return this.x;
  },
  set data (value) {
    if (value <= 0) {
      throw new Error('value should be greater than zero');
    }
    this.x = value;
    console.log('set called');
  }
};
myobject.data = 100;
console.log(myobject.data);
myobject.x = 5000;
console.log(myobject.data)
var o = {}; // Start with no properties at all
// Add a non enumerable data property x with value 1.
Object.defineProperty(o, 'x', {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true
});
// eslint-disable-next-line no-undef
console.log(o, x);
o.x = 2999;
// eslint-disable-next-line no-undef
console.log(o, x)
//
// eslint-disable-next-line no-unused-vars
var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
        enumerable: true,
        configurable: true
    }
});
