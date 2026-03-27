//Dates
//.toDateString() -> Day + Date (Month Dateno. Year)
//.toLocaleString -> Date + Time (1/23/2023 , 12:00 Am)

let myDate = new Date()
// console.log(myDate) // Current date and time
// console.log(typeof myDate)
// console.log(myDate.toString()) //Thu Jan 22 2026 17:46:02 GMT+0530
// console.log(myDate.toDateString()) //Thu Jan 22 2026
// console.log(myDate.toLocaleString()) //22-1-2026, 5:46:02 pm

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023



// let myCreatedDatenew = new Date(2023, 0 , 23, 5 , 2)   // 1/23/2023, 5:02:00 AM
// let myCreatedDatenew = new Date("2023-01-14")          //1/14/2023, 5:30:00 AM
let myCreatedDatenew = new Date("01-14-2023")           //1/14/2023, 12:00:00 AM
console.log(myCreatedDatenew.toLocaleString())


let myTimestamp = Date.now() // time in milliseconds since 1 Jan 1970 
// console.log(myTimestamp) // 1674381962673
// console.log(myCreatedDatenew.getTime()) // 1673653800000
console.log(Math.floor(Date.now() / 1000) ) // time in seconds


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) // 0-11
console.log(newDate.getDate()) // 1-31
console.log(newDate.getDay()) // 0-6
console.log(newDate.getFullYear())


// `${newDate.getDate()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
    timeZoneName: "long",
    
})   // on console.log ->Thursday, India Standard Time


newDate.toLocaleString('default', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short"
});    // on console.log -> Monday, 1 February 2026, 10:45 AM IST