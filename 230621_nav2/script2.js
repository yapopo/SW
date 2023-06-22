const app = document.getElementById("app")

window.addEventListener("mousemove", (event) => {
  const pointer = document.getElementById("pointer")
  // console.log(event.clientX , event.clientY)
  // console.log(`X값: ${event.clientX}, Y값: ${event.clientY}`)

  pointer.style.top = `${event.clientY - (pointer.offsetHeight/2)}px`;
  pointer.style.left = `${event.clientX - (pointer.offsetWidth/2)}px`;


})

let posX;
let posY;

window.addEventListener("click", (event) => {
  const bubble = document.createElement("span")
  bubble.classList.add("bubble")
  bubble.classList.add("active")
  app.appendChild(bubble)

  posX = event.clientX - (pointer.offsetWidth/2)
  posY = event.clientY - (pointer.offsetHeight/2)

  bubble.style.top = posY + 'px'
  bubble.style.left = posX + 'px'

  setTimeout(() => {
    bubble.remove()
  },500)
  console.log(bubble)

})