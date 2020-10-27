import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAdhesives } from '../../services/adhesives';

class Hotmelt extends Component {
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
    const hotmelts = adhesives.filter(adhesive => adhesive.glue === "hot melt");

    return ( 
    <div className="container">
      <h3>Hot Melt Adhesives</h3>
      <div>
        <img src="images/hot-melt-in-jars.jpg" alt="hotmelt in jars" width="75%"/>
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
          {hotmelts.map(adhesive =>             
          <tr key={adhesive.name}>
            <th><Link to={`/hotmelt/${adhesive.name}`}>{adhesive.name}</Link></th>
            <td>{adhesive.description}</td>
            <td>{adhesive.type}</td>
          </tr>
          )}
        </tbody>

      </table>
      <p>Seal Tite – Ethylene Vinyl Acetate – EVA based hot melts are the most widely used form of Hot Melt and are an economical option for case sealing applications. Adhesives Specialists is known for having the highest quality EVA Hot Melts – for the lowest price in the industry.</p>
      <p>Superior Melt – Metallocene based hot melts are the highest quality adhesives used in a broad range of applications. The benefits of Metallocenes are clean running and char resistant which reduces down time and eliminates replacement parts.</p>
    </div>

     );
  }
}
 
export default Hotmelt;

