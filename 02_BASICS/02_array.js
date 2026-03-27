const marvel_heros = [ "Ironman" , "thor", "spiderman"]
const  dc_heros = [ "superman" , "batman", "flash"]

// marvel_heros. push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros) // merges two arrays
console.log(allHeros) //[ 'Ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]


const all_new_Heros = [...marvel_heros , ...dc_heros] // spread operator
console.log(all_new_Heros) // [ 'Ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]


const another_array = [1, 2 , 3 , [4, 5 , 6], 7 , [6, 7, , [4, 5]]]

const real_new_array = another_array.flat(Infinity) // flattens the array upto specified 
console.log(real_new_array)
// Infinity flattens the array completely

console.log(Array.isArray("rahul"))// False checks if the given variable is array or not
console.log(Array.from("rahul")) // ['r', 'a', 'h', 'u', 'l'] converts given variable to array
console.log(Array.from(1234)) // Empty array
console.log(Array.from({name : "rahul"}))// Empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))// [100, 200, 300] creates an array from the given arguments

