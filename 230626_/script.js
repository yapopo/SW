const title = document.getElementById("title")

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

let index = 16;

plus.addEventListener("click" , () => {
  index++
  title.style.fontSize = `${index + 1}px`
})

minus.addEventListener("click" , () => {
  index--
  title.style.fontSize = `${index - 1}px`
})
