import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

// const app = ReactDOM.createRoot(document.getElementById('app'));

// app.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );