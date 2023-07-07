let buttons = document.querySelectorAll(".btn-group button")

buttons.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".slide-list").style.transform =
    `translateX(${index * -100}vw)`
    
    if(this){
      btn.style.opacity = "0.3"
    }else{
      btn.style.opacity = "1"
    }

  })
})