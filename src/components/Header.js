import React from "react";
import trollFace from "../images/troll-face.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img className="header-image" src={trollFace} />
        <h1 className="header-site-name">Meme Generator</h1>
      </div>
      <h3 className="header-text"> React Course - Project 3</h3>
    </header>
  );
}
