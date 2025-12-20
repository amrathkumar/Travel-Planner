import React from "react";
import { Helmet } from "react-helmet";
import './style.css'

function Header() {
  return (
    <header className="container">
      <div className="logo">
        <a href="/" style={{ textDecoration: "none" }}>✈️ HippieUP</a>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/map">Conquered</a></li>
          <li><a href="/user/places">My Destinations</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 