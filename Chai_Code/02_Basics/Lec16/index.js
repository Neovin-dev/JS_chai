const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// const x = marvel_heroes; // shallow copy
const x = JSON.parse(JSON.stringify(marvel_heroes));// deepcopy

x.push(dc_heroes); // push is used to add an item to the array. add array as an item
console.log(x);

const all = marvel_heroes.concat(dc_heroes); // 
console.log(all);

// spread** operator is used to add items of an array into another array
const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // we use this instead of concat to add two arrays
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11,12,[13,14]]]];
console.log(another_array);
const real_another_array =  another_array.flat(4); // flat is used to flatten an array. parameter is the level of flattening/depth
console.log(real_another_array);


// in cases of Scraping and is often used

Array.isArray(marvel_heroes); // used to check if an item is an array
console.log(Array.isArray(marvel_heroes)); // true

console.log(Array.from('Hitesh')); // used to convert a string into an array
/*

there are other ways to convert a string into an array like

*/ 
console.log(Array.from({name: "Hitesh"})); // Interesting case. used to convert an object into an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

