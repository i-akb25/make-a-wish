import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import sticker from '../assets/image-7.gif';

const PopupForm = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    yourName: '',
    partnerName: '',
    messageToPartner: '',
    comment: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setFormData({
      yourName: '',
      partnerName: '',
      messageToPartner: '',
      comment: ''
    });
    setStatusMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      your_name: formData.yourName,
      partner_name: formData.partnerName,
      message_to_partner: formData.messageToPartner,
      comment: formData.comment
    };

    emailjs
      .send(
       'REACT_PUBLIC_SERVICE_ID',    
      'REACT_PUBLIC_TEMPLATE_ID',    
        templateParams,
      'REACT_PUBLIC_USER_ID'  
      )
      .then((response) => {
        setStatusMessage('Wish successfully!');
        setTimeout(() => setStatusMessage(''), 5000); 
        handleClear();
      })
      .catch((err) => {
        setStatusMessage('Failed to Make a Wish. Please try again.');
        setTimeout(() => setStatusMessage(''), 5000); 
      });
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Make a Wish for Your Partner</h2>
        <img className="shy-img" src={sticker} alt="shy sticker" />
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Partner Name:
            <input
              type="text"
              name="partnerName"
              value={formData.partnerName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message for your Partner:
            <textarea
              name="messageToPartner"
              value={formData.messageToPartner}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Wish Box:
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </label>
          <div className="form-buttons">
            <button type="button" onClick={handleClear}>Clear</button>
            <button type="submit">Make Wish</button>
          </div>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopupForm;
