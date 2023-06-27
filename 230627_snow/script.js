const wrapper = document.getElementById("wrapper")


let count = 0;

const addSnow = () => {

  let size = Math.random() * (7-3) + 3 + "px"
  let blur = Math.random() * (3-1) + 1 + "px"

  const span = document.createElement("span")
  span.classList.add("snow")

  span.style.left = Math.random() * (window.innerWidth - 1) + 1 + "px"
  span.style.width = size
  span.style.height = size
  span.style.opacity = Math.random();
  span.style.filter = `blur(${blur})`
  span.style.animationDelay = Math.random() * (10-1) + 1 + "s"
  span.style.animationDuration = Math.random() * (12-5) + 5 + "s"


  wrapper.appendChild(span)

  if(count < 100){
    count++
    window.requestAnimationFrame(addSnow)
  }
}

window.requestAnimationFrame(addSnow)