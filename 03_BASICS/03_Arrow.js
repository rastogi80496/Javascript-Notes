 const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
} //this keyword refers to the current object

// user.welcomeMessage() //hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage() //sam , welcome to website

// console.log(this); // in browser this is  global object or windows object  and in node {} (empty object)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined , because here this refers to global object and global object m username nhi h
// }


// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// } //undefined 


//Arrow Function
const chai = () => {
    let username = "hitesh"
    console.log(this);
} // {}  , arrow function m this keyword upper scope k this ko refer krta h here upper scope m global scope h to {} empty object h

chai()

// Basic  syntax of arrow function
// () => {}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//  console.log(addTwo(5, 10)); //15




//IMPLICIT RETURN
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5, 10)); //15


//Arrow function m curly braces {}-> m return krna hoga agr curly braces nhi h ()-> to implicit return krna hoga 




//Jb object return krna hoga to useke liye object ko parentheses m wrap krna hoga
const addTwo = (num1, num2) => ({username: "Hitesh"})
console.log(addTwo(5, 10)); //{ username: 'Hitesh' }




// const myArray = [2, 5, 3 , 7 , 8]
// myArray.forEach( () => {} )
// myArray.forEach( () => () )