import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;