/// Call bind & Apply are 3 important
// methods available to all JS function
// which are used to set THIS keyword
// inside functions. independent of how the
// function is called.


let obj = {
    nam: 'PC',
};

function sayHello(age, company){
    // return "Hello " + this.nam + " is " + age + " " + company;
    return this;
}

// console.log(sayHello());
console.log(obj);
console.log(sayHello.call(obj,23, 'walmart'));
console.log(obj);
// console.log(sayHello.call(obj,23,'walmart'));
// call is a method for a function (object,......);
// let obj = {
//     name: 'PC',
//     sayHello(age, company){
//         return "Hello " + this.name + " is " + age + " " + company;
//     }
// };

// console.log(obj.sayHello(23,'walmart'));



// /// call -> obj, arguments

// // Apply
// let obj = {
//     name: 'PC',
// };

// function sayHello(age, company){
//     return "Hello " + this.name + " is " + age + " " + company;
// }

// console.log(sayHello.call(obj,23, 'walmart'));
// console.log(sayHello(23,'walmart'));

///Bind

// let obj = {
//     name: 'PC',
// };

// function sayHello(age, company){
//     return 'Hello '+ this.name + ' is ' + age + ' ' +company;
// }

// const hello=sayHello.bind(obj); // this will give me a function with sayHello
// // defi.

// console.log(hello());

