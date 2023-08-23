
$("#id").keyup(function(){
  let userId = $(this).val();

  if(userId.length > 0){
    $(".id").addClass("on")
    $("#id").addClass("on")
    $(".login").attr("disabled", false)
  }else{
    $(".id").removeClass("on")
    $("#id").removeClass("on")
  }
})

$("#pw").keyup(function(){
  let userPw = $(this).val();

  if(userPw.length > 0){
    $(".pw").addClass("on")
    $("input").addClass("on")
    $(".pw-show").addClass("active")
  } else {
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

$("input").keyup(function(){
  let idLen = $("#id").val().length;
  let pwLen = $("#pw").val().length;
  let len = idLen + pwLen

  console.log(len)

  if(len == 0){
    $(".login").attr("disabled", true)
  }else{
    $(".login").attr("disabled", false)
  }
})

$(".mode").click(function(){
  $(".wrapper").toggleClass("dark")
  $(".box1").toggleClass("dark")
  $("input").toggleClass("dark")
  $(".box2").toggleClass("dark")
  $(".download").toggleClass("dark")
  $(".mode").toggleClass("dark")
  $(".logo").toggleClass("dark")

  if($(".mode").hasClass("dark")){
    $(".mode").text("Light mode")
  }else{
    $(".mode").text("Dark mode")
  }

  if($(".logo").hasClass("dark")){
    $(".logo img").attr("src","./images/logo-dark.png")
  }else{
    $(".logo img").attr("src","./images/logo-light.png")
  }

})