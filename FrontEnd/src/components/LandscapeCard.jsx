import React from "react";

export default function LandscapeCard({ img, children }) {
  return (
    <div className="landscape-wrapper">
      <div 
        className="landscape-card"
        style={{
          backgroundImage: `url(${img})`
        }}
      >
        <div className="overlay-content">
          {children}
        </div>
      </div>
    </div>
  );
}
