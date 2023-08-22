// cookie

function setCookie(name,value,hours){
  let expires = '';

  if(hours){
    let date = new Date();

    date.setTime(date.getTime()+(hours * 60 * 60 * 1000))
    
    expires = ';expires' + date.toUTCString();

    document.cookie = name + '=' + (value || '') + expires + ';path=/';
  }

}


function getCookie(name){
  let nameEqu = name + '=';
  let cookies = document.cookie.split(';')

  for(let i = 0; i < cookies.length; i++){
    let cookie = cookies[i];

    if(cookie.indexOf(nameEqu) == 0){
      return cookie.substring(nameEqu.length, cookie.length);
    }

    return null;
  }
}

document.addEventListener("DOMContentLoaded",function(){
  let popup = document.querySelector(".pop-up")
  let nonePopup = document.getElementById("none-popup")
  let closeBtn = document.getElementById("close-btn")

  if(getCookie("hidePopup")){
    popup.style.display = "none";
  }

  closeBtn.addEventListener("click",function(){
    popup.style.display = "none";

    if(nonePopup.checked){
      setCookie("hidePopup","true",24)
    }
  })
  
})