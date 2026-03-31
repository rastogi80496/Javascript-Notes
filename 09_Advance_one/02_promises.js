const promiseOne = new Promise(function(resolve, reject) {
    //Do async task
    //DB calls, Crypto, network calls
    setTimeout(function(){
        console.log('Async task is created');
        resolve();
    },1000);
});

promiseOne.then(function(){      //.then() is called when the promise is resolved
    console.log('Promise is consumed');
});
//output after 1 second:
//Async task is created
//Promise is consumed


//2. Promise chaining
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is created');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Async task 2 is resolved');
});
//output after 1 second:
//Async task 2 is created
//Async task 2 is resolved  



//3.Promise with data 
const promiseThree= new Promise(function(resolve, rejecct){
    setTimeout(function(){
        resolve({username:'aditya', email: 'aditya@example.com'});;
    }, 1000);

})

promiseThree.then(function(user){
    console.log(user);
});
//output after 1 second:
//{username: "aditya", email: "aditya@example.com"}


//4. Promise with error handling
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; // false -> no error, true -> error
        if(!error){ //if there is no error then resolve the promise
            resolve({username:'aditya', password: '1234'});
        } else { //if there is an error then reject the promise
            reject('Error: Something went wrong');
        }
    }, 1000)  

})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Promise is either resolved or rejected');
})
//output after 1 second:
//{username: "aditya", password: "1234"}
//aditya


//Promise is either resolved or rejected
//.then -> is called when the promise is resolved
//.catch -> is called when the promise is rejected
//.finally -> is called when the promise is either resolved or rejected


//5. Async/Await 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; 
        if(!error){ 
            resolve({username:'JS', password: '1234'});
        } else { 
            reject('JS: Something went wrong');
        }
    }, 1000)  
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive; //wait for the promise to be resolved(finished) or rejected
        console.log(response);
    } catch (error) { //if there is an error then catch the error
        console.log(error);
    }
}
consumePromiseFive();

//output after 1 second:
//JS: Something went wrong (because error is true)


//try -> is used to handle the error
//catch -> is used to handle the error
//async -> is used to declare a function as asynchronous
//await -> is used to wait for a promise to be resolved or rejected



//6. Fetch API -> is used to make network requests

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()       //await is used to wait for the response to be converted to                                                         json format, which also returns a promise
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//Output after 1 second:
//[
//  {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"},
//  {id: 2, name: "Ervin Howell", username: "Antonette", email: "Trevor@april.biz"},
//  ...





//6. Fetch API also returns a promise
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() // return promise, so we can chain another .then() to get the data
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))  // Output: {login: "hiteshchoudhary", id: 123456, ...} (user data from GitHub API)





// 7. Promise.all -> is used to run multiple promises in parallel and get the results when all the promises are resolved

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([p1, p2, p3])
    .then(results => console.log('All results:', results))
    .catch(err => console.log(err)); // Output after 1 second: All results: [1, 2, 3]


// Promise.all(async tasks(setTimeout)) example
const task1 = new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 2000));
const task3 = new Promise(resolve => setTimeout(() => resolve("Task 3 done"), 1500));

Promise.all([task1, task2, task3])
  .then(results => console.log(results))
  .catch(error => console.log(error)); // Output after 2 seconds: ["Task 1 done", "Task 2 done", "Task 3 done"]


// Promise.all (with a rejected promise)
const t1 = Promise.resolve("Success 1");
const t2 = Promise.reject("Failed task");
const t3 = Promise.resolve("Success 2");

Promise.all([t1, t2, t3])
  .then(results => console.log(results))
  .catch(error => console.log("Error:", error)); // Output: Error: Failed task (because t2 is rejected)
//   If any promise rejects, Promise.all rejects immediately.






// Notes:
// .then -> resolves
// .catch -> rejects
// .finally -> always
// async/await -> cleaner promise handling(try/catch)
// Promise.all -> run multiple promises in parallel