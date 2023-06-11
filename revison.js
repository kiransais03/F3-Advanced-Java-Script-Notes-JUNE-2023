/// What is js ?
/// JS is single threaded and sync scripting language.

// single threaded -> JS can execute only 1 command at a time.
// sync single threaded -> JS can execute 1 command at a time
// and in a specific order.

/// call stack -> it handles everything related to execution
/// context.
/// Creation/deletion / control

// /// here b will be 10
// function a(){
//     console.log(b);
// }

// var b = 10;
// a();

// /// here b will be undefined
// function a(){
//     console.log(b);
// }

// a();
// var b = 10;

// function a(){

//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b = 10;
// a();

// function a() {
//   var b = 10;
//   c();
//   function c() {}
// }

// a();
// console.log(b);

// scope of variable or function -> where you can access a
// specific variable
// or a function in your code.

// scope is direclty dependent on lexical environment;

// lexical -> ? as a term lexical means in a sequence.

// Closure -> function + LE
// Closure -> A closure basically means that
// a function bind together with it's lexical
// Env or
// a function along with it's lexical scope.

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   a=100;
//   return y; // returning closure of y -> function y 
// //   + lexical env of y
// }

// var z = x();

// z();

// when functions are returned from other functions
// they still maintain their lexical scope

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
// }

// x();

// function x(){
    // for(var i=1;i<=5;i++){
    //     setTimeout(function(){
    //         console.log(i);
    //     },1000);
    // }
// }

// x();
// var fnDef=function(){
//     console.log(i);
// }
// i => 1, fnDef -> 1*1000; 1 sec
// i => 2, fnDef -> 2*1000; 2 sec
// i => 3, fnDef -> 3*1000; 3 sec
// i => 4, fnDef -> 4*1000; 4 sec
// i => 5, fnDef -> 5*1000; 5 sec
// i => 6 , this for loop will terminate

// var fnDef=function(){
//     console.log(i);
// }
// i => 1, fnDef -> 1*1000; 1 sec
// i => 2, fnDef -> 2*1000; 2 sec
// i => 3, fnDef -> 3*1000; 3 sec
// i => 4, fnDef -> 4*1000; 4 sec
// i => 5, fnDef -> 5*1000; 5 sec
// i => 6 , this for loop will terminate

// function x(){
//     for(var i=1;i<=5;i++){
//         function closure(i){
//             setTimeout(function(){
//                 console.log(i);
//             },i*1000);
//         }
//         closure(i);
//     }
// }

// x();

// i => 1  closure(i)-> fnDef -> 1*1000; 1 sec
// i => 2  closure(i)-> fnDef -> 2*1000; 2 sec
// i => 3  closure(i)-> fnDef -> 3*1000; 3 sec
// i => 4  closure(i)-> fnDef -> 4*1000; 4 sec
// i => 5  closure(i)-> fnDef -> 5*1000; 5 sec
// i => 6 this for loop will terminate

