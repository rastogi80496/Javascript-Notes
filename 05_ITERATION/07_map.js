// map -> used to transform the elements of an array and it returns a new array with the transformed elements

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


// chaining of map and filter
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
//                 // .filter( (num) => num >= 40)

console.log(newNums);
