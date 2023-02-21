import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rect from './Rect';
import Circle from './Circle';
import Square from './Square';
import Cube from './Cube';
import Triangle from './Triangle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Rect /><Circle /><Square /><Cube/><Triangle/></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
