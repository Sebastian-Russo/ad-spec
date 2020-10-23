import React from 'react';

const Liquid = () => {
  return ( 
    <div className="container">
      <h3>Liquid Adhesives</h3>
      <p>Call 1-800-275-7006 and Speak to a Glue Expert to Find the Glue that’s Right for You. Or Email Us at 
            <a href="mailto:customerservice@adhesivesspecialists.com"> customerservice@adhesivesspecialists.com</a></p>
            {/* <img src="" alt=""/> */}
      <p>Liquid Adhesives are based on natural polymers such as dextrin, starches, and resins. They may be made from emulsions or dispersions of polyvinyl acetate, (PVAs) polyacrylates, ethylene vinyl acetates (EVAs) or natural rubber. Adhesives Specialist, Inc. supplies a wide range of high-quality, water-based adhesives, including tailor-made solutions.</p>
      <h4>Here's a list of some of our liquid adhesives:</h4>
      <table className="table">
        <thead>
          <tr>
            <th>ADSPEC 3003</th>
            <th>ADSPEC 65-301</th>
            <th>ADSPEC 4302</th>
          </tr>
        </thead>
            <tbody>
              <tr>
              <td>Pressure Sensitive Hot Melt <br/>Laminating and Coating <br/><a href="#">More information</a></td>
              <td>Pressure Sensitive Hot Melt <br/>Laminating and Coating <br/><a href="#">More information</a></td>
              <td>Pressure Sensitive Hot Melt <br/>Laminating and Coating <br/><a href="#">More information</a></td>
              </tr>
            </tbody>
            <thead>
          <tr>
            <th>ADSPEC 5690</th>
            <th>ADSPEC 5525</th>
            <th>ADSPEC 85-301</th>
          </tr>
        </thead>
            <tbody>
              <tr>
              <td>Pressure Sensitive Hot Melt<br/>Krones Labelers <br/><a href="#">More information</a></td>
              <td>Fugitive Glue <br/>Low Tack <br/><a href="#">More information</a></td>
              <td>Fugitive Glue <br/>Mail/Credit Card <br/><a href="#">More information</a></td>
              </tr>
            </tbody>
          </table>
          <p>Here's are some Industries that use Liquid Adhesives:</p>
          <div className="container d-flex flex-row">
            <ul className="col">
              <li>AC Filter</li>
              <li>Automotive</li>
              <li>Paper Bags</li>
              <li>Book Binding</li>
              <li>Business Form</li>
              <li>Corrugated Boxes</li>
              <li>Envelopes</li>
              <li>Folding Cartons</li>
            </ul>
            <ul className="col">
              <li>Furiture</li>
              <li>Hygiene Products</li>
              <li>Insultation</li>
              <li>Labeling</li>
              <li>Palletizing</li>
              <li>Pressure Sensitives</li>
              <li>Security Packaging</li>
              <li>Tube Winding</li>
            </ul>
          </div>
    </div>
   );
}
 
export default Liquid
