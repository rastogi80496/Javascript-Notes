//for Each -> Used in arrays and objects but not ideal for objects

const coding = ["js", "ruby", "java", "python", "cpp"] 

//1.Normal function

// coding.forEach( function (val){ 
//     console.log(val);
// } )



//2. Arrow function

// coding.forEach( (item) => {
//    console.log(item);
// } ) 


//3. Callback function
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// 4. Callback function with index and array
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//IMPORTANT
// Accessing object properties with forEach loop ,( Array k andr object rhega )
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )