let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];

// teas[h] to access an element in the array.

teas.length; // 6

// let h = 2; // h <= 5 || h < 6

// loop - iteration
// (variable leke aao, limit btao, incre/decre => h = h + 1)

for (let h = 0; h < teas.length; h++) {
  console.log(`tea at index ${h}: ${teas[h]}`);
}
// ${} is called template literal. ${} is used to insert a variable inside a string
// interpolation is done using ${}


// enhanced for loop

for (let tea of teas) {
  //what this code basically does is iterating over the array using the for of loop
  console.log(tea);
}
// what this code basically does is
// for (let h = 0; h < teas.length; h++) {
//   console.log(teas[h]);
// }  

