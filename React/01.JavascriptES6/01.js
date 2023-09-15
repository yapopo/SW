// objext shorthand Assignment
// ES6에서는 객체를 반환할 때 불필요한 반복을 하지 않아도 된다.

let name = 'jason'
let age = 21

let person = {
  name : name,
  age : age
}

console.log(person)

let person2 = {
  name, age
}

console.log(person2)