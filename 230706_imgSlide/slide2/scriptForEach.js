let buttons = document.querySelectorAll(".btn-group button")

buttons.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".slide-list").style.transform =
    `translateX(${index * -100}vw)`

    btn.classList.remove("active")
    btn.classList.add("active")


  })
})