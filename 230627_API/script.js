// let promise = new Promise((resolve,reject)=> {
//   setTimeout(()=> {
//     resolve("응답을 받았습니다")
//   },2000)
// })

// promise.then(result => console.log(result))


const posts = []
let todo = fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
todo.then(response => response.json())
.then(json => json.forEach(ImageData=>{
  // const p = document.createElement("p")
  // const h2 = document.createElement("h2")
  // h2.textContent = item.name
  // p.textContent = item.email

  // app.appendChild(h2)
  // app.appendChild(p)

  // console.log(item)

  const img = document.createElement("img")
  img.src = ImageData.url

  app.appendChild(img)
  
  console.log(ImageData)
 } ))



const app = document.getElementById("app")

