function multifly (number) {
  return number * 2;
}

console.log(multifly(2))


const multifly2 = (number) => {
  return number * 8 ;
}

console.log(multifly2(2))

const multifly3 = number => number * 2

console.log(multifly3(4))


class Pokemon {
  constructor() {
   this.pokemonName = "리자몽"}

showPokemonName () {
  console.log(this.pokemonName)
}
}





class Trainer extends Pokemon{
  constructor(traninerName = "지우"){
    super()
    this.name = traninerName
  }
  showTrainerName () {
    console.log(this.name)
  }
}

const trainer = new Trainer("웅이")
// trainer.name = "빛나"
trainer.showTrainerName()
trainer.showPokemonName()


// console.log(trainer.name)


// 스프레드 연산자

const pokemons = ["이상해씨","파이리","꼬부기","이상해풀"]
const NewPokemons = [...pokemons, "리자몽","거북왕"]

console.log(NewPokemons)

const numbers = [1,2,3]
const NewNumbers = [...numbers, 4,5]

console.log(NewNumbers)


const pokemonTrainer = {
  name : "지우"
}

const newTrainer = {
  ...pokemonTrainer,
  age : 13
}

console.log(newTrainer.name)


const char = {
  enLength : 26
}

const num = {
  ...char,
  alphabet : "char"
}

console.log(num)

// rest 연산자

const filterNumber = (...args) => {
  return args.filter(number => number === 1)
}

console.log(filterNumber(1,3,4,5,6,7,8,9,10))


const filterAl = (...args) => {
  return args.filter(item => item === "a")
}

console.log(filterAl("a","v","k","t","d","b","c","l"))


const filterPokemon = (...args) => {
  return args.filter(item => item === "꼬부기"|| item === "파이리")
}
//   && : AND  , || : OR
console.log(filterPokemon(...pokemons))

// const pokemons = ["이상해씨","파이리","꼬부기","이상해풀"]

const [c,d,e,f] = pokemons

console.log(c,d,e,f)

const {nickname , age} = {
  nickname : "금랑",
  age : 24
}

console.log(nickname,age)

const doubleNumber = numbers.map(num => num * 2)

console.log(doubleNumber)

const namedPokemon = pokemons.map(item => item + " 너로 정했다!")

console.log(namedPokemon)