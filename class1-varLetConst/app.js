var global = 20
let local = 30
const tryToChangeMe = 'I wont change'

console.log('First global var value: ', global)
console.log('First local let value: ', local)
{
  let local = 10
  console.log('This is a local', local)
  global += 10
  try {
    local = local*20
    console.log("This won't work")
  } catch {
    console.warn("Told you.")
  }
}
local *= 30
try {
  tryToChangeMe = 20
} catch {
  console.warn('Cant change constants')
}
console.log('Second global var value: ', global)
console.log('Second local let value: ', global)
