import { useEffect } from "react";
import styled from "styled-components";

const Allmenu = styled.button`
      display: inline-block;
      font-family: bootstrap-icons !important;
      font-style: normal;
      font-weight: 400 !important;
      font-variant: normal;
      text-transform: none;
      &.close:before{
        content : '\\F62A';
      }
      &:before{
        content : '\\F479';
      }
`

function App() {

  useEffect(()=>{
    // 랜더링 html이 생성완료된 시점
    // window.onload와 같다
    // 웹으로 제작한 자바스크립트 여기로
    document.querySelector('#allMenu').addEventListener("click",function(){
       this.classList.toggle('close')
    })
  }, [])

  return (
    <div className="App">      
      <div >
        <Allmenu className="close" id="allMenu"></Allmenu>        
      </div>    
    </div>
  );
}

export default App;
