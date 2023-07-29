let mainCheck = document.querySelector(".total label input[type = 'checkbox']")

let checkBox = document.querySelectorAll("input[type = 'checkbox']")

let submitBtn = document.getElementById("submit")







checkBox.forEach((items)=>{

  items.addEventListener("click",()=>{
    if(items.checked == true){
      items.nextElementSibling.classList.add("checked")
    }else{
      items.nextElementSibling.classList.remove("checked")
    }
  })

  
})

mainCheck.addEventListener("click",()=>{
  if(mainCheck.checked == true){
    checkBox.forEach((item)=>{
      item.checked = true;
      item.nextElementSibling.classList.add("checked")
    })
  }else{
    checkBox.forEach((item)=>{
      item.checked = false;
      item.nextElementSibling.classList.remove("checked")
    })
  }
})

checkBox.forEach((items)=>{
  items.addEventListener("click",()=>{

    let len = document.querySelectorAll(".agree label")
    let chklen = document.querySelectorAll(".agree .checked")
  
    if(len.length == chklen.length){
      mainCheck.checked = true;
      mainCheck.nextElementSibling.classList.add("checked")
    }else{
      mainCheck.checked = false;
      mainCheck.nextElementSibling.classList.remove("checked")
    }

  })
})

submitBtn.addEventListener("click",(e)=>{
  let len = document.querySelectorAll(".req")
  let chklen = document.querySelectorAll(".req .checked")
  const alert = document.querySelector(".req-alert")

  e.preventDefault()

  if(len.length != chklen.length){
    alert.style.visibility = "visible"
  }else{
    alert.style.visibility = "hidden"
    document.querySelector("form").submit
  }
})


document.getElementById("cancle").addEventListener("click",()=>{
  location.href = "https://www.naver.com";
})
