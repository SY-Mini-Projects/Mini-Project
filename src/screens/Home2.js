import React from 'react';
import './Home2.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import resto3 from './resto3.jpeg';
import resto4 from './resto4.jpeg';
import resto5 from './resto5.jpeg';
import resto6 from './resto6.jpeg';
import resto7 from './resto7.webp';
import resto8 from './resto8.jpeg';
import offer from './offer.jpg';
import pizza from './pizza.png';
import burger from './burger.png';
export default function Home2() {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Indulge in Culinary Excellence, Delivered to Your Doorstep</h2>
                    <a href="#" className="btn">Order Now</a>
                </div>
            </section>


            {/* Restaurants Section */}
            <section className="restaurants">
                <h2>Top Restaurants</h2>
                {/* Restaurant Cards */}
                <div className="restaurant-grid">
                    <div className="restaurant-card">
                        <img src={resto3} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Restaurant Name</h3>
                            <p>Description of the restaurant.</p>
                            <a href="#" className="btn">Order Now</a>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img src={resto4} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Restaurant Name</h3>
                            <p>Description of the restaurant.</p>
                            <a href="#" className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="restaurant-grid">
                    <div className="restaurant-card">
                        <img src={resto5} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Restaurant Name</h3>
                            <p>Description of the restaurant.</p>
                            <a href="#" className="btn">Order Now</a>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img src={resto6} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Restaurant Name</h3>
                            <p>Description of the restaurant.</p>
                            <a href="#" className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="restaurant-grid">
                    <div className="restaurant-card">
                        <img src={resto7} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Restaurant Name</h3>
                            <p>Description of the restaurant.</p>
                            <a href="#" className="btn">Order Now</a>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img src={resto8} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Restaurant Name</h3>
                            <p>Description of the restaurant.</p>
                            <a href="#" className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="whats-on-your-mind">
            <h2>What's on Your Mind</h2>
            <div className="image-container">
                {/* Images */}
                <img src={pizza} alt="Image 1" />
                <img src={burger} alt="Image 2" />
                {/* Add more images as needed */}
            </div>
        </section>
            {/* Offers Section */}
            <section className="offers">
                <h2>Special Offers</h2>
                {/* Offer Cards */}
                <div className="offer-card">
                    <img src={offer} alt="Offer 1" />
                </div>
                {/* Add more offer cards as needed */}
            </section>
            <Footer />
        </div>
    );
}

