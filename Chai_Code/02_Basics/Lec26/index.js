// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// we dont want global pollution
// and we want immediate execution

function chai(){
    console.log(`DB CONNECTED`);
}
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // this is IIFE and another use case of paranthesis ()

// another way with arrow function

(function aurcode(){
    console.log(`DB CONNECTED`);
})();

((name) => {

    console.log(`DB CONNECTED ${name}`);
})('naveen'); // this will give error if we dont put ; as it donesnt know where to end so IIFE Is invoked but it doesnt know where the context ends

// write multiple IIFI and so people make the mistake of not keeping the ; for context.


