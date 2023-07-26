

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

  console.log($(e.target))
  console.log(e.target)

  // jQurey의 e.target은 객체로 반환한다
  // jQurey에서는 객체비교를 위해서는 ==가 아닌 .is()사용
  // .is()메서드의 반대는 != 로 사용한다
  // JS의 == 부등호는 객체의 내용이 아닌 참조를 비교하므로 값이 같아도 False를 반환
  // 객체가 가지고 있는 실제 값(데이터) / 객체가 저장되어 있는 메모리 주소(참조)
})

