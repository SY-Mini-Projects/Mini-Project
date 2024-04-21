import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
              <h4>Company</h4>
              <a href="/employer">
                <p>About</p>
              </a>
              <a href="/healthplan">
                <p>Career</p>
              </a>
              <a href="/individual">
                <p>Teams</p>
              </a>
            </div>
            <div className="sb_footer-links-div">
              <h4>Contact us</h4>
              <a href="/employer">
                <p>Help & support</p>
              </a>
              <a href="/healthplan">
                <p>Partner with us</p>
              </a>
              <a href="/individual">
                <p>Ride with us</p>
              </a>
            </div>
            <div className="sb_footer-links-div">
              <h4>We deliver to:</h4>
              <a href="/employer">
                <p>Mumbai</p>
              </a>
              <a href="/healthplan">
                <p>Bangalore</p>
              </a>
              <a href="/individual">
                <p>Delhi</p>
              </a>
            </div>
            <div className="sb_footer-links-div">
              <h4>Follow us on</h4>
              <div className='socialmedia'>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-linkedin"></a>
              </div>
            </div>
            <hr></hr>
            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>
                  @{new Date().getFullYear()} Maniac All rights reserved.
                </p>
              </div>
              <div className="sb_footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/terms"><div><p>Privacy</p></div></a>
                <a href="/terms"><div><p>Security</p></div></a>
                <a href="/terms"><div><p>Cookie declaration</p></div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
