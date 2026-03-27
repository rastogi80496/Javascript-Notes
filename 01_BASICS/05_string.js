const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Not recommended

console.log(`Hello ${name}, your repo count is ${repoCount}`);

const gameName = new String('hitesh-hc') //We use this way to initialise variable
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t')); 
// console.log(gameName.split('-')); // [ 'hitesh', 'hc' ]

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4) //Ngative index not work in substring works only in slice
console.log(anotherString);

const newStringone = "   hitesh   "
console.log(newStringone);
console.log(newStringone.trim());
console.log(newStringone.trim().length);

const url = "hiteshkumar.com/profile/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('profile'));
console.log(url.slice(url.indexOf('profile')));
