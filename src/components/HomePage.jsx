import React, { useState } from "react";
import sticker from "../assets/image-1.gif"; 
import Watermark from "./Watermark";

const HomePage = () => {
  return (
    <div className="container">
      <img src={sticker} alt="My GIF Sticker" />
      <h1>Will You be my Valentine? 🤗</h1>
      
      <p className="text-art">
        "From the moment I met you, my heart knew it had found its home. Will you be my Valentine and make every day as magical as you?"
      </p>

      <div className="btn">
        <a href="/yes">Yes</a>
        <a href="/no1">No</a>
      </div>

      {/* Hearts and Roses */}
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
      <Watermark />
    </div>
  );
};

export default HomePage;
