"use strict"

const R = require('ramda')

//f1 returns its argument multiplied by 2
const f1 = arg => arg * 2
//f2 returns its argument plus 5
const f2 = arg => arg + 5

//running from left to right, takes the return value of first function and pipes it in as an argument to the second function
let f3 = R.pipe(f1, f2)
let f4 = R.pipe(f2, f1)

//this should return (2*2)+5 = 9
console.log(f3(2))

//logs 9

//this should return (2+5)*2 = 14
console.log(f4(2))

//logs 14