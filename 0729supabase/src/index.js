import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import RestApi from './RestApi'
import Restfulapi from './RestfulApi'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <RestApi></RestApi> */}
    <Restfulapi></Restfulapi>
  </React.StrictMode>
);


