$(".gnb > li").hover(function(){
  $(this).find("ul").stop().slideDown(300);
  $(this).find("a").addClass("on")
}, function(){
  $(this).find("ul").stop().slideUp(300);
  $(this).find("a").removeClass("on");
})