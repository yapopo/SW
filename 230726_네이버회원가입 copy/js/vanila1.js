let labels = document.querySelectorAll("label")

let totalLabel = document.querySelector(".total label")

let agreeAll = document.querySelectorAll(".agree")

let agreeLabel = document.querySelectorAll(".agree label")

let submitBtn = document.querySelector("#submit")

let cancleBtn = document.querySelector("#cancle")



labels.forEach(function(label){
  label.addEventListener("click",function(e){

    e.preventDefault();

    this.querySelector(".checkbox-img").classList.toggle("checked")

    let inputCheck = this.querySelector("input[type = 'checkbox']")


    if(this.querySelector(".checkbox-img").classList.contains("checked")){
      inputCheck.checked = true;
    }else{
      inputCheck.checked = false;
    }

  })
})

agreeAll.forEach((agree)=>{
  totalLabel.addEventListener("click",function(){
    
    if(this.querySelector(".checkbox-img").classList.contains("checked")){
      agree.querySelector(".checkbox-img").classList.add("checked")
      agree.querySelector("input[type = 'checkbox']").checked = true;
    }else{
      agree.querySelector(".checkbox-img").classList.remove("checked")
      agree.querySelector("input[type = 'checkbox']").checked = false;
    }

  })

})

agreeLabel.forEach((alabel)=>{

  alabel.addEventListener("click",()=>{
    let len = document.querySelectorAll(".agree .checkbox-img").length
    let chkLen = document.querySelectorAll(".agree .checked").length

    
    if(len == chkLen){
      totalLabel.querySelector(".checkbox-img").classList.add("checked")
      totalLabel.querySelector("input[type = 'checkbox']").checked = true;
    }else{
      totalLabel.querySelector(".checkbox-img").classList.remove("checked")
      totalLabel.querySelector("input[type = 'checkbox']").checked = false;
    }

  })


})

submitBtn.addEventListener("click",(e)=>{
  e.preventDefault();

  let len = document.querySelectorAll(".req .checkbox-img").length
  let reqLen = document.querySelectorAll(".req .checked").length

  if(len != reqLen){
    document.querySelector(".req-alert").style.visibility = "visible"
  }else{
    document.querySelector(".req-alert").style.visibility = "hidden"
    document.querySelector(".join-form form").submit()
  }

})

cancleBtn.addEventListener("click",()=>{
  // 기본창에서이동
  // location.href = "http://www.naver.com"
  // 주소이동후 뒤로가기 없음
  // location.replace("http://www.naver.com")
  // 새창에 주소
  window.open("http://www.naver.com")
})



