// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoutesApp from './routes';
import Popup from './components/Popup';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleButtonClick = (path) => {
    navigate(path);
    setShowPopup(false);  // Certifique-se de que o popup feche após a navegação
  };

  return (
    <>
      <RoutesApp />
      {showPopup && <Popup show={showPopup} onClose={handleClose} onButtonClick={handleButtonClick} />}
    </>
  );
}

export default App;
