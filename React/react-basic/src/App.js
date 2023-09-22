
import './App.css';
// import Nav from './component/header/Nav';
// import Back from './component/main/Back';
// import Card from './component/main/Card';
import CommentList from './component/CommentList';


function App() {
  // return()안에 html작성
  // 무족건 하나의 태그로 시작해서 끝내야햔다(병렬기입X)
  return (
    <div className="App">
      {/* <Nav/>
      <Back/>
      <Card/> */}

      <CommentList/>
    </div>
  );
}

export default App;

// Reactjs code snippets 확장깔기 -> rsc+Tab키
