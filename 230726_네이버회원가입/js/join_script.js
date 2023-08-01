$("#id").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".id .alert").css("display","block")
    $(".id p.alert").text("필수 정보입니다.")
    $(".id p.alert").css("color","red")
  }else if(content < 5 ||  20 < content){
    $(".id .alert").css("display","block")
    $(".id p.alert").text("5 ~ 20자의 영문소문자만 가능합니다.")
    $(".id p.alert").css("color","red")
  }else{
    $(".id .alert").css("display","block")
    $(".id p.alert").text("멋진 아이디네요!")
    $(".id p.alert").css("color","#03c75a")
  }

})

// id부분 script 끝

$("#pw").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".pw .alert").css("display","block")
    $(".pw p.alert").text("필수 정보입니다.")
    $(".pw p.alert").css("color","red")
    $(".pw-img").removeClass("not-ok")
    $(".pw-img").removeClass("ok")
  }else if(content < 8 ||  16 < content){
    $(".pw .alert").css("display","block")
    $(".pw p.alert").text("8 ~ 16자의 영문 대 소문자,숫자,특수문자를 사용하세요.")
    $(".pw p.alert").css("color","red")
    $(".pw-img").addClass("not-ok")
  }else{
    $(".pw .alert").css("display","none")
    $(".pw-img").removeClass("not-ok")
    $(".pw-img").addClass("ok")
  }

})

// pw script 끝

$("#pwchk").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".pw-check .alert").css("display","block")
    $(".pw-check p.alert").text("필수 정보입니다.")
    $(".pw-check p.alert").css("color","red")
    $(".pwchk-img").removeClass("ok")
  }else if($(".pw input").val() != $(".pw-check input").val()){
    $(".pw-check .alert").css("display","block")
    $(".pw-check p.alert").text("비밀번호가 일치하지 않습니다..")
    $(".pw-check p.alert").css("color","red")
  }else{
    $(".pw-check .alert").css("display","none")
    $(".pwchk-img").addClass("ok")
  }

})

// pw-check script 끝

$("#name").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".name .alert").css("display","block")
    $(".name p.alert").text("필수 정보입니다.")
    $(".name p.alert").css("color","red")
  }

})

// name script 끝

$(".year input").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".birth .alert").css("display","block")
    $(".birth p.alert").text("태어난 년도 4자리를 정확하게 입력하세요.")
    $(".birth p.alert").css("color","red")
  }else{
    $(".birth .alert").css("display","none")
  }
})

// year script 끝

$("#month").focusout(function(){
  let content = $(this).val()

  if(content == null){
    $(".birth .alert").css("display","block")
    $(".birth p.alert").text("태어난 월을 선택하세요.")
    $(".birth p.alert").css("color","red")
  }else{
    $(".birth .alert").css("display","none")
  }

})

// month script 끝

$(".date input").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".birth .alert").css("display","block")
    $(".birth p.alert").text("태어난 일(날짜) 2자리를 정확하게 입력하세요.")
    $(".birth p.alert").css("color","red")
  }else{
    $(".birth .alert").css("display","none")
  }
})

// date script 끝

$("#mail").focusout(function(){

let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let content = $("#mail").val()

 if(regExp.test(content) == false){
  $(".mail .alert").css("display","block")
  $(".mail p.alert").text("이메일 주소를 다시 확인해주세요.")
  $(".mail p.alert").css("color","red")
 }else{
  $(".mail .alert").css("display","none")
 }

})

// mail script 끝

$(".number input").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".number .alert").css("display","block")
    $(".number p.alert").text("필수 정보입니다.")
    $(".number p.alert").css("color","red")
  }

})