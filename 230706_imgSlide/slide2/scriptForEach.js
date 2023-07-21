let buttons = document.querySelectorAll(".btn-group button")

buttons.forEach((btn,index)=>{
  btn.addEventListener("click",(e)=>{

    
    document.querySelector(".slide-list").style.transform =
    `translateX(${index * -100}vw)`

    btn.classList.remove("active")
    e.target.classList.add("active")
   

  })
})