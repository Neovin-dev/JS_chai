"use strict" // treat all the JS in the newer version as newer version
// "use strict" is a global directive

// JS engine is in the browser these alert can run in the browswer but not in node
// what is the difference between node and browser ? node is a server and browser is a client

/*
alert(3 + 3);
alert("3" + 3);
*/

console.log(3 + 3); // addition
console.log("3" + 3); // concatenation
console.log(3 + "3"); // concatenation
console.log(3 - "3"); // NaN
console.log("3" - 3); // 0

/*
 Documentation to refer are: 
 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript
 2. ECMA Script
 3. JavaScript info
 */

 // JavaScript has very limited data types 
 // 1. number
 let age = 23;
 // 2. string
 let name = "Naveen"; // can be "" or '' or ``
 // 3. boolean
 let isLoggedin = true;
 // 4. null
 let myVar = null;
 // 5. undefined
 let myVar1; // value is not assigned but the variable is declared
// 6. symbol (mostly used in React to make the component "unique" in the whole application)

// 7. object

// typeof is used to check the data type
console.log(typeof age);
console.log(typeof name);
console.log(typeof isLoggedin);
console.log(typeof myVar);
console.log(typeof myVar1);
console/log(typeof null) // object
console.log(typeof undefined); // undefined


// learn about specifications of all the data types.
