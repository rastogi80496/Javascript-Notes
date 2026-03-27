//array

const myArr = [0, 1, 2, 3 , 4, 5, true, "Rahul"]
const myHeros = ["shaktiman", "naagraj", "doga"]

const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[1])

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds element at the beginning
// myArr.shift() // removes element from the beginning

console.log(myArr)

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf("Rahul")); 

const newArr = myArr.join()   // converts array to string
// console.log(newArr);      // "0,1,2,3,4,5,true,Rahul"


//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // does not modify the original array
console.log(myn1); // [1, 2]

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // modifies the original array(Remove splice index element)
console.log(myn2); // [1, 2, 3]

console.log("C ", myArr);