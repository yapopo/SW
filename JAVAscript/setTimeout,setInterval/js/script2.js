// 5초 거꾸로 카운트다운후 멈춤

// let count = 5;


// let timer = setInterval(()=>{
//   count = count -1;

//   if( count == 0){
//     clearInterval(timer)
//   }
//    let randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16)
//   document.querySelector(".count").style.backgroundColor = randomColor
//   document.querySelector(".text").textContent = count
//   console.log(count)
// },1000)



let plusCount = 1;


let plusTimer = setInterval(()=>{
  plusCount = plusCount +1;

  if( plusCount == 10){
    clearInterval(plusTimer);
    document.querySelector(".count").classList.add("is-active");
  }
   let randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16)
  document.querySelector(".count").style.backgroundColor = randomColor
  document.querySelector(".text").textContent = plusCount
},1000)