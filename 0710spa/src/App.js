import React, { useState } from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';


const App = () => {
  const [count, setCount] = useState(0);
  const [ toggle,setToggle ] =useState(false);
  return(
  <>
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick = {()=>{ setToggle(!toggle); }}> {
        toggle ? "열기" : "닫기"
      }</button>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/etc">etc라고 노출</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/etc" element={<h2>호출됨</h2>} />
      </Routes>
    </div>
  </>
)};

export default App;
