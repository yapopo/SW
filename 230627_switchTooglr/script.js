const con = document.querySelector(".toggle-container")


let check = false;

con.addEventListener("click", (event) => {
  event.preventDefault()
  con.classList.toggle("active")
  const input = event.currentTarget.querySelector("input")
  input.checked = check;
  
  // if(check){
  //   check = false
  //   console.log(check)
  // }else{
  //   check = true
  //   console.log(check)
  // }

  check = !check
  console.log(check)
})