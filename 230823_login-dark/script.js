
$("#id").keypress(function(){
  let userId = $(this).val();

  if(userId.length > 0){
    $(".id").addClass("on")
    $("#id").addClass("on")
  }
})

$("#pw").keypress(function(){
  let userPw = $(this).val();

  if(userPw.length > 0){
    $(".pw").addClass("on")
    $("input").addClass("on")
    $(".pw-show").addClass("active")
  }
})

$("#id").keydown(function(){
  let userId = $(this).val();

  if(userId.length == 0){
    $(".id").removeClass("on")
    $("#id").removeClass("on")
  }
})

$("#pw").keydown(function(){
  let userPw = $(this).val();

  if(userPw.length == 0){
    $(".pw").removeClass("on")
    $("#pw").removeClass("on")
    $(".pw-show").removeClass("active")
  }
})

$(".pw-show").click(function(){
  $(this).toggleClass("hide")

  if($(this).hasClass("hide")){
    $(this).text("비밀번호 숨기기")
    $("#pw").attr("type","text")
  }else{
    $(this).text("비밀번호 표시")
    $("#pw").attr("type","password")
  }
})