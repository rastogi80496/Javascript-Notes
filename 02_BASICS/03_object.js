//singleton(Literal s Singleton nhi Bnaega Constructor se Bnega)
//Object.create

const Object = {};  // object literal syntax

const mySym = Symbol("key1") 

//Object Literal
const JsUser = {
    "Full name" : "Hitesh Choudhary",
    [mySym]: "mykey1",
    name : "Hitesh",
    age : 18,
    locaton: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(JsUser.email); 
// console.log(JsUser["email"]); 

// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "hitesh@chatgpt.com" // update
// Object.freeze(JsUser) // freeze the object
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser); // email will not be updated



JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}  , welcome back!`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());