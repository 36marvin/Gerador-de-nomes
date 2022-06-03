"use strict"

const firstNames = ["Roberto", "Rubens", "Pedro", "Enrique"]
const lastNames = ["Carlos", "da Silva", "de Carvalho", "Magalhães"]

function randomVarArray (array) {
    var arrayLenght = array.length;
    return array[Math.floor(Math.random() * arrayLenght)]
}

function generateName () {
    var fName = randomVarArray(firstNames)
    var lName = randomVarArray(lastNames)
    console.log(`${fName} ${lName}`)
}

generateName()