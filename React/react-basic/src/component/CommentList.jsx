import React, { useState } from 'react';
import Comment from './Comment';


let comments = [
  {
    name : '강다은',
    content : '리액트를 조지겠다'
  },
  {
    name : '강다은2',
    content : '하지만 조져지는것은 나였다'
  },
  {
    name : '강다은3',
    content : '하얗게 불태웠어'
  }

]



const CommentList = () => {

  let [list,setList] = useState(comments);

  let [name,setName] = useState();
  let [text,setText] = useState();

  // 삼항연산자로 value확인하기

  let addList = ()=>{
    name === '' || text === '' ? alert('이름과 글을 적어주세요') : (()=>{
      let add = {name : name, content : text};
      setList([add, ...list])
      setName('')
      setText('')
    })()
    // 즉시실행 함수 (IIFE)
  }

  let deletList = (index)=>{
    let newList = [...list];
    // splice(배열 변경할 인덱스 값을 넣어준다, 제거할 요소의 수)
    newList.splice(index,1);
    setList(newList)
    console.log(index)
  }


  return (
    <div>
      {
        list.map((items,i)=>{
          return(
            <Comment name={items.name} text={items.content} key={i} delete={()=>deletList(i)}/>
          )
        })
      }
      <span>작성자 : <input value={name} onChange={(e) => setName(e.target.value)}/></span>
      <span>내용 : <input value={text} onChange={(e) => setText(e.target.value)}/></span>
      <button type='button' onClick={addList}> 글작성 </button>
    </div>
  );
};

export default CommentList;