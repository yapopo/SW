function night(){
  if($("button").hasClass("active").hasClass("night")){
    $(".wrapper").css("color","#fff")
    $("nav ul li a").css("color","#fff")
    $(".logo").find("img").attr("src","./images/logo_w.png")
  }
}

// 시계

const clock = document.querySelector(".clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);



// button 배경 바꾸기

$("button").click(function(){
  $("button").removeClass("active")
  $(this).addClass("active")

  $(".wrapper").removeClass("morning")
  $(".wrapper").removeClass("afternoon")
  $(".wrapper").removeClass("evening")
  $(".wrapper").removeClass("night")
  

  if($(this).hasClass("morning")){
    $(".wrapper").addClass("morning")
    $(".phone-img").find("img").attr("src","images/phone_morning.png")
  }else if($(this).hasClass("afternoon")){
    $(".wrapper").addClass("afternoon")
    $(".phone-img").find("img").attr("src","images/phone_afternoon.png")
  }else if($(this).hasClass("evening")){
    $(".wrapper").addClass("evening")
    $(".phone-img").find("img").attr("src","images/phone_evening.png")
  }else if($(this).hasClass("night")){
    $(".wrapper").addClass("night")
    $(".phone-img").find("img").attr("src","images/phone_night.png")
  }

  if($(".wrapper").hasClass("night")){
    $(".wrapper").css("color","#fff")
    $("nav ul li a").css("color","#fff")
    $(".logo").find("img").attr("src","./images/logo_w.png")
  }else{
    $(".wrapper").css("color","#000")
    $("nav ul li a").css("color","#000")
    $(".logo").find("img").attr("src","./images/logo_b.png")
  }
})

