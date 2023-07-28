$("label").on("click" , function(e){
  e.preventDefault();

  $(this).children(".checkbox-img").toggleClass("checked");

  if($(this).children(".checkbox-img").hasClass("checked")){
    $(this).children('input[type = "checkbox"]').attr("checked",true)
  }else{
    $(this).children('input[type = "checkbox"]').removeAttr("checked")
  }

})

$('.total label').on('click', function(){
  if($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
    $(".agree").find("input[type = 'checkbox']").attr("checked",true)
  } else {
    $('.agree').find('.checkbox-img').removeClass('checked');
    $(".agree").find("input[type = 'checkbox']").removeAttr("checked")
  }
})


$(".agree label").on("click",function(){
  let len = $(".agree .checkbox-img").length;
  let checkLen = $(".agree .checked").length;

  if(len == checkLen){
    $(".total label").children(".checkbox-img").addClass("checked");
    $(".total label").children("input[type = 'checkbox']").attr("checked",true);
  }else{
    $(".total label").children(".checkbox-img").removeClass("checked");
    $(".total label").children("input[type = 'checkbox']").removeAttr("checked");
  }

})

$("#submit").on("click",function(e){

  let len = $(".req .checkbox-img").length;
  let checkLen = $(".req .checked").length;

  e.preventDefault();

  if(len !== checkLen){
    $(".req-alert").css("visibility","visible")
  }else{
    $(".req-alert").css("visibility","hidden")
    $(".join-form form").submit()
  }


})

$("#cancle").on("click",function(){
  location.href = "http://www.naver.com"
})


