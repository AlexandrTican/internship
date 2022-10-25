
const personTwo = {
    name: 'Sally',
    age: 30,
    favoriteFood : 'Rice',
    address : {
        city: "Somewhere else",
        state: "Another one of them"
    }
}
// destructuring an object,based on the key name 
// name:firstName means that u just declare a new name for that, 
// instead of using key

const {name: firstName ='John', age, favoriteFood ='Rice',...others} = personTwo
console.log(firstName,age,favoriteFood);
console.log(others);
const personOne = {
    name: {firstName: "John", lastName : 'Smith'},
    age: 24,
}
// nested obj
const {name:{firstName:preferredName},age:age2} = personOne;
console.log(preferredName,age2);

// updating existing identifier after we destructed it
let {name:{firstName:preferredName1},age:age3} = personOne;
// we set a new value in the object
personOne.name.firstName = "Willy";
console.log(preferredName1);
// to update identifier after we destructured it : use ( ) 
({ name:{firstName:preferredName1}} = personOne);
console.log(personOne.name.firstName);

console.log(preferredName1)