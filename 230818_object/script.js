let products = [
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    title : '나이키 에어 포스 1',
    price : '139,000원',
    size : ['250','255','260','270']

  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-394514a3-7686-4270-acf1-b1336c8dbef8/%EC%97%90%EC%96%B4%EB%A7%A5%EC%8A%A4-%EC%BD%94%EC%BD%94-%EC%97%AC%EC%84%B1-%EC%83%8C%EB%93%A4-uA23Pjod.png',
    title : '나이키 에어맥스 코코',
    price : '95,200원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/377c76b2-38e9-4728-9c98-61aff77543c8/%ED%8F%B0%ED%83%84%EC%B9%B4-%EC%99%80%ED%94%8C-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-HAwnuJaa.png',
    title : '나이키 폰탄카 와플',
    price : '77.300원',
    size : ['225','230','235','240','245','250']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    title : '나이키 에어 포스 1',
    price : '139,000원',
    size : ['250','255','260','270']

  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-394514a3-7686-4270-acf1-b1336c8dbef8/%EC%97%90%EC%96%B4%EB%A7%A5%EC%8A%A4-%EC%BD%94%EC%BD%94-%EC%97%AC%EC%84%B1-%EC%83%8C%EB%93%A4-uA23Pjod.png',
    title : '나이키 에어맥스 코코',
    price : '95,200원',
    size : ['230','240','250','260']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/377c76b2-38e9-4728-9c98-61aff77543c8/%ED%8F%B0%ED%83%84%EC%B9%B4-%EC%99%80%ED%94%8C-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-HAwnuJaa.png',
    title : '나이키 폰탄카 와플',
    price : '77.300원',
    size : ['225','230','235','240','245','250']
  }
]



  // document.querySelector(".box-item img").src = products[0].img
  // document.querySelector(".sho-info h2").innerHTML = products[0].title
  // document.querySelectorAll(".sho-info p")[0].innerHTML = products[0].price
  // document.querySelectorAll(".sho-info p")[1].innerHTML = products[0].size

  // console.log(document.querySelector(".sho-info p"))


// document.querySelectorAll(".box-item img").forEach((i,index)=>{
//   i.src = products[index].img
// })

// let info = document.querySelectorAll(".sho-info")

// info.forEach((i,index)=>{
//   i.querySelector("h2").innerHTML = products[index].title
//   i.querySelectorAll("p")[0].innerHTML = products[index].price
//   i.querySelectorAll("p")[1].innerHTML = products[index].size
// })

// 확장성이 좋다


// let boxItem = document.createElement("div");
// boxItem.classList.add("box-item")
// document.querySelector(".box-list").appendChild(boxItem);

// let shoInfo = document.createElement("div");
// shoInfo.classList.add("sho-info")
// boxItem.appendChild(shoInfo);

// let h2Tag = document.createElement("h2");
// let pTag = document.createElement("p")

// shoInfo.append(h2Tag,pTag)


products.forEach((i,index)=>{
  let boxItem = document.createElement("div");
  boxItem.classList.add("box-item")
  document.querySelector(".box-list").appendChild(boxItem);
  
  let image = new Image();
  boxItem.appendChild(image)
  image.src = i.img

  let shoInfo = document.createElement("div");
  shoInfo.classList.add("sho-info")
  boxItem.appendChild(shoInfo);

  let h2Tag = document.createElement("h2");
  let pTag1 = document.createElement("p")
  let pTag2 = document.createElement("p")
  h2Tag.innerHTML = i.title
  pTag1.innerHTML = i.price
  pTag2.innerHTML = i.size
  shoInfo.append(h2Tag,pTag1,pTag2)
})