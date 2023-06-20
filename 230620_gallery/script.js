const images = document.querySelector(".imgs");

const items = images.querySelectorAll(".img-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    if(item.classList.contains("active")){
      item.classList.remove("active")
    }else{
    items.forEach((item) => item.classList.remove("active"))
    item.classList.add("active");
    }
  })
})