// Stack and Heap Memory in JS
// Memory Management and Thread management in JS

// initially in C C++ we need to use malloc and free to allocate and deallocate memory
// in JS we need to use new and delete as it contains garbage collector.

//hhtps://www.javascripttutorial.net/javascript-memory-management
//https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack Memory is used to store local variables and arguments (Primitive data types)
// Heap Memory is used to store objects and arrays (Non-primitive data types)

// call funtions and variables are stored in the stack memory
let myYoutubeName = "naveenstataics"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName); // naveenstataics
console.log(anotherName); // chaiaurcode

let user = {
    email: "7M9Y8@example.com",
    upi: "user@ybl"
}

// Functions are called in the stack memory and the values are stored in heap and are given to stack in form of reference. so we dont change the value of the variable but the reference is changed. similar to Java
