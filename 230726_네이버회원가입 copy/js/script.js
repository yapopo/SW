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



