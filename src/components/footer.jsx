import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return ( 
    <div className="container-footer">
      <div className="row">
        <div className="col">
          <Link to="/" className="footer-link" ><img src="images/ASI-logo.jpeg" alt="logo" width="110px" className="logo"/></Link>
        </div>
        <div className="col">
          <ul>
            <li><Link to="contact" className="footer-link">Contact Us</Link></li>
            <li><Link to="/" className="footer-link" >Home</Link></li>
            <li><Link to="about" className="footer-link" >About</Link></li>
            <li><Link to="hotmelt" className="footer-link" >Hot Melt</Link></li>
            <li><Link to="pressure-sensitive" className="footer-link" >Pressure Sensitive</Link></li>
            <li><Link to="liquid" className="footer-link" >Liquid</Link></li>
            <li><Link to="equipment" className="footer-link" >Equipment</Link></li>
            <li><Link to="careers" className="footer-link" >Careers</Link></li>
          </ul>
        </div>
        <div className="col">
          <h3><a href="mailto:stever@adhesivesspecialists.com" className="footer-link request">Request a price quote</a></h3>
          <h3><a href="mailto:stever@adhesivesspecialists.com" className="footer-link request">Request an adhesive appraisal</a></h3>
        </div>
        <div className="col">
          <p>Family owned, Established in 1983</p>
          <p>Adhesives Specialists Inc.</p>
          <p>739 Roble Road Allentown, PA 18109</p>
          <p>Phone: 1-800-275-7006</p>
          <a href="https://www.linkedin.com/company/adhesives-specialists/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-lg m-2" style={{color: "#FFF"}}></i></a>
          <a href="https://www.facebook.com/adhesivesspecialistsinc" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square fa-lg m-1" style={{color: "#FFF"}}></i></a>
          <a href="mailto:customerservice@adspecinc.com"><i className="fas fa-envelope-square fa-lg m-1" style={{color: "#FFF"}}></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;