import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.jsx';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

  // ReactDOM.render(<TimerView todo={myTodo} />, document.getElementById('root1'))

reportWebVitals();
