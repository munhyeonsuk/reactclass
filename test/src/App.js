
import './App.css';
import React, {useState} from 'react';
import { Title, Menubtn } from './component/Common';

const tabmn = ["탄산", "주스", "커피차/차", "스포츠/건강음료", "생수", "탄산수"];

function App() {
  const [tabnum, setTabnum] = useState(0)

  return (
  <section>
  <Title className='my-3 pb-3'> 칠성몰 인기 상품</Title>
  <div className='text-center'>
    {tabmn.map((v,i)=>{
      return(
        <Menubtn className={`mx-2 ${i===tabnum ? 'active' : null}`} onClick={()=>{setTabnum(i)}} >{v}</Menubtn>
      )
    })}
  </div>
  </section>
  );
}

export default App;
