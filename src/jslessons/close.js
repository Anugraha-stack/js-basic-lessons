// eslint-disable-next-line no-unused-vars
function createGame (gameName) {
  let score = 0
  return function win () {
    score++
    return `Your name ${gameName} score is ${score}`
  }
}
const gameFunc = createGame('cricket')
console.log(gameFunc())
