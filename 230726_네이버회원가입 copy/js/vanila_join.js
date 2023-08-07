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

let bitrhList = document.querySelectorAll(".birth-item")

function birthWarnTxt(text){
  document.querySelector(".birth .warn").innerHTML = 
  `<span class = 'text-red'>${text}</span>`
}

bitrhList.forEach(function(item){
  item.addEventListener("focusout",()=>{
    let year = bitrhList[0].value;
    let month = bitrhList[1].value;
    let date = bitrhList[2].value;

    let now = new Date();
    let nowStamp = now.getTime();
    now = now.getFullYear();

    let birth = new Date(year,month,date)
    birth = birth.getTime();

    if(year.length != 4) {
      birthWarnTxt("태어난 년도 4자리를 정확하게 입력하세요.")
    } else if(month.length == 0)  {
      birthWarnTxt("태어난 월을 입력하세요")
    }else if(date.length == 0 || date > 31 || date <=0)  {
      birthWarnTxt("태어난 일(날짜)2자리를 정확하게 입력하세요.")
    }
    // isNAN : 매개변수가 숫자인지 검사하는 함수
    else if(isNaN(year*month*date)){
      birthWarnTxt('생년월일을 확인해주세요.')
    } else if(now - year > 100){
      birthWarnTxt('정말이세요?')
    } else if(nowStamp < birth){
      birthWarnTxt('미래에서 오셨군요.^^')
    } else {
      bitrhveri = true;
      birthWarnTxt("")
    }

  })

})

let genderInputs = document.querySelectorAll(".gender .inputbox")

genderInputs.forEach((input)=>{

  input.addEventListener("click",function(){
    genderInputs.forEach((input)=>{
      input.classList.remove("btn-primary")
    })
    this.classList.add("btn-primary")
    this.querySelector("input[type='radio']").checked = true;
    genderveri = true;
  })
})

document.querySelector(".usermail input").addEventListener("focusout",function(){
  let userMail = this.value;
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  let mailWarn = document.querySelector(".usermail .warn");

  if(userMail.length == 0){
    mailWarn.innerHTML  = '';
  }else if(!mailExp.test(userMail)){
    mailveri = false;
    mailWarn.innerHTML = "<span class = 'text-red'>이메일을 다시 확인해주세요.</span>"
  }else{
    mailveri = true;
    mailWarn.innerHTML = "";
  }

  console.log(userMail)
})

document.querySelector(".phonenum input").addEventListener("focusout",function(){
  let phoneNum = this.value;
  let numWarn = document.querySelector(".phone .warn")


  if(phoneNum.length == 0){
    numWarn.innerHTML = essenInfo;
  }else{
    numWarn.innerHTML ="";
  }
})

document.getElementById("veribtn").addEventListener("click",function(){
  let phoneNum = document.querySelector(".phonenum input").value;
  phoneNum = phoneNum.replace(/[^0-9.]/g, '');
  document.querySelector(".phonenum input").value = phoneNum;
  let phoneWarn = document.querySelector(".phone .warn")
  let veriText = document.getElementById("veritext")

  let phoneLen;

  if(phoneNum.length < 10 || phoneNum.length > 11){
    phoneLen = false;
  }else{
    phoneLen = true;
  }

  let phoneNaN;

  if(!isNaN(phoneNum)){
    phoneNaN = true;
  }else{
    phoneNaN = false;
  }

  if(phoneLen&&phoneNaN == true){
    phoneWarn.innerHTML = "<span class='text-green'>인증번호를 발송했습니다.</span>"
    veriText.disabled = false;
    veriText.parentNode.classList.remove("disinput")
  }else{
    phoneWarn.innerHTML = "<span class ='text-red'>형식에 맞지 않는 번호입니다.</span>"
    veriText.disabled = true;
    veriText.parentNode.classList.add("disinput")
  }

})