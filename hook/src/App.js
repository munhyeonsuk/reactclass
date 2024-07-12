import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const bgcolor = ["red", "green", "blue"];
  //body태그의 배경색을 바꾸고 싶음 useEffect를 통해 갈수 있음. html 상륙이후 실행. useState는 컴퍼넌트 밖으로 못나감
  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor[count];
  }, [count])
  return (
    <div className="App">
      <button onClick={()=>{
        setCount(count < bgcolor.length -1 ? count +1 : 0);
        //대입식 절대 불가 연산식만
      }}> {count}증가해줘</button>

      <button onClick={()=>{
        setCount(count -1);
      }}> {count}감소해줘</button>
    </div>
  );
}

export default App;
