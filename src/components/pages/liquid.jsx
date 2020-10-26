import React, { Component } from 'react';
import { getAdhesives } from '../../services/adhesives';

class Liquid extends Component {
  state = { 
    selected: '',
    adhesives: []
  }

  componentDidMount() {
    this.setState({ adhesives: getAdhesives() })
  }

  render() { 
    const { adhesives } = this.state;
    const liquids = adhesives.filter(adhesive => adhesive.glue === 'cold glue')

    return ( 
    <div className="container">
      <h3>Liquid Adhesives</h3>
      <table className="table">
        <thead>
        {liquids.map(adhesive =>             
          <tr key={adhesive.name}>
            <th>{adhesive.name}</th>
            <td>{adhesive.type}</td>
            <td>{adhesive.description}</td>
          </tr>
        )}
        </thead>
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
}
 
export default Liquid
