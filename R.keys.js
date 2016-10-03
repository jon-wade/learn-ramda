"use strict"

const R = require('ramda')

//returns an array of keys from the object passed into it
console.log(R.keys({
    hello: "world",
    foo: "bar"
}))

//logs ['hello', 'foo']