import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return ( 
    <div className="footer">
      <div>
        <Link to="contact" className="footer-contact">Contact Us</Link>
      </div>
      <div>
          <a href="https://www.linkedin.com/company/adhesives-specialists/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-lg m-2" style={{color: "#FFF"}}></i></a>
          <a href="https://www.facebook.com/adhesivesspecialistsinc" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square fa-lg m-1" style={{color: "#FFF"}}></i></a>
          <a href="mailto:customerservice@adspecinc.com"><i className="fas fa-envelope-square fa-lg m-1" style={{color: "#FFF"}}></i></a>
      </div>
      <div>
        Adhesives Specialists Inc., Family owned, Established in 1983
      </div>
    </div>
  );
}
 
export default Footer;