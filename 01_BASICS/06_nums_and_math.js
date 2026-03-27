const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // 100 in string h 
console.log(balance.toFixed(2)); // 100.00  decimal k baad 2 fixed 

const otherNumber = 123.89321
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//++++++++++++++++++++ MATHS +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5 Take upper value
// console.log(Math.floor(4.9)); // 4 Take lower value
// console.log(Math.min(0,150,30,20,-8,-200)); // -200
// console.log(Math.max(0,150,30,20,-8,-200)); //150

console.log(Math.random()); // value 0 to 0.999999
console.log((Math.random() * 10) + 1); //positive dega greater than 0
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// value between 10 to 20