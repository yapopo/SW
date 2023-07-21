let buttons = document.querySelectorAll(".slide-item-btn")

buttons.forEach((btn,index)=>{
  btn.addEventListener("click", (e)=>{
    let slide = document.querySelector(".slide-list").style.transform = `translateX(${index * -100 }vw)`

    buttons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    console.log(btn,index)
  })
})