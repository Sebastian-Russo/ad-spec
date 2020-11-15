import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAdhesives } from '../../services/adhesives';

class PressureSensitive extends Component {
  state = { 
    selected: '',
    adhesives: []
   }

  componentDidMount() {
    this.setState({ adhesives: getAdhesives() })
  }

  render() { 
    const { adhesives } = this.state; 
    const pressureSensitive = adhesives.filter(adhesive => adhesive.glue === "pressure sensitive");

    return ( 
    <div className="container">
      <h3>Pressure Sensitive Adhesives</h3>
      
      <table className="table table-striped">
      <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
            {pressureSensitive.map(adhesive =>             
            <tr key={adhesive.name}>
              <th><Link to={`/pressure-sensitive/${adhesive.name}`}>{adhesive.name}</Link></th>
              <td>{adhesive.type}</td>
              <td>{adhesive.description}</td>
            </tr>
            )}
          </tbody>
      </table>

      <h5>Industries our Pressure Sensitive Adhesives are used in :</h5>
      <div className="container d-flex flex-row">
        <ul className="col">
          <li>Automotive Adhesives</li>
          <li>Foam Fabrication</li>
          <li>Book Binding Adhesives</li>
          <li>Business Form Adhesives</li>
          <li>Envelope Adhesives</li>
          <li>Folding Carton Adhesives</li>
          <li>Automotive Adhesives</li>
          <li>Foam Fabrication</li>
          <li>Book Binding Adhesives</li>
          <li>Business Form Adhesives</li>
          <li>Envelope Adhesives</li>
          <li>Folding Carton Adhesives</li>
          <img src="images/approved.png" alt="approved" width="100px"/>
        </ul>
        <img src="images/fugitive.jpg" alt="fugitive glue" width="40%" height="40%"/>
      </div>
      <div className="front-page-image">
        {/* <img src="images/pressure-sensitive.jpg" alt="pressure sensitive glue" width="75%"/> */}
      </div>
      <div style={{clear: "left"}}></div>

    </div>
     );
  }
}
 
export default PressureSensitive
