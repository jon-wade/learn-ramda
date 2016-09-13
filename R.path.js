"use strict"

const R = require('ramda')

//returns the value of the property of an object according to the hierarchy set by the order of the array of the first argument
console.log(R.path(['a', 'b'], {a: {b: 123}}))
console.log(R.path(['hello', 'world'], {
    hello: {world: "How"},
    world: "are",
    again: "you"
}))

//logs 123
//logs "How" -> looks for a property called 'world', which belongs to a property called 'hello'


