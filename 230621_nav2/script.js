const container = document.querySelector(".container")
const pages = container.querySelectorAll(".page")

const nav = document.querySelector(".nav")
const navItems = nav.querySelectorAll(".button")

navItems.forEach((item,index) => {
  item.addEventListener("click", () => {
    navItems.forEach( item => item.classList.remove("active"));
    item.classList.add("active");
    pages.forEach(item => item.classList.remove("active"));
    pages[index].classList.add("active");
  })
})



