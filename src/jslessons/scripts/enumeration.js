/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable no-var */
/* eslint-disable semi */
var numbers = { x: 1,y: 2,z: 3 };
// for (var i in numbers) {
//     if (numbers.hasOwnProperty('x')) {
//     console.log(i + '-' + numbers[i]);
//     }
// }
var o = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 };
        // eslint-disable-next-line no-undef
        console.log(o1);
// -----------
function extend (o, p) {
    for (var prop in p) { // For all props in p.
        o[prop] = p[prop] // Add the property to o.
    }
    return o
}
var q = {};
console.log(q)
// eslint-disable-next-line no-undef
q = createCopy(q,o1);
console.log(q)
// ----
function merge (o,p) {
    for (var prop in o) continue
    // eslint-disable-next-line no-unused-expressions
    o[prop]
}
