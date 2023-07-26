// 0번 버튼 클릭 했을 때 
// 0번째 tab-item한테 blue 클래스 추가
// 0번째 tab-content한테 show 클래스 추가

// $('.tab-item').eq(0).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-item').eq(1).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(1).addClass('show');
// })


// 코드를 확장성 있게 작성 
// 반복문을 이용해서 .tab-item class length만큼 반복
for(let i = 0; i < $('.tab-item').length; i++) {
  $('.tab-item').eq(i).on('click', function(){

  })
}

function tabOpen(num){

  $('.tab-item').removeClass('blue');
  $('.tab-content').removeClass('show');

  $(".tab-item").eq(num).addClass('blue');
  $('.tab-content').eq(num).addClass('show');
}

// document.querySelector(".tab-list").addEventListener("click",(e)=>{
//   if(e.target == document.querySelectorAll(".tab-item")[0]){
//     tabOpen(0)
//   }else if(e.target == document.querySelectorAll(".tab-item")[1]){
//     tabOpen(1)
//   }
// })

document.querySelector(".tab-list").addEventListener("click",(e)=>{
  tabOpen(e.target.dataset.id)
})