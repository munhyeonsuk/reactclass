
import './App.css';
import { Title, Menubtn } from './component/Common';

const tabmn = ["탄산", "주스", "커피차/차", "스포츠/건강음료", "생수", "탄산수"];

function App() {
  return (
  <section>
  <Title> 칠성몰 인기 상품</Title>
  <div className='text-center'>
    {tabmn.map((v,i)=>{
      return(
        <Menubtn className={`mx-2 ${i===0 ? 'active' : null}`}>{v}</Menubtn>
      )
    })}
  </div>
  </section>
  );
}

export default App;
