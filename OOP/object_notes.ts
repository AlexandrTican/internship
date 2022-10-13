// //objects declared wtih { } , hold a property ...
// //keys are string,values can be anything;

// let user = {
//     age : 23,
//     name : `Mike`,
//     employed: true,
    
//     //can add multiword keys ( property names)
//     "overtime hours" : 20
// };
// // can be printed like user.age ( object.key)
// console.log(`Employee ${user.name} is ${user.age} years old 
// and is employed :${user.employed}`);

// //can also be declared : new Object() , and empty

//can use existing variables ...

let name_1 = 'Max'
let age : number = 20;

let info = { 
    name_1,
    age,    
}

// // in operator : for finding a specific key in an object

// if("name_2" in info){
//     console.log(true);
// } else console.log(false);

//also can be used as for ..in
for(let key in info) { 
    console.log(key);
}

