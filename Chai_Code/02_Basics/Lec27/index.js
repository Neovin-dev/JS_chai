// Excecution context and Call Stack

// REVIST THIS********

// Javascript Execution Context 
// video no 25

// {} Global execution context and this is window object and is the default execution context.
// this is executed on a thread 
// JS is single threaded

// function execution context

// Eval execution context // no need to do in detail

// phase 1: creation phase or memory creation phase
// phase 2: code execution phase


// Step 1 is Global Execution Context
// Step 2 memory creation phase
// Step 3 code execution phase
// for eg

let a = 10;
let b = 20;

function addNum(num1,num2){
    let total = num1 + num2;
    return total
}

let result = addNum(a,b);
let result2 = addNum(10,20);

// Global executio -> this
/* Memory Phase 
a -> undefined
b -> undefined
addNum -> defination
result -> undefined
result2 -> undefined
*/

/* Execution Phase
a -> 10
b -> 20
addNum -> Make its own execution context and memory
this will make a new variable environment and an execution thread. here we will first do memory phase
/ Memory Phase
a -> undefined
b -> undefined
total -> undefined
/

/ Execution Phase
a -> 10
b -> 20
total -> 30 // return in global execution context
/


result -> 30
result2 -> 30
*/


// CALL STACK

// EXPLORE BROWSWER INSPECT