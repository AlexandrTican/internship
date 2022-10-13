// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49   - PHONE CODES GO IN ASCENDING ORDER
//   }


//for ordering strings like a phone number, we may use + 
// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA"
// };

// for (let code in codes) {
//   console.log( +code ); // 49, 41, 44, 1
// }

// let user =  {
//   name :"Max",
//   age : 20,
//   //method examples
//   sayHi : function() {
//     console.log("Hi bitch");
//   } ,
//   //this 
//   showData() {
//     let arrow = () => console.log(this.name + " Age :" +this.age);
//     arrow();
// },
// }
 
// user.sayHi();
// user.showData();

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya