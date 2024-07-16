import{ Link, Routes, Route} from 'react-router-dom'
import About from './componant/About';
import Board from './componant/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Link to ='./about'>회사소개</Link>
        <Link to ='./board'>공지사항</Link>
      </div>
      <Routes>
        <Route path='about' element={<About></About>}></Route>
        <Route path='board' element={<Board></Board>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
