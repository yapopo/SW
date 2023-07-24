// scroll 이벤트에는 관습적으로 window를 부착한다

window.addEventListener("scroll",()=>{

  // document.documentElement = querySelector("html")
  let 스크롤양 = document.querySelector("html").scrollTop;
  let 높이 = document.querySelector("html").clientHeight;
  let 스크롤높이 = document.querySelector("html").scrollHeight;
  

 if(100 <= window.scrollY){
  document.querySelector("nav").style.backgroundColor = "#fff"
 }else{
  document.querySelector("nav").style.backgroundColor = "#ccc"
 }

 if(스크롤양+높이 == 스크롤높이){
  alert("전체 스크롤 끝!")
 }

 console.log(window.scrollY)

})


// document.querySelector(".lorem").addEventListener("scroll",()=>{
//   let 스크롤양 = document.querySelector(".lorem").scrollTop;
//   let 높이 = document.querySelector(".lorem").clientHeight;
//   let 스크롤높이 = document.querySelector(".lorem").scrollHeight;

//   if(스크롤양+높이 == 스크롤높이){
//     alert("스크롤 끝")
//   }

// })