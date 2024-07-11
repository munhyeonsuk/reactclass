import { useState } from "react";
import styled from "styled-components";

const Allmenu = styled.button`
  &:before{
    content:"햄버거 아이콘 유니코드"
  }
`
const CLosemenu = styled.button`
  &:before{
    content:"닫기 부트스트랩 유니코드"
  }
`


function App() {
  const [allmenu, setAllmenu] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>{
        setAllmenu(!allmenu);
      }}>
        {
          allmenu ?  <CLosemenu /> : <Allmenu />
        }
      </button>
    </div>
  );
}

export default App;

