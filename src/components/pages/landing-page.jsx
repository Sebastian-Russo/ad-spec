import React from 'react';
import Request from '../request';

const LandingPage = () => {
  return ( 
    <div>
      <div className="container">
        <h3>Hot Melt, Pressure Sensitive & Cold Glue Manufacturer</h3>
        <img src="images/chemistry1.jpeg" alt="beakers"/>
        <p>Established in 1983, Adhesives Specialists, Inc has grown into a nationally recognized manufacturer of Hot Melts, Pressure Sensitives & Liquid Adhesives – supporting customers across the nation. Our state-of-the-art processing facility produces adhesives for many Fortune 500 Companies with applications like bottle, can and jar labeling, food packaging, carton sealing, paper bag forming, foam bonding, book binding and laminating.</p>
        <p>Adhesives Specialists' mission is to formulate quality adhesives that meet our customers’ requirements while keeping costs lower than our competition.</p>
        <div style={{clear: "left"}}></div>
        <ul>
          <li><h5>Why use Adhesives Specialists?</h5></li>
          <li><img src="images/made-usa.png" alt="best-price-tag" width="15%"/></li>
          <p>Adhesives Specialists sets itself apart from other glue manufacturers by providing services unmatched in the industry.</p>
          <li>We train your employees on the proper ways to operate gluing equipment</li>
          <li>We maintain your hot melt and gluing equipment</li>
          <li>We schedule maintenance and equipment cleanings</li>
          <li>We're a third party counsel on adhesive matters</li>
          <li>We have superior in person technical support</li>
        </ul>
        </div>
        <Request />
    </div>
      
   );
}

export default LandingPage;