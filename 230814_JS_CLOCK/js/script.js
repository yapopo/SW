

// // 시계 vanila



setInterval(function () {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hour < 10){
    hour = '0'+ hour;
  };

  if(min < 10){
    min = '0' + min
  }

  if(sec < 10){
    sec = '0' + sec
  }

  document.querySelector(".phone-time")
.textContent = hour + ":" + min + ":" + sec

},1000)






// jqurey

// const clock = document.querySelector(".phone-time")

// function getClock() {
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const min = String(date.getMinutes()).padStart(2, "0");
//     const sec = String(date.getSeconds()).padStart(2, "0");
//     clock.innerText = `${hours}:${min}:${sec}`;
// }

// getClock();
// setInterval(getClock, 1000);



