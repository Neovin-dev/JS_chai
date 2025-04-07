// let x = 30;

// let y: number | boolean = 40;

// let fname: string | null = null; // union type | (pipe or or operator). there are two or this or and logical or

// // x = 'Piyush' // this will give an error as x is of type number
// // y = 'Piyush' // this will give an error as x is of type number
// // y = true;

// // this will give an error as x is of type number. here the enforcement of types have started 

// console.log(x);
// console.log(y);

// // essential this is typescript. it is Javascript with types. 
// // now add it to resume 

// // function add(x,y){ // this is a function
// //     x. // this will not suggest anything as vsCODE DONEST KNOW WHAT TYPE IT IS  so it doesnt gove suggestions
// // }

// function add(x: number, y: number) { // this is a function
//     return `${x} + ${y} = ${x + y}` // this is a string
// }   

// // let j = add(2, 3);
// // j = add(2, '3'); // this will give an error as it is of type number
// // j*300
// // j.toFixed(2) // this will give an error as it is of type string

// // typescript ide will guide you what to pass and it generate automatic documentation. 


// // there are two types of errors in typescript Build time errors and Run time errors. 
// function createUser(user: { firstname: string; lastname?: string; }) { //firstname is required and lastname is optional.
//     if(user.lastname) {
//         const trimedLastName = user.lastname.trim();

//     } // or const trimedLastName = user.lastname?.trim();
//     user.firstname
//     user.lastname
// }

// createUser({
//     firstname: 'Piyush',
// })

// // typescript is art of defining types

// // Interfaces
// /*
//  they are used to define the structure of an object
// */

// interface User {
//     name: string;
//     lastname?: string;
//     email: string;
//     profileImageURL?: string;
// }

// function createUser2(user: User) {
//     user.name
//     user.email
//     user.lastname
//     user.profileImageURL
// }

// const payload: User = {
//     name: 'Piyush',
//     email: '7M9Y8@example.com'
// }

// updateUser(payload);

// // first you like TS and then you hate it

// // we cannot run TS directly in the browser
// // then we need to complile it to JS


// Variable Declarations
let x = 30; // Inferred as number

let y: number | boolean = 40; // Union type: number or boolean

let fname: string | null = null; // Union type: string or null

// x = 'Piyush'; // ❌ Error: x is a number
// y = 'Piyush'; // ❌ Error: y can only be number or boolean
y = true; // ✅ Valid assignment

console.log(x);
console.log(y);

// Function with Type Annotations
function add(x: number, y: number): string {
    return `${x} + ${y} = ${x + y}`;
}

let result = add(5, 10); // ✅
console.log(result);
// result = add(5, '10'); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Function with Optional Property
function createUser(user: { firstname: string; lastname?: string }) {
    if (user.lastname) {
        const trimmedLastName = user.lastname.trim();
        console.log(trimmedLastName);
    }
}

// Using optional chaining as an alternative
// const trimmedLastName = user.lastname?.trim();

createUser({ firstname: 'Piyush' });

// Interface
interface User {
    name: string;
    lastname?: string;
    email: string;
    profileImageURL?: string;
}

function createUser2(user: User) {
    console.log(user.name, user.email, user.lastname, user.profileImageURL);
}

const payload: User = {
    name: 'Piyush',
    email: '7M9Y8@example.com'
};

// Assuming this is a defined function
function updateUser(user: User) {
    console.log('User updated:', user);
}

updateUser(payload);

// CICD -> TypeScript -> TS Compiled to JS -> JS server there are new file is made and that file is now type checked
// 

// each software engineer has a different preference and their way to structure their code. and there are different ways to structure the code.