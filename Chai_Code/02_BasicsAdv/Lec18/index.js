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

