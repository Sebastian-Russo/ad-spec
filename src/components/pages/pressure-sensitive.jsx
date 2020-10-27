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
      <div>
        <img src="images/pressure-sensitive.jpg" alt="pressure sensitive glue" width="35%"/>
        <img src="images/fugitive.jpg" alt="fugitive glue" width="35%"/>
      </div>
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

      <p>Industries our Pressure Sensitive Adhesives are used in :</p>
      <div className="container d-flex flex-row">
        <ul className="col">
          <li>Automotive Adhesives</li>
          <li>Foam Fabrication</li>
          <li>Book Binding Adhesives</li>
          <li>Business Form Adhesives</li>
          <li>Envelope Adhesives</li>
          <li>Folding Carton Adhesives</li>
        </ul>
        <ul className="col">
          <li>Automotive Adhesives</li>
          <li>Foam Fabrication</li>
          <li>Book Binding Adhesives</li>
          <li>Business Form Adhesives</li>
          <li>Envelope Adhesives</li>
          <li>Folding Carton Adhesives</li>
        </ul>
          </div>
    </div>
     );
  }
}
 
export default PressureSensitive
