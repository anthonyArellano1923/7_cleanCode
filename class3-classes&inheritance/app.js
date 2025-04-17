class Persona {
  constructor(name) {
    this.name = name
  }
  greet() {
    return console.log('Hola, mi nombre es ' + this.name)
  }
}
class Desarrollador extends Persona {
  constructor(parameters){
    super(parameters)
  }
  isThereCoffee(coffee) {
    if(coffee) console.log('Estoy listo para empezar a trabajar!')
    else console.log('Necesito café ahora mismo!')
  }
}

function Person(name) {
  this.name = name
}
Person.prototype.greet = function() {
  return console.log('Hola, mi nombre es ' + this.name)
}

function Developer(name) {
  this.name = name
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.isThereCoffee = function(coffee) {
  if(coffee) console.log('Estoy listo para empezar a trabajar!')
  else console.log('Necesito café ahora mismo!')
}

var webDev = new Developer('Anthony')
var desarrolladorWeb = new Desarrollador('Ynoht')

webDev.greet()
webDev.isThereCoffee(true)

desarrolladorWeb.greet()
desarrolladorWeb.isThereCoffee(false)

