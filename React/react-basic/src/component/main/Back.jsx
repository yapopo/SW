import React from 'react';
import './Back.css'

const Back = () => {
  return (
    <div>
      <Box layout='background' name='front-txt'/>
      <Box layout='top' name='second-txt'/>
    </div>
  );
};

function Box(props){
  // 조건부 렌더링

  let showBtn = props.name == 'front-txt' ? true : false
  return(
    <>
    <section className={props.layout}>
      <div className={props.name}>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Odit totam, perferendis nulla
           unde temporibus similique alias.
           Odit provident voluptatum illum.
        </p>
        {
        showBtn && <button className='front-btn' type='button' onClick={function() {alert('눌렀어용')}}>버튼</button>
        }
      </div>
    </section>
    </>
  )
}

export default Back;