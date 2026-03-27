//Primitive

//7  Types : String, Number, Booean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue =  100.3

const isLoggedIn = false
const outsideTemp = null // Data type is object
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber);


//Reference (Non Prmitive)

//Array, Objects, Functions 
const heros = ["shaktiman", "naagraj", "doga"] // array

let myObj = {
    name : "Hitesh",
    age : 22,
}

const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof myObj)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ++++++++++++++++++++++++++++++++
//stack(Primitive) ,Heap(Non-Primitive)
let myYoutubename = "hiteshchoudharydotcom"

let anothername =  myYoutubename //copy create kr rhe h
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@upi"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory(linked to stack memory)

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

