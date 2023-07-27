$("label").on("click" , function(e){
  e.preventDefault();

  $(this).children(".checkbox-img").toggleClass("checked");

  if($(this).children(".checkbox-img").hasClass("checked")){
    $(this).children('input[type = "checkbox"]').attr("checked",true)
  }else{
    $(this).children('input[type = "checkbox"]').removeAttr("checked")
  }

})
