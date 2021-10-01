

import { merge } from './functions.js'
import { firstObject, secondObject, simpleObject } from './data.js'


// Test
// console.log({...firstObject, ...secondObject})

// console.log(simpleObject.hello)
// console.log(typeof simpleObject.hello.text === 'object')

// Run
let obj3 = merge(firstObject, secondObject)
console.log(obj3)