// // /// Call bind & Apply are 3 important
// // // methods available to all JS function
// // // which are used to set THIS keyword
// // // inside functions. independent of how the
// // // function is called.


// // // let obj = {
// // //     nam: 'PC',
// // // };

// // // function sayHello(age, company){
// // //     // return "Hello " + this.nam + " is " + age + " " + company;
// // //     return this;
// // // }

// // // // console.log(sayHello());
// // // console.log(obj);
// // // console.log(sayHello.call(obj,23, 'walmart'));
// // // console.log(obj);
// // // a
// // // console.log(sayHello.call(obj,23,'walmart'));
// // // call is a method for a function (object,......);
// // // let obj = {
// // //     name: 'PC',
// // //     sayHello(age, company){
// // //         return "Hello " + this.name + " is " + age + " " + company;
// // //     }
// // // };

// // // console.log(obj.sayHello(23,'walmart'));



// // // /// call -> obj, arguments

// // // Apply
// // let obj = {
// //     name: 'PC',
// // };

// // function sayHello(age, company){
// //     return "Hello " + this.name + " is " + age + " " + company;
// // }
// // // args=[]
// // console.log(sayHello.apply(obj,[23, 'walmart']));
// // console.log(sayHello(23,'walmart'));

// // /Bind

// let obj = {
//     name: 'PC',
//     // sayHello(age, company){
//     //     return 'Hello '+ this.name + ' is ' + age + ' ' +company;
//     // }
// };

// function sayHello(age, company){
//     return 'Hello '+ this.name + ' is ' + age + ' ' +company;
// }

// const hell=sayHello.bind(obj,42);  // obj,...args
// // this will give me a function with sayHello defi.

// console.log(hell(34,'walmart')); // ...newArgs
// const hello=sayHello.bind(obj); 
// console.log(hello(224,'walmart')); 
// // call and apply they both are same
// // call vs bind
// // my call method will invoke that function with obj context
// // my bind mthod will give me function with obj context

// args -> [42]
// newArgs -> [34,'walmart']

// function sayHello(age, company){
//     return 'Hello '+ this.name + ' is ' + age + ' ' +company;
// }

// sayHello(...args,...newArgs);

// sayHello(42,34,'walmart')