

// $(".open").click(function(){
//   $(".overlay").stop().fadeIn()
// })

// $(".close").click(function(){
//   $(".overlay").stop().fadeOut()
// })

// $(".overlay").on("click",function(e){
//   if($(e.target) == $(".overlay")){
//     $(".overlay").fadeOut()}

//     console.log($(e.target))
// })

$(".open").on("click", function(){
  $(".overlay").addClass("show");
})

$(".close").on("click", function(){
  $(".overlay").removeClass("show");
})

$(".overlay").on("click",function(e){
  if($(e.target).is(".overlay")){
    $(".overlay").removeClass("show");
  }
})