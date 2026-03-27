//Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFFE
    console.log(`DB CONNECTED`);
})(); // semicolon(;)mandatory h IIFE k baad 

//() () IIFE ka use krke hum apne variables ko global scope se bacha skte hai and ek baar hi function ko call kr skte hai

//2 IIFE ko likhne k liye first IIFE ko semiciolon(;) se end krte hai fir dusra IIFE likhte hai

//Arrow function IIFE
( (name) => {
    console.log(`DB CONNECTED , ${name}`);
})("Hitesh");


//++++++++++++++ JS Execution Context ++++++++++++++++

// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.
