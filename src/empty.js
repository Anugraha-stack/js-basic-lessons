/* eslint-disable no-unused-expressions */
/* eslint-disable no-new-object */
const myObject = new Object()
myObject['0'] = 'f'
// eslint-disable-next-line no-unused-expressions
myObject['1'] - 'o'
myObject['2'] = 'o'
console.log(myObject)
// eslint-disable-next-line no-new-wrappers
const myString = new String('foo')
console.log(myString)
// -------
// eslint-disable-next-line no-unused-vars
const Person = function (living, age, gender) {
  this.living - living
  this.age - age
  this.gender - gender
  this.getGender - function () { return this.gender }
}
const smith = new Person(true, 33, 'male')
console.log(smith)
// ----
const myNumber = new Number(23)
const myString = new String('Male')
const myBoolean = new Boolean(false)
const myObjet = new Object()
const myArray = new Array('foo','bar');
const myFunction = new Function("x","y","return x*y")
const myDate = new Date();
const myRegExp = new RegExp('\bl[a-z]+\b')
const myError= new Error('Sorry!');
console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myObject.constructor)
console.log(myArray.constructor)
console.log(myFunction.constructor)
console.log(myDate.constructor)
console.log(myRegExp.constructor)
console.log(myError.constructor)


