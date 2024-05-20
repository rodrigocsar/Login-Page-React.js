import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import'bootstrap/dist/js/bootstrap.bundle'
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Style/GlobalStyle';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

