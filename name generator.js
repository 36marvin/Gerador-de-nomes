"use strict"

const firstNames = ["Roberto", "Rubens", "Pedro", "Enrique"]
const lastNames = ["Carlos", "da Silva", "de Carvalho", "Magalhães"]

function randomItemArray (array) {   //returns a random item from the 'array' input
    return array[Math.floor(Math.random() * array.length)]   //random index number that is larger than 0 and smaller than array.length
}

function generateName () {
    var fName = randomItemArray(firstNames)
    var lName = randomItemArray(lastNames)
    console.log(`${fName} ${lName}`)
}

generateName()