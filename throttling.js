// it is a technique to limit the execution of an event handler
// function even when this event triggers continuesly due
// to user actions

let normalCount = 0;
let throttleCount = 0;

const normalCountDisplay = document.getElementById('normal-count');
const throttleCountDisplay = document.getElementById('throttle-count');

const Button = document.getElementById('btn');

const brokenShotGunFn = () => {
    throttleCountDisplay.innerHTML=++throttleCount;
}

const magicFn = (fn,delay) => {
    let lastFuncExTime = 0; // T=0
    return (...args) =>{
        let currentTime = new Date().getTime(); // currentTime
        if(currentTime-lastFuncExTime<delay) return;
        else{
            lastFuncExTime=currentTime;
            return fn(...args);
        }
    }

}

// 1st function call happened at 0
// 2nd function call happened at 200ms 
// 3rd function call happened at 350ms 
// 4th function call happened at 450ms 
// 5th function call happened at 500ms
// 6th function call happened at 600ms
// 7th function call happened at 700ms
// 8th function call happened at 850ms

const fixedShotGunFn = magicFn(brokenShotGunFn,400);

Button.addEventListener('click',()=>{
    normalCountDisplay.innerHTML = ++normalCount;
    fixedShotGunFn();
})