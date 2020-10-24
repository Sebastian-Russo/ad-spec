import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() { 
    return ( 
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Adhesives Specialists</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" >Home<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="hotmelt" className="nav-link" >Hot Melt<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="pressure-sensitive" className="nav-link" >Pressure Sensitive<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="liquid" className="nav-link" >Liquid<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="equipment" className="nav-link" >Equipment<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
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