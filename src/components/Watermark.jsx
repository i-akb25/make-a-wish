import React from "react";
import akbImage from "../assets/akb-image.png"; // Ensure this path is correct

const Watermark = () => {
  return (
    <div className="watermark-container">
      <button className="watermark-text">copyright @akb</button>
      <img className="popup-image" src={akbImage} alt="AKB Image" />
    </div>
  );
};

export default Watermark;

