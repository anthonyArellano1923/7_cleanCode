//Arays 
//Not recomended
const x = [1, 2, 3, 4, 5]
const nameA = ['Cande', 'Alex', 'Mariana']
const colors = ['red', 'green', 'blue']

//Corrected
const numbersList = x
const namesList = nameA
const colorsList = colors

//Booleans
//Not recomended
const active = true
const correct = false
const write = true
const user = false

//Corrected
const isActive = active
const isCorrect= correct
const canWrite = write
const isUser = user

//Numbers
//Not recomended
let result = 3543
const y = 20
const PI = 3.14159

//Corrected
let sumResult = result // En caso de ser el resultado de una suma, por ejemplo.
const maxY = y // Altura máxima, por ejemplo.
const constantPI = PI 

//Functions
//Not recomended
function sendAlertIfIsEmpty() {}
function ifNotExistCreateNewObject() {}
function password() {}
function results() {}

//Corrected
function sendAlert() {}
function createObject() {}
function setPassword() {}
function getResults() {}

//Classes
//Not recomended

class School {}
class NewService {}
class ImplementNewAccount {}

//Corrected

class ProgramingSchool {}
class ElectricalService {}
class BasicSubscriptorAccount {}