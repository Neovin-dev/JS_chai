let fruits = ["apple", "cherry", "banana"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");

console.log(fruits);
console.log(intFruits);

// typeof is used to check the data type
console.log(typeof fruits);
console.log(typeof intFruits);

// array methods and properties
// fruits[0] is used to access the array
console.log(fruits[0]);
// fruits.length is used to get the length of the array
console.log(fruits.length);

fruits[0] = "blueberry";
// fruits[0] = "blueberry" is used to change the value of the array
console.log(fruits[0]);

//.push is used to add an item to the array
fruits.push("new item");
console.log(fruits);

// .unshift is used to add an item to the beginning of the array
fruits.unshift("new item");
console.log(fruits);

fruits.pop();
console.log(fruits);
