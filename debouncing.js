// network calls are expensive operations

// Debouncing-> It limit the execution of a function call and waits
// for a certain amount of time before running it again.

// a
// ap
// app
// appl
// apple

// apple

const inputTag = document.getElementById("input-value");
const inputTag2 = document.getElementById("input-value-2");

const searchFn = () => {
  console.log(inputTag.value);
};

const searchFn2 = () => {
  console.log(inputTag2.value);
};

const magicFn = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer); 
    timer = setTimeout(() => { //callback('ap') timer(400ms)
      callback(...args); 
    }, delay);
  };
};



const searchOptimisedFn = magicFn(searchFn, 400);


// fn1() -> fn2

// function fn2(...args){
//     // if(contidion 1){
//         // do something
//     // }

//     return fn1(...args);
// }

// fn2(1,2);