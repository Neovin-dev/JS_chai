function add(x,y){
    console.log(x+y); 
}

add(2,4)
add(3,4) // calls the above function

// when we have a large codebase then we might not know the parameters of th function
// so we use typescript so that we can know the parameters of the function

function createUser(user){
    console.log(user);
}
// as we cannot always go and read the code to know the parameters of the function and keep debugging
// JS is a loose typed language
// TypeScript is a strict typed language which introduces types to JS
// 99 percent it is a superset of JS


