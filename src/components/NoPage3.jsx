import React, { useEffect } from "react";
import '../App.css';
import sticker from "../assets/image-4.gif";
import Watermark from "./Watermark";

const NoPage3 = () => {
  const moveRandomEl = (elm) => {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  };

  useEffect(() => {
    const moveRandom = document.querySelector("#move-random");
    moveRandom.addEventListener("mouseenter", function (e) {
      moveRandomEl(e.target);
    });
  }, []);

  return (
    <div className="container">

      <img src={sticker} alt="My GIF Sticker" />
      <h1>Manja na! Kitna bhav khaegi 😭</h1>
      <p  className="text-art">"Ab itna bhi nakhra theek nahi, ek baar muskura do na, dil toh tere hi liye dhadkta hai ❤️💕"</p>
      <div className="btn">
        <a href="/yes">Yes</a>
        <a href="#" id="move-random">No</a>
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

export default NoPage3;
