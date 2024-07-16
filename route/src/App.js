import{ Link, Routes, Route} from 'react-router-dom'
import About from './componant/About';
import Board from './componant/Board';
import './App.css';
import Entery from './componant/Entery';
function App() {
  return (
    <div className="App">
      <div>
        <a href="">로고</a>
        <Link to ='./about'>회사소개</Link>
        <Link to ='./board'>공지사항</Link>
      </div>
      <Routes>
        <Route path='/' element={<Entery></Entery>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/board' element={<Board></Board>}></Route>
      </Routes>
      <aside>
        저는 퀵입니다
      </aside>
      <footer>
        저는 하단입니다
      </footer>
    </div>
  );
}

export default App;
