const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


//setInterval(function(),delay) ->  setInterval() runs a function repeatedly after a fixed delay (in milliseconds).  

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);  