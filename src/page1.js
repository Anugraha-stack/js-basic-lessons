/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-new-object
const o = new Object()
// eslint-disable-next-line no-array-constructor
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-array-constructor
const a = new Array()
const d = new Date()
const f1 = function () {
  console.log('The cow Jumped over the MOON')
}
console.log('Date=' + d)
f1()
// eslint-disable-next-line no-undef
const o1 = Object.create({ x: 100, y: 200 })
console.log('x=' + o1.x + 'y=' + o1.y)
console.log(o1)
const o2 = Object.create(null)
const o3 = Object.create(Object.prototype)
// const o3 =new Object();
// const o3={};
console.log(o2)
console.log(o3)
// eslint-disable-next-line no-unused-vars
const o = { x: "don't change this value" }
// eslint-disable-next-line no-undef
console.log(o4.x)
const p=object.create(o4)
console.log(p)

