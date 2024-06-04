// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './global.css';
import './styler.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);