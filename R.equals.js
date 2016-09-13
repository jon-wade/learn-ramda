const R = require('ramda')


//checks whether the two parameters are equivalent (value and type) and returns boolean
console.log(R.equals('hello', 'hello'))
console.log(R.equals(2, 3))
console.log(R.equals(1, '1'))
console.log(R.equals([1, 2, 3], [1, 2, 3]))

//logs true
//logs false
//logs false
//logs true

