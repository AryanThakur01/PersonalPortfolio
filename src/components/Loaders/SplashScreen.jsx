import { Html } from "@react-three/drei";
import React from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <Html>
      <div className="container">
        <div className="part face">
          <span>W</span>
          <span>Loading...</span>
        </div>
        <div className="part right">
          <span>T</span>
          <span>Loading...</span>
        </div>
        <div className="part back">
          <span>I</span>
          <span>Loading...</span>
        </div>
        <div className="part left">
          <span>A</span>
          <span>Loading...</span>
        </div>
        <div className="part top"></div>
        <div className="part shadow">
          <span>...</span>
        </div>
      </div>
    </Html>
  );
};

export default SplashScreen;
