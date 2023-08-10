// let slideList = document.querySelector('.slide-list');
// let slideItems = document.querySelectorAll('.slide-list li');

// let prevBtn = document.querySelector('.prev');
// let nextBtn = document.querySelector('.next');

// let currentSlide = 0;

// nextBtn.addEventListener('click', function(){
//   // slideItems 배열 length의 -1보다 값이 작을 때
//   if(currentSlide < slideItems.length - 1){
//     currentSlide++;
//     slideList.style.transform = `translateX(-${currentSlide * 600}px)`
//   }
// })

// prevBtn.addEventListener('click', function(){
//   if(currentSlide > 0){
//     currentSlide--;
//     slideList.style.transform = 'translateX(-' + currentSlide * 600 + 'px)'
//   }
// })

// $(document).ready(function(){
//   $(".slide-list").slick({
//     infinite: true,
//     slidesToShow: 1,
//     autoplay : true,
//     arrows : true,
//     autoplaySpeed : 3000,
//     speed : 1000,
//     pauseOnHover:true,
//   });
// });

$('.slide-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});