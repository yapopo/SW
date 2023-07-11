$(".gnb > li").hover(function(){
  $(this).find("ul").stop().slideDown(500);
  $(this).find("a").addClass("on")
}, function(){
  $(this).find("ul").stop().slideUp(500);
  $(this).find("a").removeClass("on");
})