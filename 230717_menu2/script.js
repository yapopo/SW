$('.main-menu li, .submenu-wrapper').hover(function(){
  // hover시 실행 할 함수
  $('.submenu-wrapper').stop().slideDown(500);
}, function(){
  // leave 됐을 때 실행 할 함수
  $('.submenu-wrapper').stop().slideUp(500);
})

$(".submenu-list > li").hover(function(){
  let i = $(this).index();
  console.log(i)

  $(".main-menu").find("a").eq(i).addClass("on")

},function(){
  let i = $(this).index();
  $(".main-menu").find("a").eq(i).removeClass("on")
})