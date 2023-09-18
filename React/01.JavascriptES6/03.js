let person = {
  name : 'jason',
  age : 22
}

// person 객체복사 방법
// 1. 얕은복사 : 새로운 개체에 적용시키기
// 2. 깊은복사 : ...

let person2 = {...person}
console.log(person)
console.log(person2)

let person3 = person;
console.log(person3)

console.log(person == person2)
console.log(person == person3)

// 얕은 복사는 새로운개체생성이 아니라 기존객체의 주소값을 복사해서 객체를 참조하는 변수가 두개가 된것이지 새로운 객체가 아니다.
// 깊은 복사는 객체를 가르키고 있는 화살표가 동일하다.

let num = [1,2,3,4,5]
let num2 = [...num,6,7,8]
console.log(num2)




