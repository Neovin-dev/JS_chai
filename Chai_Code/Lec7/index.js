// WHY STRING TO NUMBER CONVERSION IS CONFUSING

// ************************* Operations *****************************

let val = 3;
let negValue = -val;
console.log(negValue); // -3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%3)
console.log(2**3)

let str1 = " hello"
let str2 = " world"

let str3 = str1 + str2
console.log(str3)


// refer to ECMA Script 7.1.1 ToPrimitive

console.log("1" + 2 + 2) // 122

console.log(1 + 2 + "2") // 32

console.log(+true) // 1
console.log(true) // 1
console.log(+false) // 0

console.log(+"") // 0 as empty string is falsey value

let num1, num2, num3; // Not used offten as it is not a good practice

let gameCounter = 100;
gameCounter++;
// read about increment operator
// read about prefix and postfix operator on MDN
console.log(gameCounter);


