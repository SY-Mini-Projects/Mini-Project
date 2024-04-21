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
import biryani from './biryani.png';
import cake from './cake.png';
import rolls from './rolls.png';
import pasta2 from './pasta2.png';
export default function Home2() {
    return (
        <div>
            <Navbar />
            <section className="hero">
                <div className="hero-content">
                    <h2>Indulge in Culinary Excellence, Delivered to Your Doorstep</h2>
                    <a href="http://localhost:3000/" className="btn">Order Now</a>
                </div>
            </section>
            <section className="restaurants">
                <h2>Top Restaurants</h2>
                <div className="restaurant-grid">
                    <div className="restaurant-card">
                        <img src={resto3} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Mainland china</h3>
                            <p>Savour chinese food</p>
                            <a href="http://localhost:3000/" className="btn">Order Now</a>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img src={resto4} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Behrouvz</h3>
                            <p>Savour biryani</p>
                            <a href="http://localhost:3000/" className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="restaurant-grid">
                    <div className="restaurant-card">
                        <img src={resto5} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>KFC</h3>
                            <p>Savour burger</p>
                            <a href="http://localhost:3000/" className="btn">Order Now</a>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img src={resto6} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Pizza express</h3>
                            <p>Savour pizza</p>
                            <a href="http://localhost:3000/" className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="restaurant-grid">
                    <div className="restaurant-card">
                        <img src={resto7} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Monginis</h3>
                            <p>Savour deserts</p>
                            <a href="http://localhost:3000/" className="btn">Order Now</a>
                        </div>
                    </div>
                    <div className="restaurant-card">
                        <img src={resto8} alt="Restaurant 1" />
                        <div className="overlay">
                            <h3>Pasta retreat</h3>
                            <p>Savour pasta</p>
                            <a href="http://localhost:3000/" className="btn">Order Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="whats-on-your-mind">
            <h2>What's on Your Mind</h2>
            <div className="image-container">
                <img src={pizza} alt="Image 1" />
                <img src={burger} alt="Image 2" />
                <img src={biryani} alt="Image 2" />
                <img src={cake} alt="Image 2" />
                <img src={rolls} alt="Image 2" />
                <img src={pasta2} alt="Image 2" />
            </div>
        </section>
            <section className="offers">
                <h2>Special Offers</h2>
                <div className="offer-card">
                    <img src={offer} alt="Offer 1" />
                </div>
            </section>
            <h2 className='Hello'>Explore every restaurant near me</h2>
            <div className="text-boxes">
            <div className="box">
                <h3>Explore restaurants Near me</h3>
            </div>
            <div className="box">
                <h3>Explore Top rated restaurants Near me</h3>
            </div>
        </div>
            <Footer />
        </div>
    );
}

