
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() reference or execution of the function
// difference between sayMyName and sayMyName() is that sayMyName is a function and sayMyName() is a function call

// function addTwoNumbers(number1, number2){ // number1 and number2 are parameters or arguments

//     console.log(number1 + number2);
// } 
// we dont need to specify types but it is a good practice to specify types by using typescript

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
// addTwoNumbers(3, 5) // this will give 8
// addTwoNumbers(3, "5") // this will give 35
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); // this will return 8 as we return it otherwise if we did console.log(addTwoNumbers(3, 5)) it will return undefined

// different ways to invoke a function or input arguments to a function

function loginUserMessage(username = "sam"){ 
    if(!username){ // if username is falsy or undefined if(username == undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
