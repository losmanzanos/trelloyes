import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store.js'

ReactDOM.render(
  <React.StrictMode>
    <App lists={Store.lists} allCards={Store.allCards}/>
  </React.StrictMode>,
  document.getElementById('root')
);