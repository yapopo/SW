$(document).ready(function(){
  $('.slick-test').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  // 재생/정지 버튼 컨트롤
  $('.play').click(function(){
    $('.slick-test').slick('slickPlay');
  }); 
  $('.stop').click(function(){
    $('.slick-test').slick('slickPause');
  });
});