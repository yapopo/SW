const list = document.querySelector(".list")

const listItem = list.querySelectorAll(".list__item")

const button = list.querySelectorAll("list__btn")

listItem.forEach((item)=> {
  item.addEventListener("click", ()=> {
    listItem.forEach(item => item.classList.remove("active"))
    item.classList.toggle("active")
    console.log(item)
  })
})