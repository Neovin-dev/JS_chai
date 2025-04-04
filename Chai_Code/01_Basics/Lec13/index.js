 // Math and Number in JavaScript
 
const score = 400
console.log(score)
 
const balance = new Number(100) // this is a protoyped object
console.log(balance)

console.log(balance.toString().length) // this is a method
console.log(balance.toFixed(2)) // toFixed is used to fix the number of decimal places. explained in detail: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

const otherNumber = 123.456
console.log(otherNumber.toPrecision(3)) // toPrecision is used to fix the number of digits. explained in detail: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // toLocaleString is used to format the number. output: 1,00,00,000

Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324

// **************************** MATHS *********************************
console.log(Math) // this is a global object
console.log(Math.abs(-4)) // absolute value
console.log(Math.PI)
console.log(Math.E)
// many values are defined in Math object. refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.ceil(4.3)) // 5 because it rounds the number to the nearest highest integer
console.log(Math.floor(4.9)) // 4 because it rounds the number to the nearest lowest integer
console.log(Math.round(4.3)) // 4 because it rounds the number
console.log(Math.trunc(4.3)) // 4 because it removes the decimal places

/*
THis library is mostly used in Math.random() to generate random numbers

*/

console.log(Math.random()) // generates a random number between 0 and 1
console.log(Math.random() * 100) // generates a random number between 0 and 100
console.log(Math.random() * 100 + 1) // generates a random number between 1 and 100

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))  