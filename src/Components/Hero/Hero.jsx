import React from "react";
import "./Hero.css";
import deals from "../Assets/deals.png";
import arrow from "../Assets/right-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Top Deals</h2>
        <div>
          <div className="hand-icon">
            <p>Discount on</p>
          </div>
          <p>every product !!</p>
        </div>
        <div className="browse">
          <div>Browse</div> 
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={deals} alt="" />
      </div>
    </div>
  );
};

export default Hero;
