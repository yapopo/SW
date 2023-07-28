let mainChk = document.querySelector(".total label input[type = 'checkbox']")

let chkBox = document.querySelectorAll("input[type = 'checkbox']")

let chkboxImg = document.querySelectorAll(".checkbox-img")


// 체크박스가 체크되면 .checkbox-img에 .checked 추가

chkBox.forEach((items)=>{
  items.addEventListener("click",()=>{
   if(items.checked == true){
    items.nextElementSibling.classList.add("checked")
   }else{
    items.nextElementSibling.classList.remove("checked")
   }


  })
})

// .total label input이 체크되면 모든 체크박스가 체크되고 해체되면 전체해제

  mainChk.addEventListener("click",()=>{

    if(mainChk.checked == true){
      chkBox.forEach((items)=>{
        items.checked = true;
        items.nextElementSibling.classList.add("checked")
      })
    }else{
      chkBox.forEach((items)=>{
        items.checked = false;
        items.nextElementSibling.classList.remove("checked")
      })
      
    }

  })

  // 모든 체크박스 중 하나라도 체크가 해제되면 .total label input의 체크박스 해제
  // 모든체크박스가 체크되면 .total label input의 체크박스도 체크

  chkBox.forEach((items)=>{

    items.addEventListener("click",()=>{
      let len = chkBox.length

      console.log(len)
    })

  })