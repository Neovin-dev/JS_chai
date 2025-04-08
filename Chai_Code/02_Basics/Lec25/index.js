// Arrow Funtion which came with ES6 and THIS Keyword

const user = {
    username: "hitesh",
    prices: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`); // this will point to user object
        console.log(this) // this will point to user object
        // we use this when we need to refer to the current context. 
    }
}

// we cannot use this in arrow function as it does not have its own this keyword

// user.welcomeMessage()

// user.username = "Raghu" // value is updated here context is changed which simply means change in values
// user.welcomeMessage()

console.log(this); // this will point to window object in browser and {} - empty object in node. 

// function chai(){
//     console.log(this); // this will print too many values/things why ? 
// }
// chai(); // calling it 

// const chai = function(){
//     let username = "hitesh";
//     console.log(this.username);
// }


// arrow functions (another method to do things in es6)

const chai = () => {
    let username = "hitesh";
    console.log(this.username);
}

// chai()

// syntax of arrow function const () => {}

// const addTwo = (num1, num2) =>{
//     return num1 + num2; // explicit return
// }
// there is another way of implicit return

const addTwo = (num1, num2) => num1 + num2;
// another way is 

const mulTwo = (num1, num2) => (num1 * num2);
const strin = () => ({username: "hitesh"}); // this will return an object with username "hitesh";

console.log(addTwo(3, 4));

MimeTypeArray.forEach(element => {
    
    console.log(element);
    
});

