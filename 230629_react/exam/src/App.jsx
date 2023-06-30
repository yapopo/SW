// import './App.css'
// import Button from './components/Button.jsx'
// import Heading from './components/Heading'
// import Flex from './components/Flex'

// function App() { 
//   return (    
//     <>      
//       <Flex>       
//         <Heading title="안녕하세요"/>
//         <Button name="1번버튼" primary/>
//         <Button name="2번버튼" secondary/>
//         <Button name="3번버튼" />
//       </Flex>
//     </>
//   )
// }

// export default App

import './App.css'

import Flex from './components/Flex'

const images = [
  {id : 1, url :'/icecream1.jpeg', title : '초코아이스크림'},
  {id : 2, url :'/icecream2.jpeg', title : '바닐라아이스크림'},
  {id : 3, url :'/icecream3.jpeg', title : '딸기아이스크림'},
]
export default function App() {
  return (
    <>
    <Flex>
      {images.map(image => (
      <div key={image.id}>
      <figure className='image-wrapper' >
        <img className='image'src={image.url} alt={image.title}/>
       </figure>

       <h2>{image.title}</h2>
       </div>
       ))}
    </Flex>
    </>
  )
}
