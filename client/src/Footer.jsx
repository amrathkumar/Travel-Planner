import React from "react";
import './style.css'

function Footer() {
    return(
        <footer>
            <div className="footer-section">
                <h4>About Us</h4>
                <p>HippieUP is your trusted travel companion, helping you create unforgettable memories around the world.</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#deals">Travel Deals</a></li>
                    <li><a href="#blog">Travel Blog</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li>📧 info@wanderlust.com</li>
                    <li>📱 +91 5626562559</li>
                    <li>📍 Travel City</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;