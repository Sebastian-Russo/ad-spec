import React, { Component } from 'react';

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
            <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Hot Melts<span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Pressure Sensitives<span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Liquids<span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Equipment<span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Contact<span className="sr-only"></span></a>
          </li>
        </ul>
      </div>

      </nav>
      </div>
     );
  }
}
 
export default Navbar;