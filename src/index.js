import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Menu from './components/Menu';
import './global.scss'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <App />
    <Footer/>
  </React.StrictMode>
);
