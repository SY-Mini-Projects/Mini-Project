import React from "react";
import "./Carousel.css";
export default function Carousel() {
  return (
      <div className="carousel-container">
        <div className="carousel" id="carouselExampleFade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x500/?burger"
                className="carousel-image"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x500/?pizza"
                className="carousel-image"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/600x250/?fries"
                className="carousel-image"
                alt="Fries"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" onClick={prevSlide}>
            &lsaquo;
          </button>
          <button className="carousel-control-next" type="button" onClick={nextSlide}>
            &rsaquo;
          </button>
        </div>
        <div className="search-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </div>
  );    
  
}
