// ------------- 5/30/2023 ---------------
// ----------- Practice_waiting.js --------------

// in javascript you pause the execution with fixed time and then move on to next 

// Print hello 
// wait 3 seconds print LWC
// Print World

console.log('Hello');

// setTimeout method is used for pausing execution 
// it accept 2 parameters 
// 1 : a function that accept no param and provide logic 
// 2 : time you want to wait in millisecond , 1s = 1000ms

setTimeout(() => {
    console.log('LWC'); 
}, 3000);

console.log('World'); 