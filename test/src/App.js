
import './App.css';
import React,{useEffect} from 'react';
import { Title, Menubtn } from './component/Common';

const tabmn = ["탄산", "주스", "커피차/차", "스포츠/건강음료", "생수", "탄산수"];

function App() {
  useEffect(()=>{
    const btns = document.querySelectorAll("button")
    btns[0].classList.add("active")
  },[])
  return (
  <section>
  <Title> 칠성몰 인기 상품</Title>
  <div className='text-center'>
    {tabmn.map((v,i)=>{
      return(
        <Menubtn className='mx-2'>{v}</Menubtn>
      )
    })}
  </div>
  </section>
  );
}

export default App;
