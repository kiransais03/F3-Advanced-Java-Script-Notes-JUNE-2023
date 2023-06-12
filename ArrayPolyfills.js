

// // Array.prototype.myMap = function(callBack){
// //     let temp=[];
// //     for (let i = 0; i < this.length; i++) {
// //       temp.push(callBack(this[i], i));
// //     }
// //     return temp;
// // }

// // const mutliplyByThree = nums.myMap((currElement, index) => {
// //     return 9;
// // });

// // const mutliplyByTwo = nums.myMap((currElement) => {
// //     return currElement*2;
// // });


// // console.log(nums);
// // console.log(mutliplyByThree);
// // console.log(mutliplyByTwo);
// const nums = [1,2,3,4];


// Array.prototype.myFilter = function(callBack){
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//       if (callBack(this[i], i)) {
//         temp.push(this[i]);
//       }
//     }
//     return temp;
// }

// // filter -> 
// const moreThanTwo = nums.myFilter((currElement,index)=>{
//     return currElement>2;
// });

// console.log(nums);
// console.log(moreThanTwo);

// reduce polyfills
// call bind apply polyfills
// 

// arr.reduce((accumulator,currentElement,index)=>{},initialValue);

// Array.prototype.myReduce = function(callback, initialValue){
//   // initialValue = value given by user || undefined
//   var accumulator = initialValue; /// undefined
//   for(let i=0;i<this.length;i++){
//     // accumulator = callback(accumulator,this[i],i);
//     /// if accumulator === undefined -> this[i]
//     accumulator = accumulator !== undefined ? callback(accumulator, this[i], i) : this[i];
//   }
//   return accumulator;
// }


// // const nums = [10001,10,3,4];

// // const sum = nums.myReduce((sumSoFar,currentElement)=>{
// //     if(currentElement%2===0){
// //         return sumSoFar+currentElement;
// //     }
// //     else return sumSoFar;
// // }); 

// console.log(sum);

/// multi entity -> one thing
// array of anything (array of object, number) -> number, string,object

// let arr = [1,2,3,4]; // arrays of arrays with nested array depth as 0;
// [[1,2],3];

// arr[i][j]

const arr1 = [
  [] // array users with admin -> array of details
  [1, 2], // 
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

function customFlat(arr,depth=1){
  let result=[];
  arr.forEach(element => {
    if (Array.isArray(element) & (depth > 0)) {
      result.push(...customFlat(element, depth - 1));
    } else result.push(element);
  });
  return result;
}

const result = customFlat(arr1,2);
console.log(result);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]