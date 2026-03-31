const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); //this -> current context -> user object
        console.log(this); //Current Context -> user object
    }

}



//console.log(user.username)
// console.log(user.getUserDetails());
console.log(this); //{},    In Global Context -> Window Object (in browser) or Global Object (in Node.js))




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this         //not required as it is automatically returned when we use "new" keyword
}

const userOne = new User("hitesh", 12, true); 
const userTwo = new User("aditya", 8, false);   

// console.log(userOne);   
// console.log(userTwo);


console.log(userOne.constructor); // [Function: User]
console.log(userOne instanceof User); // true -> userOne is an instance of User constructor function means that userOne is created using User constructor function
console.log(userTwo instanceof User); // true




// How “new” keyword works:-

// 1. "new" keyword creates a new empty object or we can say instance.
// 2. constructor function is called that will have all the arguments
// 3. "this" keyword is injected in a new instance with all the arguments
// 4. We will receive the new object instance with all the arguments

