$(function() {
  $('.slider-for').slick({
      //메인슬라이드
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-nav',
      autoplay: true,
      autoplaySpeed : 2000,
      infinite: true       
  });

  $('.slider-nav').slick({
      //메인슬라이드 버튼
      slidesToShow: 5,
      slidesToScroll: 5,
      asNavFor: '.slider-for',
      focusOnSelect: true,
      autoplay: true,
      infinite: false,
      swipe: false,
      swipeToSlide: false		
  });
});