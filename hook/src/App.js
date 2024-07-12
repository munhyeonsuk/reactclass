import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={()=>{
        setCount(count +1);
        //대입식 절대 불가 연산식만
      }}> {count}증가해줘</button>

      <button onClick={()=>{
        setCount(count -1);
        //대입식 절대 불가 연산식만
      }}> {count}감소해줘</button>
    </div>
  );
}

export default App;
