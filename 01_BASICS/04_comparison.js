// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 2);
// console.log(2 <= 2);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("2" > 1); //true as string is converted to number
// console.log("02" > 1);  //true as string is converted to number
// console.log("2" > "12"); //true as string is compared lexicographically meaning first character of both strings is compared and then second character and so on



// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*
The reason is that null is converted to 0 when using <,>,>=,<= operators but not when using == operator.
*/


// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(undefined == 0); //false


// === vs ==
console.log(2 == "2"); //true as it checks only value 
console.log(2 === "2"); //false as it checks value + datatype both