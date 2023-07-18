// setTimeout(()=>{
//   document.querySelector(".count").classList.add("is-active")
//   console.log("없지롱")
//   // clearInterval(hex)
// },5000)


// Math.random() : 0이상 1미만의 부동소수점 난수를 생성
// Math.round() : 소수점 이하의 값을 반올림해서 정수로 변환
// 16진수로 표현하려면 0x를 표현하고자 하는 숫자를 앞에 붙임
// ff : (=RGB 255)
// toString(16) : 16진수 변환

// let hex = setInterval(()=>{
//  let randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16)
// document.querySelector(".count").style.backgroundColor = randomColor
// console.log(Math.round(Math.random()))
// },1000)

// rgb값으로 랜덤 컬러 변경
// 최솟값,최댓값을 지정하고 그 사이에서 랜덤한 값을 만드는 함수

function rand (min,max){
  return Math.round(Math.random() * (max - min + 1)+ min)}

  setInterval(()=>{
    let r = rand(0,255)
    let g = rand(0,255)
    let b = rand(0,255)

    console.log(r,g,b)

    
    document.querySelector(".count").style.backgroundColor = `rgb(${r},${g},${b})`
  } ,1000)