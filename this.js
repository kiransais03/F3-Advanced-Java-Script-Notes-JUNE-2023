// THIS keyword

// Implicit Binding is applied when
// you invoke a function in an object using (.)
// notation.

// this.a = 5;

// console.log(a);

// this.a = 5;

// this keyword inside normal
// function will point towards object 
// which is enclosing my normal function

// function getInfo(){
//     console.log(this.a);
// }

// getInfo();
// this keyword inside arrow function will
// look for normal function which is enclosing
// my arrow function.

    // const getInfo = () => {
    //   console.log(this.a);
    // };

// const getInfo = () => {
//     console.log(this.a);
// };


// getInfo();

// let user = {
//     name: "Prikshit",
//     age: 24,
//     getDetails(){
//         console.log(this);
//     }
// }

// user.getDetails();

// let user={
//     name: 'Prikshit',
//     age: 24,
//     childObj: {
//         newName: 'Parvez',
//         getDetails(){
//             console.log(this.newName, " and ",this.name);
//         }
//     }
// }

// user.childObj.getDetails();

// let user = {
//     nam: 'Prikshit',
//     age: 24,
//     getDetails: () =>{
//         console.log(this.nam);
//     }
// }


// let user = {
//     name : 'Prikshit',
//     age: 24,
//     getDetails: ()=>{
//         const nestedArrow = () => console.log(this.age);
//         nestedArrow();
//     }
// }

// user.getDetails();

// const user = {
//     firstName: 'Prikshit',
//     getName(){
//         const firstName='PC';
//         return this.firstName;
//     }
// }

// console.log(user.getName());

// const user = {
//     name: 'pc',
//     logMessage(){
//         console.log(this);
//     }
// }

// user.logMessage(); // this will point towards obj only
// // if it's method of that object;
// setTimeout(user.logMessage,4000); // this is callBack
// // taking defi of logMessage function
// // and calling after 1 sec.


// const user = {
//     name: 'PC',
//     greet(){
//         return `Hello ${this.name}!`;
//     },
//     farewell:()=>{
//         return `Good bye ${this.name}!`;
//     }
// }

// console.log(user.greet());
// console.log(user.farewell());