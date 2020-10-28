import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() { 
    return ( 
      <div>
        <nav className="navbar navbar-expand-lg ">
          <Link to="/" className="navbar-brand" ><img src="images/ASI-logo.jpeg" alt="logo" width="50%"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link" >About<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="hotmelt" className="nav-link" >Hot Melt<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="pressure-sensitive" className="nav-link" >Pressure Sensitive<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="liquid" className="nav-link" >Liquid<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="equipment" className="nav-link" >Equipment<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="careers" className="nav-link" >Careers<span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link" >Contact<span className="sr-only"></span></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
     );
  }
}
 
export default Navbar;