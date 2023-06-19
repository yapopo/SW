
const salaryElem = document.getElementById("salary")
const salary = salaryElem.textContent
// console.log(salaly)

const resultElem = document.getElementById("result")
let result = resultElem.textContent;
// console.log(result)

const actionElem = document.getElementById("action")
actionElem.addEventListener("click", () => {
  const timeElem = document.getElementById("time");
  let timeValue = timeElem.value
  result = timeValue * salary;
  resultElem.textContent = result;
})
