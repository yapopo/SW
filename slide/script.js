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
  