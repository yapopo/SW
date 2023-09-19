
import './App.css';
import User from './component/User'
import Practice from './component/Practice';


function App() {
  // return()안에 html작성
  // 무족건 하나의 태그로 시작해서 끝내야햔다(병렬기입X)
  return (
    <div className="App">
      <User/>
      <Practice/>
    </div>
  );
}

export default App;
