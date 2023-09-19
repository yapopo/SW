// component 로 만들 jsx파일은 무조건 앞글자듣 대문자로!!

import React from "react";

function Box(){
  return(
    // 전체를 감싸는 태그는 하나만 있어야 한다
    <div>
      <h1>First component!</h1>
    </div>

  )
}

export default Box;