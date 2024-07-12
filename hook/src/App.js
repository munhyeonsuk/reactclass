import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const bgcolor = ["red", "green", "blue", "pink"];
  //body태그의 배경색을 바꾸고 싶음 useEffect를 통해 갈수 있음. html 상륙이후 실행. useState는 컴퍼넌트 밖으로 못나감
  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor[count];
  }, [count])
  //count가 변경되면 그때마다 함수를 실행하겠다
  return (
    <>
      <div className="App">
        <button onClick={()=>{
          setCount(count < bgcolor.length -1 ? count +1 : 0);
          //대입식 절대 불가 연산식만
        }}> {count}증가해줘</button>

        <button onClick={()=>{
          setCount(count >0 ? count -1 : bgcolor.length -1);
        }}> {count}감소해줘</button>
      </div>

      <div>
        {//map에서 this의 여부에 따라 화살표 함수 결정. this쓸거면 function, this안쓰면 화살표(훨씬 가벼움)
          bgcolor.map((v, i)=>{
            return(
              <button onClick={()=>{ setCount(i)}}>{v}</button>
            )
          })
        }
      </div>
    </>

  );
}

export default App;
