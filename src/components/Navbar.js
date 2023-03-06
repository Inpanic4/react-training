import React from "react";
import reactLogo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} className="img"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
