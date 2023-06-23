let index = 0;

const number = document.querySelector(".number")

const start = document.getElementById("start")
const stop = document.getElementById("stop")

const list = document.getElementById("list")

let timerId;

start.addEventListener("click", () => {
  index = 0;
  timerId = setInterval(() => {
    index++
    number.textContent = index
  },100)
})

stop.addEventListener("click", ()=> {
  clearInterval(timerId)
  const li = document.createElement("li")
  li.textContent = index
  list.appendChild(li)
})


console.log(timerId)