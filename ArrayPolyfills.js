

// Array.prototype.myMap = function(callBack){
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//       temp.push(callBack(this[i], i));
//     }
//     return temp;
// }

// const mutliplyByThree = nums.myMap((currElement, index) => {
//     return 9;
// });

// const mutliplyByTwo = nums.myMap((currElement) => {
//     return currElement*2;
// });


// console.log(nums);
// console.log(mutliplyByThree);
// console.log(mutliplyByTwo);
const nums = [1,2,3,4];


Array.prototype.myFilter = function(callBack){
    let temp=[];
    for (let i = 0; i < this.length; i++) {
      if (callBack(this[i], i)) {
        temp.push(this[i]);
      }
    }
    return temp;
}

// filter -> 
const moreThanTwo = nums.myFilter((currElement,index)=>{
    return currElement>2;
});

console.log(nums);
console.log(moreThanTwo);

// reduce polyfills
// call bind apply polyfills
// 
