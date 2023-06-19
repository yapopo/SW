// var text = "text contents"
// var app = document.getElementById("app")

// app.textContent = text;

// const : 변하지 않을 값에 설정함
// let : 변화할 수 있는 값에 설정함


// 버튼을 누르면 #number의 값이 1씩 증가한다
// 버튼을 변수저장 

const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")


// #number의 element도 변수로 저장

const number = document.getElementById("number")

let inC = 0

btn.addEventListener("click" , function(){
  inC = inC + 1;
  number.textContent = inC
  console.log(number)
})

btn2.addEventListener("click" , function(){
  inC = inC - 1;
  number.textContent = inC
  console.log(number)
})