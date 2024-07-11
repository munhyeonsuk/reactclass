import './App.css';
import {Title, Abtn,Button,Buttoncolor,Buttonany} from './commonui/ui'

function App() {
  return (
    <div className="App">
     <Title>나는 스타일컴포넌트입니다.</Title>
     <Title>베스트상품</Title>
     <Title>추천상품</Title>
     <h2>
        나는 타일틀입니다
        <Abtn>더보기</Abtn>
     </h2>
     <h2>
        나는 타일틀입니다
        <Abtn>응모하기</Abtn>
     </h2>
     <Button>나는 일반버튼ㅎ</Button>
     <Button primary>나는 일반버튼</Button>
     <Buttoncolor bgcolor="red" textbgcolor="white">난 배경색과 글자색 너가 결정</Buttoncolor>
     <Buttonany bgcolor="black" textbgcolor="white" fontSize="100px" fontfamily="맑은 고딕" >fontfamily는 삼항식으로</Buttonany>
    </div>
  );
}

export default App;