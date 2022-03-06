// eslint-disable-next-line no-unused-vars
function getchild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
/* eslint-disable no-const-assign */
// eslint-disable-next-line no-unused-vars
const o4 = { x: "don't change this value" }
// eslint-disable-next-line no-undef
// console.log(o4.x)
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
let p = Object.create(o4)
// console.log(p)
/*
o4 = null
p = Object.create(o4)
console.log(p)
*/
Object.prototype = 0
// console.log(Object)
// eslint-disable-next-line no-unused-vars
const o5 = {}
// console.log(o5)
o5.x = 100
console.log(o5)
p = getchild(o5)
console.log(p)
p.y = 200
const q = getchild(p)
q.z = 300
console.log(q)
console.log('q.x+q.y+q.z' + (q.x + q.y + q.z))
console.log('p.x+p.y+p.z' + (p.x + p.y + p.z))
console.log('o5.x' + o5.x)
//
const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete Object.prototype

// eslint-disable-next-line no-unused-vars
const a = 1
delete this.a
// eslint-disable-next-line no-unused-vars
function f1 () {}
delete this.f1()

