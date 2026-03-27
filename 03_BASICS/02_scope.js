// let ,const  --> Block Scoped
// var  --> Globally Scoped      

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner" , a) //10 --> Block scoped
}

// console.log(a) // ReferenceError: a is not defined
// console.log(b) // ReferenceError: b is not defined
// console.log(c) //30 --> Globally scoped due to var

/*
Inspect k console m global scoped or node m global scope alag hote h
*/


//Nested Function Scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //hitesh
    }
    // console.log(website); //ReferenceError: website is not defined

    two()

}
one() // child function can access parent function variable but parent function cannot access child function variable


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username, website); //hitesh youtube
    }
    // console.log(website); //ReferenceError: website is not defined

}
// console.log(username); //ReferenceError: username is not defined


//+++++++++++++++Interesting++++++++++++++++

console.log(addone(5)) //6
function addone(num){
    return num + 1
}

// addtwo(5) //ReferenceError: Cannot access 'addtwo' before initialization .Function Expression ko call nhi kr skte hai pehle when variable declaration nhi ho jata(hosting)
const addtwo = function(num){
    return num + 2
}