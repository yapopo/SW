$(".gnb-main-item").hover(function(){
  $(this).find("ul").stop().slideDown(500);
  $(this).find("ul > a").addClass("active")
}, function(){
  $(this).find("ul").stop().slideUp(500);
  $(this).find("ul > a").removeClass("active");
})

// vanila