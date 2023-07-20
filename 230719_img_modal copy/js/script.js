
$(".open-btn").click(function(){
  $(".modal-box").fadeIn()
  $(".overlay").fadeIn()
})

$(".close-btn").click(function(){
  $(".modal").fadeOut()
  $(".overlay").fadeOut()
})

$('.modal-list img').click(function(){
  let 이미지경로 = $(this).attr('src');
  let 대체텍스트 = $(this).attr('alt');

  $('.img-modal-wrapper img').attr({
    src : 이미지경로,
    alt : 대체텍스트
  })

  $(".img-modal-box").fadeIn();
  $(".overlay").fadeIn();
})