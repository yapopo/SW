const profile = document.querySelector(".profile-img")

const drawerMenu = document.querySelector(".profile")

// profile.addEventListener("click", (e)=>{
//   e.preventDefault();
//   drawerMenu.classList.toggle("active")
// })


profile.addEventListener("click",(e)=>{
  e.preventDefault();
    if(this.active){
      drawerMenu.classList.remove("active")
    }else{
      drawerMenu.classList.add("active")
    }
   
    this.active = !this.active


  })
