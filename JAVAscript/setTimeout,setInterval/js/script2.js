let count = 5;


let timer = setInterval(()=>{
  count = count -1;

  if( count == 0){
    clearInterval(timer)
  }
   let randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16)
  document.querySelector(".count").style.backgroundColor = randomColor
  document.querySelector(".text").textContent = count
  console.log(count)
},1000)