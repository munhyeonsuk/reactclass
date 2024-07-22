import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Gnb';
import Navi2 from './Gnb2';
import Navi3 from './Gnbgo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navi />
    <Navi2 />
    <Navi3 />
  </div>
);

