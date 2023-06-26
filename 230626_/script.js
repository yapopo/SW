const title = document.getElementById("title")

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

let index = 32;

plus.addEventListener("click" , () => {
  index++
  title.style.fontSize = `${index}px`
})

minus.addEventListener("click" , () => {
  index--
  title.style.fontSize = `${index}px`
})
