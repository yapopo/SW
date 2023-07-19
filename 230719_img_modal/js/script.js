

$(".modal-item").click(function(){
  let i =$(this).index();
  $(".modal").eq(i).addClass("active")
  $(".opacity").addClass("active")
  console.log(i)
})

$(".modal-btn button").click(function(){
  $(".modal").removeClass("active")
  $(".opacity").removeClass("active")
})