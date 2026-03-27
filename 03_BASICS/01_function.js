function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();


function addTwoNum(num1, num2){
    console.log(num1 + num2);
}
// addTwoNum(4, 5);
// addTwoNum(4, "5"); //45 (concatenation)
// addTwoNum(4,null); //4

// const result = addTwoNum(5, 6); 
// console.log(result); //undefined return kuch nhi kr rha function m


function addTwoNumbers(num1, num2){
    // let result1 = num1 + num2
    // return result1
    return num1 + num2
    console.log("Hello World"); // unreachable code

}
const result1 = addTwoNumbers(5, 6); 
// console.log("Result1: ", result1); //11


function loginUserMessage(username){
    if(!username){ 
        console.log("Please enter a valid username");
        return
    }
    return `${username} just logged in`

}
console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());

// !username equals to username === undefined || username === null || username === ""


function calculateCartPrice(val1,val2,...prices){ //Rest Operator(....prices)
    return prices
}
console.log(calculateCartPrice(200, 400, 500, 1000));
//Output: [ 500, 1000 ]


//Take Object as function parameter
const user = {
    username : "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user); //Passing object as argument
handleObject({username: "Mitesh", price: 299}); //Direct object pass kr skte hai function m


//Array as function parameter
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40]));