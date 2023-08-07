document.querySelectorAll("input").forEach(function(input){
  input.addEventListener("focus",function(){
    this.parentNode.classList.add("border-act")
  })
})

document.querySelectorAll("input").forEach(function(input){
  input.addEventListener("focusout",function(){
    this.parentNode.classList.remove("border-act")
  })
})

let idveri= pwveri= pwchkveri= nameveri= bitrhveri= genderveri= phoneveri= addressveri = false;
let mailveri = true;

let essenInfo = "<span class='text-red'>필수 정보입니다.</span>"

// 아이디

document.querySelector(".userid input").addEventListener("focusout",function(){
  let userId = this.value;
  let idExp = /^[a-z0-9]{5,8}$/;
  let idWarn = document.querySelector(".userid .warn")

  if(userId.length == 0){
    idWarn.innerHTML = essenInfo;
  }else if(!idExp.test(userId)){
    idWarn.innerHTML = "<span class = 'text-red'>5~8자의 영문 소문자만 사용 가능</span>"
  }else{
    idveri = true;
    idWarn.innerHTML = "";
  }

})

document.querySelector(".userpw input").addEventListener("focusout",function(){
  let userPw= this.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;
  let pwWarn = document.querySelector(".userpw .warn");
  let pwTxt = document.querySelector(".userpw .inputbox p");
  let pwImg = document.querySelector(".userpw .inputbox img")


  if(userPw.length == 0){
    pwWarn.innerHTML = essenInfo;
    pwTxt.innerHTML = "";
    pwImg.src = "./imgs/m_icon_pw_step_01.png"
  }else if(!pwExp.test(userPw)){
    pwWarn.innerHTML = "<span class = 'text-red'>8~16자의 영문 대소문자 숫자 특수문자 사용</span>"
    pwTxt.innerHTML = "<span class = 'text-red'>사용불가</span>"
    pwImg.src = "./imgs/m_icon_pw_step_10.png"
  }else{
    pwveri = true;
    pwWarn.innerHTML = "";
    pwTxt.innerHTML = "<span class = 'text-green'>안전</span>"
    pwImg.src = "./imgs/m_icon_pw_step_04.png"
  }

})

document.querySelector(".userpw-chk input").addEventListener("focusout",function(){
  let userPwChk= this.value;
  let pwChkWarn = document.querySelector(".userpw-chk .warn");
  let pwChkImg = document.querySelector(".userpw-chk .inputbox img")


  if(userPwChk.length == 0){
    pwChkWarn.innerHTML = essenInfo;
    pwChkImg.src = "./imgs/m_icon_pw_step_02.png"
  }else if(userPwChk != document.querySelector(".userpw input").value){
    pwChkWarn.innerHTML = "<span class = 'text-red'>비밀번호가 일치하지 않습니다</span>"
  }else{
    pwchkveri = true;
    pwChkWarn.innerHTML = "";
    pwChkImg.src = "./imgs/m_icon_pw_step_07.png"
  }

})

document.querySelector(".username input").addEventListener("focusout",function(){
  let userName = this.value;
  let nameExp = /^[가-힣]{2,5}$/;
  let nameWarn = document.querySelector(".username .warn")

  if(userName.length == 0){
    nameWarn.innerHTML = essenInfo;
  }else if(!nameExp.test(userName)){
    nameWarn.innerHTML = "<span class = 'text-red'>2~5글자 사이의 한글로 입력해주세요.</span>"
  }else{
    nameveri = true;
    nameWarn.innerHTML ="";
  }

})