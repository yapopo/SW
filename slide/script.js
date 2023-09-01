$(".slider").slick({
              dots: true,
              autoplay : true,
              autoplaySpeed : 1000,
              arrows: false,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
  
      customPaging : function(slider, i) {
          var title = $(slider.$slides[i]).data('title');
          return '<a class="pager__item"> '+title+' </a>';
      },
  
  });
  