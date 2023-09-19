import React from "react";

function User(){
  let name = 'Jason'
  return(
    <div>
      <h1 className="text">안녕하세요, {name === 'Jason'? name : '???'}님!</h1>
      
    </div>
  )
}

export default User;