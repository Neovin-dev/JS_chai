// FUnctions with objects and arrays in JS


function calculateCartPrice(val1, val2, ...num1){
    // spread operator or rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // we can pass any number of arguments

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // anyobject = user as 
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "raghu",
    price: 485
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));