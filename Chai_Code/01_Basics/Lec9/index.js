// Data Types Refresher from the prespective of Interview

// Primitive DATA types

/* 7 Types
1. string (" ", ` `, ' ')
2. number (1, 2, 3, 4, 5, 6, 7, 8, 9)
3. boolean (true, false)
4. null
5. undefined 
6. symbol (to make values unique)
7. bigint (very large number)

*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // undefined

const id = Symbol("123"); // symbol is unique 
const anotherId = Symbol("123");

console.log(id === anotherId) // false as symbol is unique

const bigNumber = 5959595654654321654654653165 // bigint

/* Non-primitive DATA types or reference DATA types
1. array
2. object
3. function

Comment: Master Objects and Browser events to master JS
*/

const heros = ["thor", "spiderman", "ironman"];
{
    // @decrepted
    name = "Naveen";
    age = 23;
    // this is a block scope and object
}

let myObj = {
    name: "Naveen",
    age: 23

}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof myObj)
console.log(typeof myFunction)



// JavaScript is dynamically typed which means the data type of the variable is determined at run time.
