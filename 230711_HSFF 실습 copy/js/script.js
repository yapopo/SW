const menuBtn = document.querySelector(".menu-btn")
const sideMenu = document.querySelector(".side-menu")
const sideMenuBtn = document.querySelector(".side-menu-button")

menuBtn.addEventListener("click", ()=>{
  sideMenu.classList.add("is-active")
})

sideMenuBtn.addEventListener("click", ()=>{
  sideMenu.classList.remove("is-active")
})


let buttons = document.querySelectorAll(".slide-btn-group button")


buttons.forEach((btn,index)=>{
  btn.addEventListener("click", ()=>{
    let slide = document.querySelector(".slide-list").style.transform =
    `translateX(${index*-100}vw)`
  })
})