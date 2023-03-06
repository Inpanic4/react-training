import React from "react";
import logo from "../images/icon1.png";
import "../style.css";
// import ReactDOM from "react-dom";

export default function Navbar() {
  return (
    <nav>
      <header className="nav-items">
        <div className="item">
          <img src={logo} className="img" />
          <h3 className="facts">ReactFacts</h3>
        </div>
        <h4 className="extra-title">React Course - Project1</h4>
      </header>
    </nav>
  );
}
