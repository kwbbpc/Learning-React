
var craps = require('./craps.js')
var vac = require('./ClassExmpale.js')

//naming constants in JS
const pizza = true;
//pizza = false; // error @ interpretation time


//Let keyword: scope a variable to any single block, or scope it to a for loop
var topic = "JS"

if(topic){
  let topic = "JS - react"
  console.log("block", topic)
}

console.log("global", topic)


//Destructuring
var sandwhich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato"]
}
//and the desctructure:
var {meat, cheese} = sandwhich;
console.log(meat, cheese);
//same with functions
var regularPerson = {firstname:"Kyle", lastname:"Broadway"}
var lordify = ({firstname}) => {
  console.log(`${firstname} of Maryland`)
}
lordify(regularPerson)

//Restructuring - putting objects together from variables
var name = "Tallac"
var elev = "9738"
var funHike = {name, elev}
console.log(funHike)


//Promises
//functions to call if pass/fail
const gameOver = result => console.log(`Game Over: ${result} `)
const stillRolling = (message, currentPoint) => console.log(`${message} - try again for ${currentPoint}`)
//the promise calls
//first roll (no point set)
craps.craps(7).then(gameOver, stillRolling)
craps.craps(2).then(gameOver, stillRolling)
craps.craps(8).then(gameOver,stillRolling)
//second roll (point set)
craps.craps(5,8).then(gameOver, stillRolling)
craps.craps(7,8).then(gameOver, stillRolling)
craps.craps(8,8).then(gameOver, stillRolling)


//Classes
var excellent = new vac.Vacation("Sandals", 10);
excellent.print();
