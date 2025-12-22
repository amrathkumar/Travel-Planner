import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './style.css'

function Header() {
  return (
    <header className="container">
      <div className="logo">
        <a href="/" style={{ textDecoration: "none" }}>✈️ HippieUP</a>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/map">Conquered</Link></li>
          <li><Link to="/user/places">My Destinations</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 
