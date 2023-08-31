<<<<<<< HEAD
$(".slider").slick({
  dots: true,
              arrows: false,
              infinite: false,
              slidesToShow: 2,
              slidesToScroll: 2,
  
      //autoplay: true,
      //dots: true
      customPaging : function(slider, i) {
          var title = $(slider.$slides[i]).data('title');
          return '<a class="pager__item"> '+title+' </a>';
      },
  
      //responsive: [{ 
      //    breakpoint: 200,
      //    settings: {
      ///        d
      //    } 
      //}]
  });
  
=======
$(function() {
  $('.slider-for').slick({
      //메인슬라이드
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-nav',
      autoplay: true,
      autoplaySpeed : 2000,
      infinite: true,
      arrows : false       
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
      swipeToSlide: false,
      arrows : false		
  });
});
>>>>>>> 31f744b1590cfc0ba1dbc386a065b373dc10b61a
