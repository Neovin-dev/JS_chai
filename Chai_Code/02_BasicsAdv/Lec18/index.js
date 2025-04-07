const tinderUser = new Object(); // this is a object literal
const user2 = {}; // this is also a object literal but this is a object constructor THEREFORE THIS IS NOT A SINGLETON
console.log(tinderUser);
console.log(user2);

user2.id = "12345@abc";
user2.name = "Naveen";
user2.isLoggedIn = false;

const regularUser ={
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Naveen",
            lastName: "Kumar",
            rank: {
                rank1: "Officer",
                rank2: "Captain"    
            }
        }
    }
}

console.log(regularUser.fullName.userFullName.rank.rank2);
console.log(regularUser.fullName?.userFullName.rank.rank1);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = { obj1, obj2 }; // this is called object destructuring which means we can directly access obj1 and obj2

// const obj3 = Object.assign{{},obj1, obj2}; // this is also called object destructuring but we can't directly access obj1 and obj2

const obj3 = {...obj1, ...obj2}; // this is also called object destructuring but we can directly access obj1 and obj2

console.log(obj3);

const users = {{

},{

}

}

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn")); // this will return true or false

