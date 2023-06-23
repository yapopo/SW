const input = document.getElementById("add-todo")

const addBtn = document.getElementById("add-button")

const list = document.getElementById("list")



const addList = () => {

    input.focus()
    const li = document.createElement("li")
    if(input.value.length === 0){
     return alert("문자를 입력해 주세요")
    }
    li.innerHTML = `${input.value}
    <button class="list-delete">&#x2716</button>`
    li.classList.add("list-item")
    list.appendChild(li)
    input.value = ''
  }

input.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    addList()
  }
})

addBtn.addEventListener("click", () => addList())




list.addEventListener("click", (event)=> {
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked")
  }
  if(event.target.tagName === "BUTTON"){
    event.target.parentElement.remove();
  }

  // console.log(list)
})

