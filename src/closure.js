/* eslint-disable no-unused-vars */
function doSomeTask () {
  const x = 100
  const y = 20
  console.log('x :' + x + 'y:' + y)
}
doSomeTask()
console.log('completed')
//
function outer () {
  const outerVar = 'hey i am in outer var!'
  console.log(outerVar)
  function inner () {
    const innerVar = 'Hae i am an outervar!'
    console.log(innerVar)
    console.log(outerVar)
  }
  // eslint-disable-next-line no-undef
  // console.log(innerVar)
  // return inner
}
// outer()
// eslint-disable-next-line no-undef
// inner();
