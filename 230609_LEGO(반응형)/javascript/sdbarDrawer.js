const drawerMenuBtn = document.querySelectorAll(".drawer-menu-button")

console.log(drawerMenuBtn)

function toggleDrawerMenu(){
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle("is-open")
  drawerMenu.classList.toggle("is-active")
}

drawerMenuBtn.forEach((button)=>{
  button.addEventListener("click", toggleDrawerMenu);
})