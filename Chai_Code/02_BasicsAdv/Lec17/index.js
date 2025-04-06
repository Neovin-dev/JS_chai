// Objects

// there are 2 ways to declare an object one is object literal and other is object constructor
// there is also an important concept of singleton in Objects. 
// when we create using object constructor then it is a singleton.**
// when we create using object literal then it is not a singleton.

const mySym = Symbol("key1");

const jsUser = {
    0: "naveen", // this is a key and value pair. it can be anything from number to string to boolean
    name: "Naveen",
    "full name": "Naveen Kumar",
    // mySym: "mykey1", // this is not used as symbol its type is string rather than symbol
    [mySym]: "mykey2", // now this is symbol
    age: 22,
    location: "Delhi",
    email: "7M9Y8@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"],
}

// to access objects
// console.log(jsUser.email); // this not the best way to access object
// we wont be able to access "full name" using the above dot method.

// console.log(jsUser["email"]); // this is the best way to access object
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// freeze
jsUser.email = "naveenstataics.com"
// Object.freeze(jsUser) // this will make the object immutable
jsUser.email = "naveenstataics.com" // this will not work as we have frozen the object

console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello JS User, ${this.name}`); // greeting is a method
}

console.log(jsUser.greeting()); // this was giving error due to freeze
// we can use this method only when the object is not frozen

console.log(jsUser.greeting); // here function is not getting called but it is getting printed.
// [Function(anonymous)]
