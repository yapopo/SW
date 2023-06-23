const list = ["a","b","c","d","e"]
const app = document.getElementById("app")

// list.forEach((item,index) => {
//  const p = document.createElement("span")
//  p.textContent = item
//  app.appendChild(p)

//  console.log(app)
// })

for(let index = 0; index < list.length; index++){
  const p = document.createElement("p")
  p.textContent = list[index]
  app.appendChild(p)
}