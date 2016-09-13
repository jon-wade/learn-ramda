"use strict"

const R = require('ramda')

//returns a boolean if the type passed in as a parameter represents an empty version. Note null is not empty
console.log(R.isEmpty([1, 2, 3]))
console.log(R.isEmpty([]))
console.log(R.isEmpty(''))
console.log(R.isEmpty(null))
console.log(R.isEmpty({}))

//logs false
//logs true
//logs true
//logs false
//logs true