let person = {
  name : 'jason',
  age : 21
}

let {name,age} = person;
console.log(name)

let arr = [1,2,3,4,5]

let [num1,num2] = arr
console.log(num1,num2)

// 배열안 나머지 값 가져오기
// ...이름은 자유롭게 지어도 되지만 주로 rest하는 이름으로 이용한다

let [a, b, ...rest] = arr
console.log(rest)