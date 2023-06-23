let index = 0;

const number = document.querySelector(".number")

const start = document.getElementById("start")
const stop = document.getElementById("stop")

let timerId;

start.addEventListener("click", () => {
  timerId = setInterval(() => {
    index++
    number.textContent = index
  },300)
})

stop.addEventListener("click", ()=> {
  clearInterval(timerId)
})


console.log(timerId)