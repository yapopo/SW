window.addEventListener("scroll",()=>{
  let 스크롤양 = document.querySelector("html").scrollTop;
  let 높이 = document.querySelector("html").clientHeight;
  let 스크롤높이 = document.querySelector("html").scrollHeight;


  if(스크롤양 <= 높이){
    document.querySelector(".bar").style.width = 
  `${스크롤양/스크롤높이 * 100}%`
  }
  else{document.querySelector(".bar").style.width = 
  `${(스크롤양+높이)/스크롤높이 * 100}%`}

  console.log(스크롤양,높이,스크롤높이)
})