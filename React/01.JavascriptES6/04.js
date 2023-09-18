let person = {
  nam : 'jason',
  age : 66
}

// 삼항연산자
// person이 존재하면, person.name //// 업다면 console.log에 '없다'고 표시

console.log(person.name ? person.name : '없다')

console.log(person.age >= 18 ? '성인입니다' : '미성년자입니다')


console.log((person.age >= 65) ? '노인입니다' : (person.age >= 18) ? '성인입니다' : '미성년자입니다')