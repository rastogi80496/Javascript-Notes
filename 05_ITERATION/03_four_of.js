// for of -> map, set, array, string works only

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); // Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

for (const [key, value] of map) {
    // console.log(key, ':-', value); 
    // console.log(key); // IN, USA, Fr
    // console.log(value); // India, United States of America, France
}


// NOTE : for of loop works on iterables like arrays, strings, maps, sets but it doesn't work on objects because objects are not iterable

// Objects
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);             // error because Object  is not iterable
    
// }