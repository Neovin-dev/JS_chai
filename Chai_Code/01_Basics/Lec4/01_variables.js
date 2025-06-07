// Video from 1 to 3 are just to get you started and setting up the environment

// actual lecture starts from video 4
// Variables in JS

// LET, CONST, VAR KI KAHANI


// what is the motive of learning JS ?  to Build Web Apps. have the right mindset
// do investigative learning 

// console is used for printing the output
console.log("Hello World");

// camelcasing is good
// 1. const - used for constants, values that do not change
const accountId = 12345;
// const
// 2. let - used for variables that can change, block scoped
let accountEmail = "7M9Y8@example.com";
// let is better than var as it is block scoped

// 3. var - used for variables that can change, function scoped, not recommended in modern JS
var accountPassword = "123456";
// var creates problem due to hoisting so it can be seen in old JS code but we prefer not to use it now. 

// 4. JS can also create variables without using any keyword, but it is not recommended 
accountCity = "Delhi";
// we can reserve memory in js without using any keyword like the variable accountCity

let accountState; // undefined is the default value
// it is initialized but not declared in the memory

accountEmail = "7M9Y8@exafdfdgsdgasdfmple.com";
accountCity = "Pune";

console.log(accountId);
// JS initially doesnt used to work on scope of the variable. that can be seen in var
// so we mostly use let and const
/*
*/

// used to print the variables in a tabular format and multiple variables can be printed in a single table 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
    prefer not to use var because of issue in block scope and function scope
    use let and const instead
*/

/*

EXPLORE THESE

history of JS
extention of JS
why is JS scripting
how does JS work
browser vs server
more about JS
var create a problem in hoisting
how js declare variables in GLobal variable context
nodejs denojs vs vanilla js

*/