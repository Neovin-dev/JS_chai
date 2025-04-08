// Arrays

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 0 based indexing

// console.log(myArr[0]);

// Array has shallow copy and deep copy in JS basically it is a reference type refer to mdn link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myHeroes = ["thor", "ironman", "spiderman"];
// when we open this above line in browser we will get the reference of the array in the memory. and Prototype Arrays ans within that we will find another Prototype: Object. (this will be refered to in future)

// Array methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

myArr.push(6);
myArr.push(7);
myArr.pop();

console.log(`This is the originail numbers array ${myArr}`);
// console.log(myArr);

myArr.unshift(0); // unshift is used to add an item to the beginning of the array
myArr.shift(); // shift is used to remove an item from the beginning of the array

// console.log(myArr.includes(4)); 
// includes is used to check if an item is in the array

// console.log(myArr.indexOf(3));
// indexOf is used to find the index of an item in the array

const newArr = myArr.join(); // join is used to convert the array into a string
// console.log(newArr);

// splice and slice 

console.log(`This will print the string A and then the Array`)
console.log("A", myArr); // what this does is it will print the original array

const myn1 = myArr.slice(1,3); // slice is used to create a new array from an existing array
console.log(myn1);
console.log(`This will print the string B and then the Array`)
console.log("B", myArr);

const myn2 = myArr.splice(1,3); // splice is used to remove an item from an existing array

console.log("C", myArr);
console.log(myn2);

// difference between splice and slice
// splice is used to remove an item from an existing array
// slice is used to create a new array from an existing array