let buttons = document.querySelectorAll(".btn-group button")




// buttons.forEach(function(btn,index){

//   btn.addEventListener("click",()=>{

//     document.querySelector(".slide-list").style.transform = "translateX(" + index * -100 + "vw)"
    
//   })


// })

// buttons.forEach((btn,index)=>{
//   btn.addEventListener("click", ()=>{
//     let slide = document.querySelector(".slide-list").style.transform = "translateX(" + index * -100 + "vw)"
//   })
// })

buttons.forEach((btn,index)=>{
  btn.addEventListener("click", ()=>{
    let slide = document.querySelector(".slide-list").style.transform = `translateX(${index * -100 }vw)`

    console.log(btn,index)
  })
})