const title = document.getElementById("title")

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const colorChange = document.getElementById("change")

let index = 16;

plus.addEventListener("click" , () => {
  index++
  title.style.fontSize = `${index}px`
})

minus.addEventListener("click" , () => {
  index--
  title.style.fontSize = `${index}px`
})

colorChange.addEventListener("click", () => {
  // title.classList.toggle("active")
  setTimeout(()=> {
    if(title.classList.contains("active")){
        title.classList.remove("active")
    }else{
        title.classList.add("active")
    }
  },1000)
})

