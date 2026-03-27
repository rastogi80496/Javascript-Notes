// const tinderUser = new Object() // object constructor syntax Singleton


const tinderUser = {};  // object literal syntax
tinderUser.name = "Sammy"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // key value pair array

// console.log(tinderUser.hasOwnProperty("name")); // true


//Object inside Object
const regularUser = {
    email :  "somebody@gmail.com",
    fullname : {
        userfullname: {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

//Object Merge
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const mergedObj = {obj1,obj2} //object ke andar object ban gya
// const mergedObj = Object.assign({}, obj1, obj2) //{} Taken as target Object

const mergedObj = {...obj1, ...obj2} //Spread Operator
console.log(mergedObj)


//Array of Objects
const users = [
    {
        id: 1,
        name: "hitesh",
        email: "hitesh@gmail.com"
    },
    {
        id: 2,
        name: "Mitesh",
        email: "Mitesh@gmail.com"
    },
    {
        id: 3,
        name: "Sitesh",
        email: "sitesh@gmail.com"
    }
]
users[1].email //accessing email of 2nd object
// console.log(users[1].email);


//Destructuring Objects
const course  = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor 

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

//API(json format)
// {
//     "name": "hitesh",
//     "coursename": "javascript",
//     "price": "free"
// }


[
    {},
    {},
    {}
]





