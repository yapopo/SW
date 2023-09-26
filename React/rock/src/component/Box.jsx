import React from 'react';
import './Box.css'

const Box = (props) => {
  return (
    <div>

      <div className='box'>
          <h1>{props.title}</h1>
          {/* null 이 아닐때만 값이 렌더링 되도록 조건부를 줌 */}
          <h2 className='click-result'>{props.select && props.select.name}</h2>
          <div className='imgbox'>
            <img src="https://cdn-icons-png.flaticon.com/512/2142/2142439.png" alt="바위이미지" />
          </div>
          <h2 className='result'>win</h2>
        </div>

    </div>
  );
};


export default Box;