//objects declared wtih { } , hold a property ...
//keys are string,values can be anything;

const user = {
    age : 23,
    name : `Mike`,
    employed: true,
    
    //can add multiword keys ( property names)
    "overtime hours" : 20
};
// can be printed like user.age ( object.key)
console.log(`Employee ${user.name} is ${user.age} years old 
and is employed :${user.employed}`);

//can also be declared : new Object() , and empty

let wallet = new Object();
let wallet_2 = {};

//delete wont work, but we can set it to null

user.age = 
//can add properties(?)

