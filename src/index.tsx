import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './assets/styles/base.css';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
