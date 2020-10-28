import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAdhesives } from '../../services/adhesives';

class Liquid extends Component {
  state = { 
    selected: '',
    adhesives: []
  }

  componentDidMount() {
    this.setState({ adhesives: getAdhesives() })
  }

  handleClick = name => {
    this.setState({ selected: name })
  }

  render() { 
    const { adhesives } = this.state;
    const liquids = adhesives.filter(adhesive => adhesive.glue === 'cold glue')

    return ( 
    <div className="container">
      <h3>Liquid Adhesives</h3>
      <img src="images/approved.png" alt="approved" width="100px"/>
      <div className="front-page-image">
        <img src="images/liquid-glue.jpg" alt="liquid glue" width="100%"/>
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
        {liquids.map(adhesive =>             
          <tr key={adhesive.name}>
            <th><Link to={`/liquid/${adhesive.name}`}>{adhesive.name}</Link></th>
            <td>{adhesive.type}</td>
            <td>{adhesive.description}</td>
          </tr>
        )}
        </tbody>
      </table>
          <h5>Industries our Liquid Adhesives are used in:</h5>
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
            <img src="images/glue-bottle.png" alt="glue-bottle" width="30%" height="30%" />

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
