// What is a promise?
// Sync code vs Async code

// // Sync
// console.log('start');
// console.log('promise');
// console.log('end');

// // Async
// console.log('start');
// setTimeout(()=>{
//     console.log('promise');
// },0);
// console.log('end');
// // JS executes sync code first and the async code

// //
// console.log('start');

// function intro(name){
//     setTimeout(()=>{
//         return `I am ${name}`;
//     },1000);
// }

// const introMessage = intro('prikshit');

// console.log(introMessage);

// console.log('stop');

// // callbacks
// console.log("start");

// function intro(name, callBack) {
//   setTimeout(() => {
//     callBack(`I am ${name}`);
//   }, 1000);
// }

// function companyAt(company, callBack) {
//   setTimeout(() => {
//     callBack(`I work at ${company}`);
//   }, 500);
// }

// function livesIn(city, callBack) {
//   setTimeout(() => {
//     callBack(`I lives in ${city}`);
//   }, 300);
// }
// function birthPlace(city, callBack) {
//     setTimeout(() => {
//       callBack(`Birth Place is ${city}`);
//     }, 200);
//   }

// intro("prikshit", function (message) {
//   console.log(message);
//   companyAt("walmart", function (message) {
//     console.log(message);
//     livesIn("Bangalore", function (message) {
//       console.log(message);
//       birthPlace("Delhi", function (message) {
//         console.log(message);
//       });
//     });
//   });
// });

// console.log("end");

// Promises -> promises basically represents the upcoming
// completition or a failure of an async event and it's result
// value.

// console.log("start");
// const prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("assingment completed");
//     else reject(new Error("why you have not completed assignment"));
//   }, 2000);
// });

// console.log('end');
// prom1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//              Promise
// /                    \
// fullfilled           rejected
// value                    reason-> error

function intro(name,pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (pass) {
            resolve(`I am ${name}`);
          } else reject("no name found");
    }, 1000);
  });
}
function companyAt(company,pass) {
  return new Promise((res, rej) => {
    setTimeout(() => {
        if (pass) {
            res(`I work at ${company}`);
          } else rej("no company found");
    }, 200);
  });
}
function livesIn(city, pass) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (pass) {
        res(`I lives in ${city}`);
      } else rej("no city found");
    }, 300);
  });
}

// intro("prikshit")
//   .then((res) => {
//     console.log(res);
//     return companyAt('walmart');
//   }).then((res)=>{
//     console.log(res);
//     return livesIn('Blr');
//   }).then((res)=>{
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async code
// 1. callbacks -> drawback -> callback hell
// 2. promises if not chaining -> drawback -> promise hell
// 3. promises -> promise chaining (no drawback);

// Promise combinators
// Promise.all([intro("prikshit"), companyAt("walmart"), livesIn("Blr",false)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 1st scene -> array of res -> if all promises are fulfilled
// 2nd scene -> error ->
// AND

// condition 1 && condition 2 && condition 3

// Promise.race([intro("prikshit"), companyAt("walmart",true), livesIn("Blr",true)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 1st scenerio
// promise.race -> first promise failed or fullfilled

// race -> gives me the fastest promise.

// Promise.all([intro("prikshit",false), companyAt("walmart",false), livesIn("Blr",false)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//   .allSettled() .all(rejecting the whole promise)
// 

Promise.any([intro("prikshit",false), companyAt("walmart",false), livesIn("Blr",false)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


//   promise.any -> 
//   try catch, razor pay. and topics -> tomorrow