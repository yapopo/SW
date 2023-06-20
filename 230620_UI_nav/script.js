const list = document.querySelector(".list");
const listItem = Array.from(list.querySelectorAll(".list-item"));

// const char = ["a","b","c","d"]
// for(let i = 0; i < char.length; i++){
//   console.log(char[i])
// }

// char.forEach( (i) => {
//   console.log(i)
// })

listItem.forEach(item => {
  item.addEventListener("click", () => {
    listItem.forEach(item => item.classList.remove("active"))
    item.classList.add("active");
  })
})

