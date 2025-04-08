// SCOPE LEVEL AND MINI HOISTING

// nested scope and closure

if(true){
    let a = 10;
    var b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);

}

function one(){
    const username = "naveen";
    function two(){
        // two can have access to variables of one
        const site = "youtube";
        function three(){
            // three can have access to variables of two and one
            console.log(username);
            console.log(site);
        }
        
    }
    // console.log(site); // this will throw an error
    two();  // this is called function invocation this will execute the function
    // there is another call stack of functions here we are calling that function
}
// get familiar with errors for being a better developer


if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const site = "youtube";
        if(site === "youtube"){
            console.log(username + site)
            console.log(`${username} is on ${site}`);
        }
    }
        // console.log(site); // this will throw an error
}
// console.log(username); // this will throw an error

// ***=************************ Interesting *********************************

function addOne(num){
    return num + 1
}

addOne(5) // this will call the function and return 6

const addTwo = function(num){ // 2nd way of declaring a function

    return num + 2
}

addTwo(5)
// functions are pretty poweful in jS they can hold anything JSON, Arrays, Objects, etc.

// hoisting


