// let obj = {
//     fn(){
// // do something
//     }
// }

// function abc(x,y,z){
    // do something
// }

// obj.fn = abc;

// Call Polyfills
// Function.prototype.myCall=function(obj,...args){ // rest operator
//     // args=[1,2,3,4];
//     obj.fn = this; // function definition has been stored
//     return obj.fn(...args); // spread operator
//     // obj.fn(1,2,3,4)
// }
// let obj = {
//     nam: 'PC',
// };
// function sayHello(age, company){
//     return "Hello " + this.nam + " is " + age + " " + company;
// }

// console.log(sayHello.myCall(obj,23,'walmart'));

// abc.myCall

// // rest operator
// function abc(...args){
//     args=[1,2,3,4,5,'hello'];
// }

// abc(1,2,3,4,5,'hello');
// function abc(b,...args){
//     console.log(args);
//     return true;
// }

// 1,2,3,4

// ApplyPolyfill
// Function.prototype.myApply = function(obj,args){
//     obj.fn = this;
//     return obj.fn(...args);
// }

// let obj = {
//     name: 'PC',
// };

// function sayHello(age, company){
//     return "Hello " + this.name + " is " + age + " " + company;
// }

// console.log(sayHello.myApply(obj,[23,'walmart']));

Function.prototype.BindPolyfill = function(obj,...args){
    obj.fn=this; // we are still storing
    return function(...newArgs){
        return obj.fn(...args,...newArgs);
    }
}

let obj = {
    name: 'PC',
};

function sayHello(age, company){
    return 'Hello '+ this.name + ' is ' + age + ' ' +company;
}

const hell=sayHello.BindPolyfill(obj,42);  // obj,...args

console.log(hell(23,'walmart'));