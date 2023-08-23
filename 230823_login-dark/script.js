
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
