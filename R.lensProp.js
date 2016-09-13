const R = require('ramda')

/*
Returns a lens with a focus on the property passed in as an argument. In the example below, the focus is on a property
called data. Can be used with R.set, R.view and R.over
 */
let exampleLens = R.lensProp('data')

//returns the value of the property focused by the lens
console.log(R.view(exampleLens, {doto: "hello", data: "world", diti: "again"}))
//returns the amended object with the value of the property focused by the lens changed to the value in the second argument of R.set
console.log(R.set(exampleLens, "world", {data: "hello"}))
//returns the amended object with the result of the applied function (in the second argument) on the value of the property focused by the lens
console.log(R.over(exampleLens, R.head, {data: "world"}))

//logs "world" -> the value of the property data
//log {data: "world"}
//log {data: "w"} -> R.head returns the first character of a string




