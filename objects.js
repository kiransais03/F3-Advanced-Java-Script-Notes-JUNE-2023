// Object is  a collection of properties.
// & a property is an association between key and a value.
// & a property value can also be function, in this 
// case the property is known as method.

// let obj = {
//     a:3,
//     b:4,
//     hello(){
//         console.log('test');
//     }
// }

// const user = {
//     name: 'PC',
//     age: 23,
// }
// /// syntax to delete any property of object
// // const age= user.age;
// delete user.age;
// console.log(age);
// console.log(user);

// const func = (function (a){
//     delete a;
//     return a;
// })(10);

// console.log(func);


// /// IIFE
// (function a(){
//     console.log('test');
// })();

/// keys with spaces
// const user = {
//   name: "pc",
//   age: 23,
//   "work at walmart": true,
// };

// console.log(user['age']);
// to access anything property in object use (.) where ever
// possible
// use ['key'] key inside string inside square braces
// to access property 

// const key = "firstName";

// const value = 'PC';

// const user = {
//   [key]: value,
// };

// console.log(user);

// // / looping over object
// const user = {
//     name: 'PC',
//     age: 23,
//     isWorking: true,
// }


// // we cannot use (.) here
// for(key in user){
//     console.log(key); // this key is string
//     console.log(user[key]);
// }


// key repetition case
// const obj = {
//     a: 'one',
//     b: 'one',
//     c: 'one',
//     a: 'seven',
// }

// console.log(obj);


// create a function multiplyByTwo

// let num = {
//     a:100,
//     b:200,
//     title: 'My Nums',
// }
// // // console.log(num);

// function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key]==='number'){
//             // console.log(obj[key]); // I am access value of 'a' key
//             obj[key]=obj[key]*2;
//         }
//     }
// }
// multiplyByTwo(num);

// console.log(num);


//  JSON.stringfy & JSON.parse


/// OBJECT -> JSON.stringfy -> STRING form of that object
/// STRING form of that object -> JSON.parse -> OBJECT
// const user = {
//     name: 'PC',
//     age: 23,
// }

// const strObj = JSON.stringify(user);

// localStorage.setItem('test',strObj);

// const object = JSON.parse(localStorage.getItem('test'));

// console.log(object);

// //// spread operator
// const obj1 = {
//     name: 'PC',
//     age: 23,
// }

// const obj2 = {
//     ...obj1,
//     anyOtherProperty:'xfgxghchg',
// }

// console.log(obj2);

// /// destructuring

// let user = {
//     name: "PC",
//     age: 23,
//     isWorking: true,
//     city: 'Bengaluru',
// }
// // let name=user.name;
// // let age=user.age;
// // let isWorking=user.isWorking;
// // let city = user.city;
// const { name, age, isWorking } = user;

// console.log(age,isWorking);

// let c = {
//     greeting : 'hey!',
// }

// let d = c;

// c.greeting = 'Namaste!';

// console.log(d.greeting);

// // let person = {
// //     name: 'PC'
// // }
// // const members = [person,{name:'xyz'},{name:'you'}];

// // person = null;

// let person = {
//     name: "sandeep"
// }
// let member = [person];
// person = null;
// console.log(member);
// console.log(members);

// let car = {
//     name : "audi",
//     version : 3.0,
//     noOfSeats : 4,
//     fuelType : "petrol"
// }
// car.name='BMW';
// console.log(car);
// let racing = {
//     name : "audi",
//     version : 3.0,
//     noOfSeats : 4,
//     fuelType : "petrol"
// }

// console.log(racing);

/// the topics left in today's class
// shall & deep copy
// call bind and apply
// shallow means refrence copy and
//  deep copy means like make new things in memory
// cover that key value swapping question

