let slide = document.querySelector(".slide-list")

console.log(slide)

const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")


btn1.addEventListener("click",()=>{
  slide.style.transform = "translateX(0)"
})


btn2.addEventListener("click",()=>{
    slide.style.transform = "translateX(-100vw)"
  })

btn3.addEventListener("click",()=>{
    slide.style.transform = "translateX(-200vw)"
  })

btn4.addEventListener("click",()=>{
    slide.style.transform = "translateX(-300vw)"
  })



  
