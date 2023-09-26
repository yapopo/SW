import React from 'react';
import './Box.css'

const Box = (props) => {

  let result;

  if(props.title == 'Computer' && props.result !== 'tie' && props.result !==''){
    result = props.result === 'win' ? 'lose' : 'win'
  }else{
    result = props.result;
  }

  return (
    <div>

      <div className={`box ${result}`}>
          <h1>{props.title}</h1>
          {/* null 이 아닐때만 값이 렌더링 되도록 조건부를 줌 */}
          <h2>{props.select && props.select.name}</h2>
          <div className='imgbox'>
            <img src={props.select && props.select.img} alt={props.select && props.select.name} />
          </div>
          <h2>{result}</h2>
        </div>

    </div>
  );
};


export default Box;