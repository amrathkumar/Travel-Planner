import React from "react";

function Home() {
    return(
        <div>
            <div class="destinations">
                <h2>Popular Destinations</h2>
                <div class="destination-grid">
                    <div class="destination-card">
                        <div class="destination-image">🗼</div>
                        <div class="destination-info">
                            <h3>Paris, France</h3>
                            <p>Experience the city of lights with its romantic streets, world-class museums, and iconic landmarks.</p>
                            <div class="destination-price">From 50,000 Rs</div>
                        </div>
                    </div>
                    <div class="destination-card">
                        <div class="destination-image">🏝️</div>
                        <div class="destination-info">
                            <h3>Bali, Indonesia</h3>
                            <p>Tropical paradise with beautiful beaches, ancient temples, and vibrant culture.</p>
                            <div class="destination-price">From 80,000 Rs</div>
                        </div>
                    </div>
                    <div class="destination-card">
                        <div class="destination-image">🗻</div>
                        <div class="destination-info">
                            <h3>Tokyo, Japan</h3>
                            <p>Modern metropolis blending cutting-edge technology with traditional culture.</p>
                            <div class="destination-price">From 60,000 Rs</div>
                        </div>
                    </div>
                    <div class="destination-card">
                        <div class="destination-image">🍹</div>
                        <div class="destination-info">
                            <h3>Las Vegas, USA</h3>
                            <p>Experience the dazzling “Entertainment Capital of the World” with its vibrant nightlife, spectacular shows, luxurious resorts, and endless excitement on the iconic Strip.</p>
                            <div class="destination-price">From 1,60,000 Rs</div>
                        </div>
                    </div>
                    <div class="destination-card">
                        <div class="destination-image">🏰</div>
                        <div class="destination-info">
                            <h3>Moscow, Russia</h3>
                            <p>Experience the majestic capital with its grand architecture, rich history, vibrant arts scene, and iconic landmarks like the Kremlin and Red Square.</p>
                            <div class="destination-price">From 40,000 Rs</div>
                        </div>
                    </div>
                    <div class="destination-card">
                        <div class="destination-image">🕌</div>
                        <div class="destination-info">
                            <h3>Agra, India</h3>
                            <p>Experience the historic city renowned for the breathtaking Taj Mahal, Mughal-era architecture, bustling bazaars, and a rich cultural heritage that brings India’s royal past to life.</p>
                            <div class="destination-price">From 40,000 Rs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;