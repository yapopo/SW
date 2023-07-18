let closeBtn = document.querySelector(".close-btn button")
let modal = document.querySelector(".popup")

closeBtn.addEventListener("click", ()=>{
//  modal.style.display = "none"
setTimeout(()=>{
  modal.style.display = "none"
},5000)
})

// 쿠키를 이용한 시간 설정으로 팝업을 일정시간동안 보이지 않게 하기
// setCookie00() : 함수를 호출할 경우 00시 기준으로 쿠키값 초기화
// setCookie24() : 함수를 호출할 경우 24시간 후에 쿠키값 초기화

