const container = document.querySelectorAll(".container")

container.forEach(item => {
  const bar = item.querySelector(".bar")
  const number = item.querySelector(".number")
  console.log(bar.dataset.number)

  const dataNumber = bar.dataset.number;

  bar.style.width = dataNumber + '%'
  number.textContent = dataNumber;

  let index = 0;
  let interval;

  interval = setInterval(()=> {
  index++
  if(index <= dataNumber){
    bar.style.width = index + "%"
    number.textContent = index
  }
}, 50)

})


// const bar = item.querySelector(".bar")

// const number = item.querySelector(".number")

// const dataNumber = bar.dataset.number;

// bar.style.width = dataNumber + '%'
// number.textContent = dataNumber;



