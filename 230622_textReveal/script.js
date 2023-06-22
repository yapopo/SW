const title = document.getElementById("title")

const chars = title.innerText.split("")

title.innerText = '';

chars.forEach((on , index) => {
  const span = document.createElement("span")
  // element 생성하기
  span.classList.add("on")
  span.textContent = on
  title.appendChild(span)
  // 자식요소로 삽입

  setTimeout( () => {
    span.classList.add("active")
  } , 200*index)
})