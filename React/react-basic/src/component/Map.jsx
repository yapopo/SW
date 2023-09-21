import React from 'react';


// map() 함수
// 코드를 간결하고 가독성있게 유지하는것에 유용
// 모든 Array(배열) 뒤에 사용가능 (for each문처럼)
// map() 함수는 key값을 요구하는 warning이 뜨는데 큰 오류는 아니어서 보통 index값을 key값으로 넣으면 된다

const Map = () => {

  let num = [1,2,3,4,5];
  let arrPlus = num.map((num)=>num + 1)

  // console.log(arrPlus)

  // num의 제곱근
  let newArr = num.map((num) => {
    // 제곱 구하는 함수 Math.pow()
    return Math.pow(num, 2)
  })
  console.log(newArr)


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

      {
        [1,2,3,4,5].map((num,index)=>{
          return num + index
        })
      }

      {
        ['bruce','jason','dick','tim','damian'].map((item,index)=>{
          // let upperItem = item.toUpperCase();

          return(
            <div key={index}>{item.toUpperCase()}</div>
          )

        })
      }

      {
        // 객체 속성값 추출하기
        [
          {name : 'Batman' , type : 'Hero'},
          {name : 'Joker' , type : 'Villan'},
          {name : 'Redhood' , type : 'Antihero'},
        ].map((info,index)=>{
          return(
            <div key={index}>이름 : {info.name} /  타입 : {info.type}</div>
          )
        })
      }

    </div>
  );
};

export default Map;