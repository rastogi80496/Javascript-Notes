//for in  -> objects and arrays works only btt not ideal for arrays

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);

}

//Arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // 0 to 4 because for in loop gives the index of the array not the value of the array
    // console.log(programming[key]);
}


// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // it will not print the key and value of map because for in loop doesn't work on maps because maps are not objects but they are iterable
}
