// var obj = {
//     x: 40,
//     y: 60,
//     z: 75
// }
// console.log('x' in obj)
// console.log('p' in obj)

// for(var i in obj){
//     console.log(i)
//     console.log(i + ': ' + obj[i])
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log(Object.entries(obj))



// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };

// let user = {
//     name: "John",
//     age: 30,
//   }  (That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around 
//  properties, because all lines become alike.)

// ( Square breackets)

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = ("What do you want to know about the user?", "name");
  
//    access by variable
// console.log(user[key])

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   console.log(user.key)

// (Compound Properties)

// let fruit =("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag)


// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
  
//   let user = makeUser("John", 30);
//   console.log(user.name)

// (Propartie Name Limitation)

// these properties are all right
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
//   console.log(obj.for + obj.let + obj.return)

// let obj = {};
// obj.__proto__ = 5; // assign a number
// console.log(obj)

// (Odered Like an Object)

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
//   };
  
//   for (let code in codes) {
//    console.log(+code)
//   }

// (for in Loop)

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     console.log( key );  // name, age, isAdmin
//     // values for the keys
//    console.log(user[key])
//   }

