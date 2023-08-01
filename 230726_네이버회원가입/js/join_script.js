$(".id-txt input").focusout(function(){
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

$(".pw-input input").focusout(function(){
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

$(".pw-check input").focusout(function(){
  let content = $(this).val().length;

  if(content == 0){
    $(".pw-check .alert").css("display","block")
    $(".pw-check p.alert").text("필수 정보입니다.")
    $(".pw-check p.alert").css("color","red")
    $(".pw-check-img").removeClass("not-ok")
    $(".pw-check-img").removeClass("ok")
  }else if()


})