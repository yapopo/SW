const profile = document.querySelector(".profile-img")

const drawerMenu = document.querySelector(".profile")

profile.addEventListener("click", ()=>{
  drawerMenu.classList.toggle("active")
})