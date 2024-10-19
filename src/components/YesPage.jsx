import React, { useState } from 'react';
import picture from '../assets/image-5.gif';
import sticker from '../assets/image-6.gif';
import { useNavigate } from 'react-router-dom';
import PopupForm from './PopupForm';
import Watermark from "./Watermark";

const YesPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const navigate = useNavigate();

  const handleShowPopup = () => {
    setShowPopup(true);
    setShowFormPopup(false); // Ensure form popup is hidden
  };

  const handleGoHome = () => {
    setShowPopup(false);
    setShowFormPopup(false); // Hide both popups when going home
    navigate('/');
  };

  const handleOpenForm = () => {
    setShowFormPopup(true); // Show the form popup
    setShowPopup(false); // Hide the initial popup
  };

  return (
    <div className="yes-page-container">
      <img className="yes-img" src={picture} alt="Happy sticker" />
      <h1>Hehehehe, I knew it!</h1>
      <p className="text-art">"I always knew our hearts were meant to dance to the same melody😘"</p>
      <button onClick={handleShowPopup}>Let's Enjoy Together!</button>

      <div className="heart-container">
        <span className="heart">♥</span>
        <span className="heart">♥</span>
        <span className="heart">♥</span>
        <span className="heart">♥</span>
        <span className="heart">♥</span>
      </div>

      <div className="rose-container">
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
      </div>

      {/* Main Popup */}
      {showPopup && (
        <div className="popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div className="popup-content">
            <h2>"Tumhare bina ye raat bhi adhoori hai, jaane se pehle ek pal ke liye ruk jao."😢</h2>
            <img src={sticker} alt="Emotional sticker" />
            <div className="popup-buttons">
              <button onClick={handleGoHome}>Start Again</button>
              <button onClick={handleOpenForm}>Surprise Message</button>
            </div>
          </div>
        </div>
      )}

      {/* Form Popup */}
      {showFormPopup && (
        <PopupForm closePopup={() => setShowFormPopup(false)} />
      )}

      <Watermark />
    </div>
  );
};

export default YesPage;
