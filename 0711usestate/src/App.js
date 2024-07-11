import { useState } from "react";
import styled from "styled-components";


const Allmenu = styled.button`
      display: inline-block;
      font-family: bootstrap-icons !important;
      font-style: normal;
      font-weight: 400 !important;
      font-variant: normal;
      text-transform: none;
      &:before{
        content : '\\F479';
      }
`

const Closemenu = styled.button`
      display: inline-block;
      font-family: bootstrap-icons !important;
      font-style: normal;
      font-weight: 400 !important;
      font-variant: normal;
      text-transform: none;
      &:before{
        content : '\\F62A';

      }
`

function App() {
  const [allmenu, setAllmenu] = useState(false);

  return (
    <div className="App">
      
      <div onClick={()=>{
        setAllmenu(!allmenu);
      }}>
        {
          allmenu ? 
          <Closemenu ></Closemenu> : 
          <Allmenu ></Allmenu>
        }        
      </div>
    
    </div>
  );
}

export default App
