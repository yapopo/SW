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
  
  return (
    <div>
      <h1>{count}</h1>
      <h1>{title}</h1>
      <button onClick={() => setCount(count+1)}>1씩증가</button>
      <button onClick={
        ()=> {let titleCopy = [...title];
          titleCopy = 'Bruce';
          setTitle(titleCopy);
        }}>title바꾸기</button>
    </div>
  );
}

export default State;