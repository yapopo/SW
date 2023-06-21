

window.addEventListener("mousemove", (event) => {
  const pointer = document.getElementById("pointer")
  // console.log(event.clientX , event.clientY)
  console.log(`X값: ${event.clientX}, Y값: ${event.clientY}`)

  pointer.style.top = `${event.clientY - (pointer.offsetHeight/2)}px`;
  pointer.style.left = `${event.clientX - (pointer.offsetWidth/2)}px`;


})