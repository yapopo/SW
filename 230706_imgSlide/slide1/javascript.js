let slide = document.querySelector(".slide-list")

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")


// btn1.addEventListener("click",()=>{
//   slide.style.transform = "translateX(0)"
// })

// function btn1(){
//   slide.style.transform = "translateX(0)"
// }

// btn1.onclick = function (){
//   slide.style.transform = "translateX(0)"
// }

function button1(){
  slide.style.transform = "translateX(0)"
}

// onclick 방법

function button2(){
  slide.style.transform = "translateX(-100vw)"
}

btn2.addEventListener("click", button2)

//

btn3.addEventListener("click",()=>{
    slide.style.transform = "translateX(-200vw)"
  })

btn4.addEventListener("click",()=>{
    slide.style.transform = "translateX(-300vw)"
  })




  
