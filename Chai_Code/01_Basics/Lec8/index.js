// COMPARISON OF DATA TYPES in JS

// string to string comparison
// number to number comparison
// string to number comparison
// number to string comparison
// strict comparison

// These are very predictable comparison
// console.log(2 == 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2 != 1); // true
// console.log(2 > 1); // true

console.log("2" > 1); 
// // true because 2 is string and 1 is number but 2 is greater
console.log("02" > 1); 
// false because 02 is string and 1 is number


// we try to avoid this kind of comparison (Null and Undefined)
// NULL
// here is a problem of value comparison
console.log("null")
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true because 
/*
The reason is that an equalty operator == and comparison operator > < >= <= 
works differently.
comparisons convert null to a number, treating it as 0
Thats why null >= 0 is true and null > 0 is false
and equality operator does not convert null to a number so null == 0 is false
*/

// undefined
console.log("undefined")
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

console.log(undefined < 0); // false
console.log(undefined <= 0); // false

// strict comparison (===)

console.log(2 == "2"); // true 
// true because data type is same as 2 is number and "2" is string but "2"
console.log(2 === "2"); // false because data type is different 2 is number and "2" is string

console.log(2 != "2"); // false
console.log(2 !== "2"); // true 

console.log(2 > "2"); // false
console.log(2 < "2"); // false

console.log(2 >= "2"); // true
console.log(2 <= "2"); // true