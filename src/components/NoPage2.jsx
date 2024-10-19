import React from "react";
import '../App.css';
import sticker from "../assets/image-3.gif";
import Watermark from "./Watermark";

const NoPage2 = () => {
  return (
    <div className="container">
      <img src={sticker} alt="My GIF Sticker" />
      <h1>Ek aur baar Soch le! 😣</h1>
      <p className="text-art">"Ek aur baar soch le, kahin dil ki dhadkanon mein chhupi baat tumse kuch kehna chahti ho..."</p>
      <div className="btn">
        <a href="/yes">Yes</a>
        <a href="/no3">No</a>
      </div>
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

export default NoPage2;
