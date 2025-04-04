// Datatype_Coversion_Confusion

// focus on fundamentals very very much and go over them and have an incredible understanding of them
// dry run things on your own

let score = 33

console.log(typeof score); // number
// what is the differene between number and Number ? Number is a constructor function

console.log(typeof(score)); // number
console.log(typeof (score + " ")); // string

score = " 33 "; // string
// variable can be reassigned as well of different data type

console.log(typeof score); // string

let valNumber = Number(score);

console.log(typeof valNumber); // number

score = "33abc";
console.log(valNumber); // 33

valNumber = Number(score);
console.log(typeof valNumber); // number. it got converted techinally by JS but under the hood it is NaN.
// which means not a number. this is a problem of JS. so people use parseFloat and parseInt or TypeScript
console.log(valNumber) // NaN

score = true;

valNumber = Number(score);

console.log(typeof valNumber); // number
console.log(valNumber); // 1

// now it was basic conversion 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true

isLoggedIn = ""

booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // false

isLoggedIn = "Naveen"

booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true because it is a truthy value that means it is true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
