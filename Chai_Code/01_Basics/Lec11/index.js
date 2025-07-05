// Strings In JS
// can be written in single or double quotes or backticks. Backticks are preferred

const name = "naveen";

const sentence = "my name is " + name;
// what is the meaning if decrpyted which name is here ? naveen
const sentence2 = `my name is ${name} and i am a coder`; // this is called template literals and here comes concept of string interpolation. 

console.log(sentence2);1

// Learn about prototype and prototype chain and inheritance

const gameName = new String("naveen"); // this is a string object and not a string primitive

console.log(gameName[0]);
console.log(gameName.__proto__); // this is the prototype whic means it is an object

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));
// read about method of string and property of string so you know abou them.

const newString = gameName.toUpperCase();
const newString2 = gameName.toLowerCase();
const newString3 = gameName.slice(0,4); // 0 is included and 4 is not included
const newString4 = gameName.split("e"); // this will return an array. its parameter are // the character on which you want to split the string.
const newString5 = gameName.substring(1,3); // 1 is included and 3 is not included
const newString6 = gameName.replace("naveen", "Naveen");
const url = "https://naveen.com/naveen.com";
console.log(url.replace("naveen.com", "chaiaurcode.com"));

const newString7 = gameName.trim(); // this will remove the spaces from the beginning and end of the string.

console.log(newString);
console.log(newString2);    
console.log(newString3);
console.log(newString4);
console.log(newString5);
console.log(newString6);
console.log(newString7);    

