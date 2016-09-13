"use strict"

const R = require('ramda')

const example = (param) => {
    console.log(param + " hello world")
}

//R.tap runs the function passed in as the first parameter, with the second parameter as its argument
//It then returns the second parameter
console.log(R.tap(example, "Jon says"))

//logs "Jon says hello world" -> output of the example function running
//logs "Jon says" -> return value of R.tap









