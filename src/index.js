import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Context from './Context';


ReactDOM.render(
  <Router>
    <Context>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context>
  </Router>

  ,
  document.getElementById('root')
);


