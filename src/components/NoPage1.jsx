import React from "react";
import '../App.css';
import sticker from "../assets/image-2.gif";
import Watermark from "./Watermark";

const NoPage1 = () => {
  return (
    <div className="container">

      <img src={sticker} alt="My GIF Sticker" />
      <h1>Soch le ache se! 🙄</h1>
      <p  className="text-art">"Soch le ache se, kyunki jo pal hai, woh tumhare aur mere liye ek khubsurat dastaan ban sakta hai."</p>
      <div className="btn">
        <a href="/yes">Yes</a>
        <a href="/no2">No</a>
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

export default NoPage1;
