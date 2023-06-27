const wrapper = document.getElementById("wrapper")


let count = 0;

const addSnow = () => {
  const span = document.createElement("span")
  span.classList.add("snow")
  wrapper.appendChild(span)
}

addSnow()