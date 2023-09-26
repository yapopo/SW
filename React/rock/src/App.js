import logo from './logo.svg';
import Box from './component/Box';
import { useState } from 'react';

let choice = {
  rock : {
    name : 'rock',
    img : 'https://cdn-icons-png.flaticon.com/512/2142/2142439.png'
  },

  paper : {
    name : 'paper',
    img : 'https://e7.pngegg.com/pngimages/53/291/png-clipart-computer-icons-volunteering-desktop-volunteer-icon-hand-heart.png'
  },

  scissors : {
    name : 'scissors',
    img : 'https://cdn-icons-png.flaticon.com/512/4892/4892290.png'
  }
}

function App() {

  let [userSelect,setUserSelect] = useState(null);
  let [comSelect,setComSelect] = useState(null);
  let [result,setResult] = useState('');

  // 클릭한 값과 컴퓨터의 정보 업데이트하기
  let play = (userChoice)=>{

    setUserSelect(choice[userChoice])
    
    let comChoice = randomChoice();
    setComSelect(comChoice)

    setResult(judgement(choice[userChoice],comChoice));
  }

  // 컴퓨터 랜덤값 선택
  let randomChoice = ()=>{
    let itemArr = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArr.length);

    let final = itemArr[randomItem];

    return choice[final];
  }

  let comjudgement = (result) => {
    return result ==='win'?'lose' : result ==='tie' ?'tie' : 'win'
  }

  // 승부가리기
  let judgement = (user,com)=>{
    if(user.name === com.name){
      return 'tie'
    }else if(user.name === 'rock')return com.name ==='scissors'?'win':'lose';
     else if(user.name === 'scissors')return com.name === 'paper'?'win':'lose';
     else if(user.name === 'paper')return com.name === 'rock'?'win':'lose';
      
    
  }

  return (
    <div className="App">
      <div className="inBox">
        <Box title='You' select={userSelect} result={result}/>
        <Box title='Computer' select={comSelect} result={result}/>
      </div>

      <div className="btn-list">
        <button type='button' onClick={()=>play('rock')}>rock</button>
        <button type='button' onClick={()=>play('scissors')}>scissors</button>
        <button type='button' onClick={()=>play('paper')}>paper</button>
      </div>
    </div>
  );
}

export default App;
