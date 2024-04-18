import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS file for footer styling

export default function Footer() {
  return (
    <footer className="footer">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        rel="stylesheet"
      ></link>
      <div className="container">
        <div className="footer-content">
          <div className="logo-section">
            <Link to="/" className="logo-link text-decoration-none">
              <h1 className="logo">Maniac</h1>
            </Link>
            <p className="text-muted">© 2023 Maniac, Inc</p>
          </div>
          <div className="social-media-section">
            <ul className="social-media-list list-unstyled d-flex mb-0">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="subscribe-form">
            <h5 className="mb-3">Subscribe to our Newsletter</h5>
            <form className="d-flex">
              <input
                className="form-control me-2 subscribe-input"
                type="email"
                placeholder="Enter your email"
              />
              <button className="btn btn-light" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

