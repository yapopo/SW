

$(".open").click(function(){
  $(".overlay").stop().fadeIn()
  $(".bg-overlay").stop().fadeIn()
})

$(".close").click(function(){
  $(".overlay").stop().fadeOut()
  $(".bg-overlay").stop().fadeOut()
})

$(".bg-overlay").click(function(){
  $(".overlay").stop().fadeOut()
  $(".bg-overlay").stop().fadeOut()
})