// const nums = [1,2,3,4];

// map->returns a new array;

// const mutliplyByThree = nums.map((currElement, index) => {
//   console.log("curre Element-->", currElement, "index-->", index);
//     return currElement*3;
// //   return true;
// });
// // const nums = [1,2,3,4];
// // const mutliplyByThree = [true,true,true,true];

// console.log(nums);
// console.log(mutliplyByThree);

// filter -> 

// const moreThanTwo = nums.filter((currElement,index)=>{
//     console.log("curre Element-->",currElement,"index-->",index);
//     // if(currElement>2) return true;
//     // else return false;
//     return currElement>2;
// });

// console.log(nums);
// console.log(moreThanTwo);

// reduce ->
const nums = [10001,10,3,4];

const sum = nums.reduce((sumSoFar,currentElement)=>{
    console.log('sumSoFar->',sumSoFar, 'currentElement->',currentElement);
    if(currentElement%2===0){
        return sumSoFar+currentElement;
    }
    else return sumSoFar;
    // return sumSoFar+currentElement; // this value is going to my sumSoFar
    // sumSoFar = sumSoFar+currentElement;
},0); /// initial Value of sumSoFar
// if initial value is not provided by user, accumulator will pick
// first elemet or the 0th element of array. (0th index);
// and reduce will start from 1st element of array (1st index);
console.log(sum);
// let sum=100;
// for(let i=0;i<nums.length;i++){
//     console.log(sum);
//     sum=sum;
// }
// console.log(sum);
// let a= 0;
//  a=a+arr[0];

// let a=arr[0];