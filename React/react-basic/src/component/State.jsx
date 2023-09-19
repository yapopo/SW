import React from 'react';
import { useState } from 'react';


// useState()
// Javascript 변수 다루듯이 값을 직접 수정할 수 없다

// 1. import { useState } from 'react';
// 2. let[변수이름 ,set+변수이름(상태변경함수가 됨)] = useState(초기값)
// 3. state는 등호로 상태를 변경할 수 없다.


const State = () => {
  // let num = 0;
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState('Jason');
  let [name, setName] = useState(['이름1','이름2','이름3'])
  let [bg, setBg] = useState('white');

  let changeBg = ()=>{
    let red = 'red';
    setBg(red)
  }
  
  return (
    <div style={{background : bg}}>
      <h1>{count}</h1>
      <h1>{title}</h1>
      <button onClick={() => setCount(count+1)}>1씩증가</button>
      <button onClick={
        // state변경 함수는 기존값 state가 가지고 있는 값을 비교해서 같은 값이면
        // 변경하지 않고, 다른값이면 state함수 호출값으로 변경시켜준다
        ()=> {let titleCopy = [...title];
          titleCopy = 'Bruce';
          setTitle(titleCopy);
        }}>title바꾸기</button>

        <h1>{name}</h1>
        <button onClick={
          ()=>{
            let nameCopy = [...name]
            nameCopy[0] = '이름4'
            setName(nameCopy)
          }
        }>이름1변경</button>

        <button onClick={changeBg}>배경색</button>


    </div>
  );
}

export default State;