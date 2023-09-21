import React from 'react';


// map() 함수
// 코드를 간결하고 가독성있게 유지하는것에 유용
// 모든 Array(배열) 뒤에 사용가능 (for each문처럼)
// map() 함수는 key값을 요구하는 warning이 뜨는데 큰 오류는 아니어서 보통 index값을 key값으로 넣으면 된다

const map = () => {
  return (
    <div>
      {[1,2,3].map((item,index)=>{
        return(
          <div key={index}>
            <div>배열 안의 값 : {item}</div>
            <div>배열의 인덱스 값 : {index}</div>
          </div>
        )
      })}
    </div>
  );
};

export default map;