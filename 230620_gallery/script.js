const images = document.querySelector(".imgs");

const items = images.querySelectorAll(".img-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("active"))
    item.classList.add("active");
  })
})