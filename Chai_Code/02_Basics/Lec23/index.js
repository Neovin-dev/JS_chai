// SCOPE
/*
scope is a very vast topic and lays foundation for important topics like hoisting and closure
*/

// global and local scope
// this story of scope starts with let const and var

let a = 10;
var b = 20;
const c = 30;
// c = 40; // this will throw an error as c is a constant

console.log(a);
console.log(b);
console.log(c);

// block scope is where the problem starts 
var x = 6000
var b = 5000
if (true) {
    let x = 100;
    b = 200;
    const d = 300;
    console.log(x);
    console.log(b);
    
    // these variables have local scope and are not accessible outside the block
}
// console.log(d); // this will throw an error as d is not accessible outside the block
console.log(x);
console.log(b); // this will print 200 as b is accessible outside the block as we used var. thats why we dont use var

// for loop scope
let array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
// console.log(i); // this will throw an error as i is not accessible outside the block

// global scope in node (Ide) and browser (chrome)
// in node we have global scope
// in browser we have window scope