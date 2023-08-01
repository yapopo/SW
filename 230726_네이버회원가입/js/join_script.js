$(".id-txt input").focusout(function(){
  let content = $(".id-txt input").val().length;

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
})